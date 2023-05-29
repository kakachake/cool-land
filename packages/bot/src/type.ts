export type BotMsgStatusType = "error" | "success";

export type BotMsgType =
  | "create"
  | "start"
  | "stop"
  | "error"
  | "message"
  | "login"
  | "scan";

export interface IBotMsg {
  type: BotMsgType;
  status: BotMsgStatusType;
  payload: any;
  pid: number;
}
