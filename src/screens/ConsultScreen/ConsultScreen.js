import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomInputHour from '../../components/CustomInputHour/CustomInputHour';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConsultScreen = () => {
  const { control, handleSubmit } = useForm();
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Consult Hours</Text>
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

export default ConsultScreen;
