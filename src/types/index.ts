export type EventType = {
  id: string;
  title: string;
  description: string;
  joined: number;
  isOnWatchList: false;
  user: User;
  joinedUsers: User[];
  address: string;
  date: string;
  maxCapacity: number;
};

export type User = {
  name: string;
  id: string;
  username: string;
  image: string;
  bio: string;
};
