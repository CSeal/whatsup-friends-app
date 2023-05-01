import React from 'react';
import {FlatList} from 'react-native';
import ChatListItem from 'components/ChatListItem';
import chats from '@assets/data/chats.json';
import type {PropsWithChildren} from 'react';

type ChatsScreenProps = PropsWithChildren<{}>;

const ChatsScreen = (_: ChatsScreenProps): JSX.Element => (
  <FlatList
    data={chats}
    style={{flex: 1}}
    keyExtractor={item => item.id}
    renderItem={({item}) => <ChatListItem chat={item} />}
  />
);

export default ChatsScreen;
