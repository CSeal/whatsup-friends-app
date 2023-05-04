import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//import ChatsScreen from 'screens/ChatsScreen';
import ChatScreen from 'screens/ChatScreen';
function App(): JSX.Element {
  return (
    <SafeAreaProvider style={styles.root}>
      <ChatScreen />
    </SafeAreaProvider>
  );
}
const styles = ScaledSheet.create({
  root: {
    backgroundColor: 'whitesmoke',
    //flex: 1,
    //justifyContent: 'center',
  },
});
export default App;
