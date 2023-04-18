import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {View} from 'react-native';
import AppCP from 'components/AppCP';

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <AppCP title="Welcome Anton" />
      <View style={styles.test} />
    </View>
  );
}
const styles = ScaledSheet.create({
  root: {
    flex: 1,
  },
  test: {
    width: '100@ms',
    height: '30@ms',
    backgroundColor: 'green',
  },
});
export default App;
