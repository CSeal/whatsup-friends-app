import {Navigation} from 'react-native-navigation';
import {name as appName} from './app.json';
import App from './App';

Navigation.registerComponent('AwesomeProject.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'AwesomeProject.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
