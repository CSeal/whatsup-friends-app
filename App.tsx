/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';

import {View, TextField, Text, Button} from 'react-native-ui-lib';

/*
import type {PropsWithChildren} from 'react';
type SectionProps = PropsWithChildren<{
  title: string;
}>; */

function App(): JSX.Element {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>
        Welcome
      </Text>
      <TextField text50 placeholder="username" grey10 />
      <TextField text50 placeholder="password" secureTextEntry grey10 />
      <View marginT-100 center>
        <Button text70 white background-orange30 label="Login" />
        <Button link text70 orange30 label="Sign Up" marginT-20 />
      </View>
    </View>
  );
}
const style = ScaledSheet.create({
  rootTest: {
    width: '100@ms',
  },
});
export default App;
