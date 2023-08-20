
import React from 'react';
import type {PropsWithChildren} from 'react';
import SignInScreen from './src/screens/SigInScreen/SignInScreen';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignUpScreen/>
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
