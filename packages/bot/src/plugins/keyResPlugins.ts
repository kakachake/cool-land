import { Wechaty, log } from "wechaty";

export const keyResPlugins = (options = {}) => {
  return (wechaty: Wechaty) => {
    wechaty.on("message", async (msg) => {
      // log.info(msg.age() + "");

      // log.info("StarterBot", msg.toString());

      if (msg.text() === "ding" && msg.age() < 60) {
        await msg.say("dong");
      }
    });
  };
};
