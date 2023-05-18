import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import { isProd } from "@cool-land/utils";

export const useMiddlewares = <T extends Koa>(app: T): T => {
  if (isProd()) {
    app.use(logger());
  }

  app.use(bodyParser());

  return app;
};
