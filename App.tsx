import React from 'react';
import type { PropsWithChildren } from 'react';
import SignInScreen from './src/screens/SigInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import Navigation from './src/navigation';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './src/context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FDFCFC',
  },
});

export default App;
