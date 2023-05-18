import { RoutingControllersOptions } from "routing-controllers";
import { dictToArray } from "./utils";
import * as controllers from "app/controllers";

export const routingConfigs: RoutingControllersOptions = {
  controllers: dictToArray(controllers),
  // router prefix
  // e.g. api => http://hostname:port/{routePrefix}/{controller.method}
  routePrefix: "/apis",

  // auto validate entity item
  // learn more: https://github.com/typestack/class-validator
  validation: true,
};
