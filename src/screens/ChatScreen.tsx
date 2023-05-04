import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {FlatList, ImageBackground} from 'react-native';
import Message from 'components/Message';
import messages from '@assets/data/messages.json';
import InputBox from 'components/InputBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView';
const bgImage = require('@assets/images/BG.png');
type ChatScreenProps = PropsWithChildren<{}>;

const ChatScreen = (_: ChatScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={styles.bg} edges={['bottom']}>
      <KeyboardAvoidingView>
        <ImageBackground style={styles.bg} source={bgImage}>
          <FlatList
            style={styles.listContainer}
            data={messages}
            renderItem={({item}) => <Message message={item} />}
            keyExtractor={item => item.id}
            inverted
          />
          <InputBox />
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  bg: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: '10@s',
  },
});

export default ChatScreen;
