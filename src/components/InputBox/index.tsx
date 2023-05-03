import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {scale} from 'react-native-size-matters';
import {Colors, View, TextField} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type InputBoxProps = PropsWithChildren<{}>;

const InputBox = (_: InputBoxProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={scale(24)} color={Colors.blue40} />
      <TextField style={styles.input} placeholder="TextInput" />
      <MaterialIcons
        name="send"
        size={scale(24)}
        color={Colors.black}
        style={styles.send}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {},
  input: {},
  send: {
    alignSelf: 'flex-end',
    marginRight: '45@s',
  },
});

export default InputBox;
