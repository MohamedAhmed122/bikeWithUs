export type ChatList = {
  id: string;
  name: string;
  image: string;
  lastMsg: { msg?: string; photo?: string };
  unreadMsgs: number;
  lastMsgAt: Date;
};
