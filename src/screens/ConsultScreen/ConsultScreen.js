import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
const ConsultScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const route = useRoute();
  const { hoursWorked } = route.params;
  const homePress = () => {
    navigation.navigate('Home');
  };
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
        <CustomButton
          backgroundColor="#272829"
          text="Go back"
          onPress={handleSubmit(homePress)}
        />
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
    color: '#272829',
    margin: 30,
  },
});

export default ConsultScreen;
