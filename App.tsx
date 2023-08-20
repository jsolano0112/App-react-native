
import React from 'react';
import type {PropsWithChildren} from 'react';
import SignInScreen from './src/screens/SigInScreen/SignInScreen';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
