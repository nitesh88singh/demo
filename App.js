/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import codePush from "react-native-code-push";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    codePush.sync({ updateDialog: true },
      (status) => {
          switch (status) {
              case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                  // Show "downloading" modal
                  break;
              case codePush.SyncStatus.INSTALLING_UPDATE:
                  // Hide "downloading" modal
                  break;
          }
      },
      ({ receivedBytes, totalBytes, }) => {
        /* Update download modal progress */
      }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome here use
        </Text>
        <Text style={styles.instructions}>
          heloo 
        </Text>
        <Text style={styles.instructions}>
         ok
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
