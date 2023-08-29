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
  const { control, handleSubmit } = useForm();
  const [entryHour, setEntryHour] = useState(null);
  const [endHour, setEndHour] = useState(null);

  const consultPress = () => {
    console.warn('Consult hours');

    navigation.navigate('Consult');
  };
  const calculateHours = () => {
    if (entryHour && endHour) {
      const entryDate = new Date(entryHour);
      const endDate = new Date(endHour);

      const timeDifference = endDate - entryDate;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.round(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      );

      setText(`Total hours worked: ${hours} hours ${minutes} minutes`);
    } else {
      setText('Please select both entry and end hours.');
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hours Registration</Text>

      <CustomInputDate />

      <CustomInputHour
        control={control}
        title="Entry hour"
        name="entryHour"
        value={entryHour}
        setValue={setEntryHour}
      />
      <CustomInputHour
        control={control}
        title="End hour"
        name="endHour"
        value={endHour}
        setValue={setEndHour}
      />
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  calcText: {
    color: '#F33A3A',
    padding: 10,
  },
});

export default HomeScreen;
