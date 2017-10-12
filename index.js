import { AppRegistry,Alert,AppState } from 'react-native';
import App from './App';
 import CodePush from 'react-native-code-push';
 import Push from 'mobile-center-push';
 Push.setEventListener({
    pushNotificationReceived: function (pushNotification) {
      let message = pushNotification.message;
      let title = pushNotification.title;
  
      if (message === null || message === undefined) {
        // Android messages received in the background don't include a message. On Android, that fact can be used to
        // check if the message was received in the background or foreground. For iOS the message is always present.
        title = "Android background";
        message = "<empty>";
      }
  
      // Custom name/value pairs set in the Mobile Center web portal are in customProperties
      if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
        message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
      }
  
      if (AppState.currentState === 'active') {
        Alert.alert(title, message);
      }
      else {
        // Sometimes the push callback is received shortly before the app is fully active in the foreground.
        // In this case you'll want to save off the notification info and wait until the app is fully shown
        // in the foreground before displaying any UI. You could use AppState.addEventListener to be notified
        // when the app is fully in the foreground.
      }
    }
  });
const demo = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);
AppRegistry.registerComponent('demo', () => demo);
