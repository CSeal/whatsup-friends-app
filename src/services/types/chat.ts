export type TUser = {
  id: string;
  name: string;
  avatarImage?: string;
};

export type TMessage = {
  id: string;
  text: string;
  createdAt: string | Date;
  user: Omit<TUser, 'avatarImage'>;
};

export type TChat = {
  id: string;
  user: TUser;
  lastMessage: Omit<TMessage, 'user'>;
};
