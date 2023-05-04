import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type {PropsWithChildren} from 'react';
import type {TMessage} from 'services/types/chat';
import {Colors} from 'react-native-ui-lib';
import myPrifile from '@assets/data/myUser.json';
dayjs.extend(relativeTime);
type MessageProps = PropsWithChildren<{message: TMessage}>;

const Message = ({message}: MessageProps): JSX.Element => {
  const {text, createdAt, user} = message;
  const isMyMessage = () => user.id === myPrifile.id;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? Colors.blue70 : Colors.white,
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text>{text}</Text>
      <Text style={styles.time}>{dayjs(createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    maxWidth: '80%',
    margin: '5@s',
    padding: '10@s',
    borderRadius: '10@s',
    //shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    alignSelf: 'flex-end',
    color: Colors.grey30,
  },
});

export default memo(Message);
