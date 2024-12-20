import { User } from './index';
export type ChatList = {
  id: string;

  lastMsg: { msg?: string; photo?: string };
  unreadMsgs: number;
  lastMsgAt: Date;
  user: User;
};

export type Message = {
  id: string;
  receiver: boolean;
  sender: boolean;
  msg: { msg?: string; photo?: string };
  date: Date;
  user: User;
};
