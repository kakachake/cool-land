import { Controller, Get } from "routing-controllers";

@Controller()
export class MainController {
  @Get("/")
  HelloWorld() {
    return "hello cool-land";
  }
}
