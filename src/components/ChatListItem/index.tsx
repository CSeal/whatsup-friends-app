import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {scale} from 'react-native-size-matters';
import {Card, Avatar, View, Text, Colors} from 'react-native-ui-lib';
import type {TChat} from 'services/types/chat';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const noAvatarImg = require('@assets/images/noAvatarImg.png');

type ChatListItemProps = PropsWithChildren<{chat: TChat}>;

const ChatListItem = ({chat}: ChatListItemProps): JSX.Element => {
  const {id, user, lastMessage} = chat;
  return (
    <Card
      elevation={1}
      enableShadow
      height={scale(70)}
      style={styles.root}
      row
      onPress={() => {
        console.log('pressed ' + id);
      }}>
      <Avatar
        size={scale(60)}
        containerStyle={styles.avatar}
        source={user.avatarImage ? {uri: user.avatarImage} : noAvatarImg}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.userName} numberOfLines={1}>
            {user.name}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          {lastMessage.text}
        </Text>
      </View>
    </Card>
  );
};

const styles = ScaledSheet.create({
  root: {
    paddingHorizontal: '10@s',
    marginVertical: '5@s',
  },
  avatar: {
    marginRight: '10@s',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    marginBottom: '5@s',
  },
  userName: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.grey30,
  },
});
export default ChatListItem;
