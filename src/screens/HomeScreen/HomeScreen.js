import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomInputHour from '../../components/CustomInputHour/CustomInputHour';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [entryHour, setEntryHour] = useState();
  const [endHour, setEndHour] = useState();
  const [date, setDate] = useState();
  const [text, setText] = useState('');
  const { control, handleSubmit } = useForm();
  const [hoursWorked, setHoursWorked] = useState([]);
  const navigation = useNavigation();

  const calculateHours = () => {
    if (endHour > entryHour) {
      if (hoursWorked.length >= 10) {
        setText('Maximum limit of 10 registers.');
        return;
      }
      if (entryHour && endHour && date) {
        const entryDate = new Date(entryHour);
        const endDate = new Date(endHour);
        if (entryDate !== null && endDate !== null) {
          const newRegister = {
            entryHour: `${entryHour.getHours()}:${entryHour.getMinutes()}`,
            endHour: `${endHour.getHours()}:${endHour.getMinutes()}`,
            date: `${date.getFullYear()}-${(date.getMonth() + 1)
              .toString()
              .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`,
          };
          setHoursWorked([...hoursWorked, newRegister]);
        }
        const timeDifference = endDate - entryDate;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.round(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        );
        console.warn('Register saved.');

        setText(`Total hours worked: ${hours} hours ${minutes} minutes`);
      } else {
        setText('Please select entry hour, end hour and date.');
      }
    } else {
      setText('Please select the end hours carefully.');
    }
  };
  const consultPress = () => {
    console.warn('Consult hours');

    navigation.navigate('Consult', { hoursWorked: hoursWorked });
  };
  const newsPress = () => {
    console.warn('Register news');
    navigation.navigate('News');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hours Registration</Text>

      <CustomInputDate
        control={control}
        title="Date"
        name="date"
        value={date}
        setValue={setDate}
      />

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
      <CustomButton text="Register news" onPress={newsPress} />
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
