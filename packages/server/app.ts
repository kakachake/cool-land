import createServer from "configs/application";
import { bootstrapBefore } from "configs/bootstrap";
import { print } from "configs/utils";

(async () => {
  try {
    bootstrapBefore();
    const app = await createServer();
    return app.listen(process.env.PORT, () => {
      print.log(
        `server listening on ${process.env.PORT}, in ${process.env.NODE_ENV} mode.`,
      );
    });
  } catch (e) {
    console.log(e);
  }
})();
