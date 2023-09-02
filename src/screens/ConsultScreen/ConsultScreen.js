import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ConsultScreen = () => {
  const route = useRoute();
  const { hoursWorked } = route.params;

  return (
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.title}>Consult Hours</Text>
        {hoursWorked.map((register, index) => (
          <View key={index}>
            <Text>{`Date: ${register.date}`}</Text>
            <Text>{`Entry hour: ${register.entryHour}`}</Text>
            <Text>{`End hour: ${register.endHour}`}</Text>
            <Text>--------------------------------</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
});

export default ConsultScreen;
