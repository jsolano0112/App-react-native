import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
const NewsScreen = () => {
  return (
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.title}>Register News</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
});

export default NewsScreen;
