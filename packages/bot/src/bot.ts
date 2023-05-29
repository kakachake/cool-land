import { WechatyBuilder, log } from "wechaty";
import { QRCodeTerminal } from "wechaty-plugin-contrib";
import { keyResPlugins } from "./plugins/keyResPlugins";
import { WechatyInterface } from "wechaty/impls";
import { processPlugin } from "./plugins/processPlugin";

const config = {
  small: true, // default: false - the size of the printed QR Code in terminal
};

export interface IBotOptions {}
let bot: WechatyInterface;

export function runBot(options: IBotOptions) {
  bot = WechatyBuilder.build({
    name: "island",
    puppet: "wechaty-puppet-wechat",
    puppetOptions: {
      uos: true,
    },
  });

  bot.use(QRCodeTerminal(config));

  bot.use(keyResPlugins());

  bot.use(processPlugin());

  return bot
    .start()
    .then(() => {
      console.log("bot start");
    })
    .catch((e) => log.error("StarterBot", e));
}
