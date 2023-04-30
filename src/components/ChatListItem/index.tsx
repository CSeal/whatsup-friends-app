import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import type {PropsWithChildren} from 'react';

type ChatListItemProps = PropsWithChildren<{}>;

const ChatListItem = (_: ChatListItemProps): JSX.Element => {
  return (
    <View style={styles.root}>
      <Text>ChatListItem</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  root: {
    backgroundColor: 'yellow',
  },
});
export default ChatListItem;
