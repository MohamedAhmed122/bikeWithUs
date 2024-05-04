export type ChatList = {
  id: string;
  name: string;
  image: string;
  lastMsg: { msg?: string; photo?: string };
  unreadMsgs: number;
  lastMsgAt: Date;
};

export type Message = {
  id: string;
  receiver: boolean;
  sender: boolean;
  msg: { msg?: string; photo?: string };
  date: Date;
  user: {
    id: string;
    name: string;
    image: string;
  };
};
