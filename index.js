import 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {name as appName} from './app.json';
import App from './App';

Navigation.registerComponent('WhatsUpFriendsApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'WhatsUpFriendsApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
