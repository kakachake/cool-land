import { ENVS } from "./envs";
export * from "./loadEnv";

const getCurrentEnv = (): ENVS | undefined => {
  if (typeof process === "undefined") return;
  const env = process?.env?.NODE_ENV;
  if (typeof env === "undefined") {
    console.warn(`\n> ENV is not set, fallback to ${ENVS.DEVELOPMENT}.`);
  }
  const upperCaseEnv = `${env}`.toUpperCase();
  if (upperCaseEnv === ENVS.PRODUCTION) return ENVS.PRODUCTION;

  return ENVS.DEVELOPMENT;
};

export const CURRENT_ENV = getCurrentEnv();

export const isProd = () => CURRENT_ENV === ENVS.PRODUCTION;
