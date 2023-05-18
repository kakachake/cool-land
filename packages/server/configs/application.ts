import "reflect-metadata";
import Koa from "koa";
import { useKoaServer } from "routing-controllers";
import { routingConfigs } from "./routing.configs";
import { useMiddlewares } from "./koa.middlewares";

const createServer = async (): Promise<Koa> => {
  const koa: Koa = new Koa();
  useMiddlewares(koa);
  const app: Koa = useKoaServer<Koa>(koa, routingConfigs);

  return app;
};

export default createServer;
