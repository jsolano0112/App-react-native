import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomInputHour from '../../components/CustomInputHour/CustomInputHour';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const { control, handleSubmit, getValues } = useForm();

  const consultPress = () => {
    console.warn('Consult hours');

    navigation.navigate('Consult');
  };
  const calculateHours = data => {
    const entryTime = getValues('entryHour');
    const endTime = getValues('endHour');

    const entryDate = new Date(entryTime);
    const endDate = new Date(endTime);

    // Calculate the difference in hours and minutes
    const timeDifference = (endDate - entryDate) / (1000 * 60);
    const hours = Math.floor(timeDifference / 60);
    const minutes = Math.round(timeDifference % 60);

    setText(`Total hours worked: ${hours} hours ${minutes} minutes`);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hours Registration</Text>

      <CustomInputDate />

      <CustomInputHour control={control} title="Entry hour" name="entryHour" />
      <CustomInputHour control={control} title="End hour" name="endHour" />
      <Text style={styles.calcText}>{text}</Text>
      <CustomButton text="Register" onPress={handleSubmit(calculateHours)} />
      <CustomButton text="Consult hours" onPress={consultPress} />
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
    fontFamily: 'Metric-Regular',
    fontSize: 30,
    lineHeight: 50,
    paddingTop: 10,
    marginTop: 35,
    color: '#DE7474',
  },
  calcText: {
    color: '#F33A3A',
    padding: 10,
  },
});

export default HomeScreen;
