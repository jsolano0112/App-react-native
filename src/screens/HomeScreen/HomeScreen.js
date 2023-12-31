import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomInputHour from '../../components/CustomInputHour/CustomInputHour';
import CustomInputCurrentHour from '../../components/CustomInputCurrentHour/CustomInputCurrentHour';
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
    const entryDate = new Date(date);
    entryDate.setHours(entryHour.getHours());
    entryDate.setMinutes(entryHour.getMinutes());

    const endDate = new Date(date);
    endDate.setHours(endHour.getHours());
    endDate.setMinutes(endHour.getMinutes());

    if (endDate > entryDate) {
      if (hoursWorked.length >= 10) {
        setText('Maximum limit of 10 registers.');
        return;
      }
      if (entryHour && endHour && date) {
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
        const timeDifference = endDate.getTime() - entryDate.getTime();
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
    navigation.navigate('Consult', { hoursWorked: hoursWorked });
  };
  const newsPress = () => {
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

      <CustomInputCurrentHour
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
      <CustomButton
        backgroundColor="#7EAA92"
        text="Register hours"
        onPress={handleSubmit(calculateHours)}
      />
      <CustomButton
        backgroundColor="#7EAA92"
        text="Consult hours"
        onPress={consultPress}
      />
      <CustomButton
        backgroundColor="#7EAA92"
        text="Register news"
        onPress={newsPress}
      />
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
  calcText: {
    color: '#F33A3A',
    padding: 10,
  },
});

export default HomeScreen;
