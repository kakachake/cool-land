import { CURRENT_ENV } from ".";
import * as dotenv from "dotenv";
import { print } from "../print";
import path from "path";

export function loadEnv(prefix = "") {
  const envPath = path.resolve(prefix, `.env.${CURRENT_ENV?.toLowerCase()}`);
  print.log(`Loading env from ${envPath}`);
  dotenv.config({ path: envPath });
  dotenv.config({ path: ".env" });
}
