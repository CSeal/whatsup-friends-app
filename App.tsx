import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {View} from 'react-native';
//import ChatsScreen from 'screens/ChatsScreen';
import ChatScreen from 'screens/ChatScreen';
function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <ChatScreen />
    </View>
  );
}
const styles = ScaledSheet.create({
  root: {
    flex: 1,
    //justifyContent: 'center',
  },
});
export default App;
