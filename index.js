import { AppRegistry,Alert,AppState } from 'react-native';
import App from './App';
// import CodePush from 'react-native-code-push';
// import Push from 'mobile-center-push';
// Push.setEventListener({
//     pushNotificationRecieved:function({message='',title='<empty>'},{message += '\nCustom properties:\n'})
// })
//AppRegistry.registerComponent('demo', () => App);
demo = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);