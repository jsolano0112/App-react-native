
import React from 'react';
import type {PropsWithChildren} from 'react';
import SignInScreen from './src/screens/SigInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import Navigation from './src/navigation';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
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
