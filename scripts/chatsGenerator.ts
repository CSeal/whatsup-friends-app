import {faker} from '@faker-js/faker';
import type {TChat, TUser, TMessage} from 'services/types/chat';
const fs = require('fs');

const countOfIterationsForChats: number = 20;
const countOfIterationsForMessages: number = 40;

const chats: Array<TChat> = [];
const messages: Array<TMessage> = [];

for (let i = 1; i <= countOfIterationsForChats; i++) {
  const chat: TChat = {
    id: i.toString(),
    user: {
      id: 'u' + (i + 1),
      name: faker.name.fullName(),
      avatarImage: Math.random() * 10 > 5 ? faker.image.avatar() : undefined,
    },
    lastMessage: {
      id: 'm' + i,
      text: faker.lorem.paragraph(),
      createdAt:
        Math.random() * 10 > 5 ? new Date().toISOString() : faker.date.recent(),
    },
  };

  chats.push(chat);
}

const itIsMe: TUser = {
  id: 'u1',
  name: faker.name.fullName({sex: 'male'}),
  avatarImage: faker.image.avatar(),
};

const anotherUser: TUser =
  chats[Math.floor(Math.random() * countOfIterationsForChats)].user;
for (let i = 1; i <= countOfIterationsForMessages; i++) {
  const isMe: boolean = Math.random() * 10 > 5;
  const message: TMessage = {
    id: 'm' + i,
    text: faker.lorem.paragraph(),
    createdAt:
      Math.random() * 10 > 5 ? new Date().toISOString() : faker.date.recent(),
    user: {
      id: isMe ? itIsMe.id : anotherUser.id,
      name: isMe ? itIsMe.name : anotherUser.name,
    },
  };
  messages.push(message);
}

fs.writeFileSync(
  './assets/data/chats.json',
  JSON.stringify(chats, undefined, 4),
);

fs.writeFileSync(
  './assets/data/messages.json',
  JSON.stringify(messages, undefined, 4),
);

fs.writeFileSync(
  './assets/data/myUser.json',
  JSON.stringify(itIsMe, undefined, 4),
);
