import { Wechaty } from "wechaty";
import { runBot } from "../bot";

let bot: Wechaty;

export const processPlugin = (options = {}) => {
  return (wechaty: Wechaty) => {
    bot = wechaty;
    wechaty
      .on("scan", (qrcode, status) => {
        process.send?.({
          type: "scan",
          payload: {
            qrcode,
            status,
          },
        });
      })
      .on("login", (user) => {
        process.send?.({
          type: "login",
          payload: user,
        });
      })
      .on("message", (msg) => {
        process.send?.({
          type: "message",
          payload: msg,
        });
      });
  };
};

process.on("message", (message: any) => {
  console.log("message", message);

  const { type } = message;
  switch (type) {
    case "create":
      runBot({})
        .then(() => {
          process.send?.({
            type: "create",
            status: "success",
            payload: null,
            pid: process.pid,
          });
        })
        .catch((e) => {
          process.send?.({
            type: "create",
            status: "error",
            payload: e,
            pid: process.pid,
          });
        });
      break;
    case "stop":
      bot.stop();
      break;
    case "start":
      bot.start().then(() => {
        process.send?.({
          type: "start",
          pid: process.pid,
        });
      });
      break;
    default:
      break;
  }
});
