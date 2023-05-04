import React from 'react';
import {FlatList} from 'react-native';
import ChatListItem from 'components/ChatListItem';
import chats from '@assets/data/chats.json';
import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet} from 'react-native-size-matters/extend';

type ChatsScreenProps = PropsWithChildren<{}>;

const ChatsScreen = (_: ChatsScreenProps): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={chats}
      style={styles.chatList}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ChatListItem chat={item} />}
    />
  </SafeAreaView>
);

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  chatList: {
    flex: 1,
  },
});

export default ChatsScreen;
