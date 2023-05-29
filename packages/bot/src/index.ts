import { ChildProcess, fork } from "child_process";
import EventEmitter from "events";
import path from "path";
import { IBotMsg } from "./type";
import { ScanStatus } from "wechaty";

export interface IBotManagerOptions {}

export interface IBoter {
  pid: number;
  bot: ChildProcess;
  ststus: "started" | "stopped";
  loginStatus: boolean;
  scanStatus?: ScanStatus;
  qrCode?: string;
  loginer?: string;
}

export default class BotManager extends EventEmitter {
  botPool = new Map<number, IBoter>();
  options: IBotManagerOptions;

  constructor(options: IBotManagerOptions = {}) {
    super();
    this.options = options;
  }

  createBot() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this;
      const child = fork(path.resolve(__dirname, "./bot.js"));
      if (!child || !child.pid) return false;
      const { pid } = child;
      child.send({
        type: "create",
      });

      child.addListener("message", function onMsg(msg: IBotMsg) {
        const { type } = msg;
        switch (type) {
          case "create": {
            const { status, pid, payload } = msg;
            if (status === "success") {
              self.botPool.set(pid, {
                pid,
                bot: child,
                ststus: "started",
                loginStatus: false,
              });
              resolve(pid);
            } else {
              reject(payload);
            }
            break;
          }
          case "scan": {
            const {
              payload,
            }: {
              pid: number;
              payload: {
                qrcode: string;
                status: ScanStatus;
                data?: string;
              };
            } = msg;
            const { status, qrcode } = payload;
            const boter = self.botPool.get(pid);
            if (!boter) return;
            boter.scanStatus = status;
            boter.qrCode = qrcode;
            break;
          }
          case "login": {
            const { payload } = msg;
            const boter = self.botPool.get(pid);
            if (!boter) return;
            boter.loginStatus = true;
            boter.loginer = payload;
          }
        }
      });
    });
  }

  getAllBot() {
    return Array.from(this.botPool.values());
  }

  getBot(pid: number) {
    return this.botPool.get(pid);
  }

  removeBot(pid: number) {
    const bot = this.botPool.get(pid);
    if (!bot) return;
    bot.bot.kill();
    this.botPool.delete(pid);
  }

  stopBot(pid: number) {
    const bot = this.botPool.get(pid);
    if (!bot) return;
    bot.bot.send({
      type: "stop",
    });
    bot.ststus = "stopped";
  }

  startBot(pid: number) {
    return new Promise<boolean>((resolve, reject) => {
      const boter = this.botPool.get(pid);
      if (!boter || !boter.bot) return;
      const { bot } = boter;
      bot.send({
        type: "start",
      });
      bot.on("message", function onMsg(msg: any) {
        if (msg.type === "bot" && msg.pid === bot.pid) {
          resolve(true);
          boter.ststus = "started";
        } else {
          reject(false);
        }
        bot.removeListener("message", onMsg);
      });
    });
  }
}
