import React, {useState, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {scale} from 'react-native-size-matters';
import {Colors, View, TextField, TextFieldRef} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

type InputBoxProps = PropsWithChildren<{}>;

const InputBox = (_: InputBoxProps): JSX.Element => {
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<TextFieldRef>(null);
  const send = () => {
    if (!inputRef.current?.validate()) {
      return;
    }
    console.log(`Sending message ${message}`);
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={scale(24)} color={Colors.blue40} />
      <TextField
        ref={inputRef}
        containerStyle={styles.inputContainer}
        style={styles.input}
        multiline
        validate="required"
        value={message}
        onChangeText={setMessage}
      />
      <MaterialIcons
        name="send"
        size={scale(24)}
        color={Colors.white}
        style={styles.send}
        onPress={send}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: '5@s',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginHorizontal: '10@s',
    paddingHorizontal: '10@s',
    paddingVertical: '5@s',
    borderRadius: '50@s',
    borderColor: Colors.grey50,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  input: {
    fontSize: '18@s',
  },
  send: {
    backgroundColor: Colors.blue40,
    borderRadius: '20@s',
    padding: '7@s',
    overflow: 'hidden',
  },
});

export default InputBox;
