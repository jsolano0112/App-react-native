import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import CustomInputHour from '../../components/CustomInputHour/CustomInputHour';

const NewsScreen = () => {
  const [category, setCategory] = useState('');
  const [entryDate, setEntryDate] = useState();
  const [endDate, setEndDate] = useState();
  const [text, setText] = useState();
  const [entryHour, setEntryHour] = useState();
  const [endHour, setEndHour] = useState();
  const { control, handleSubmit } = useForm();

  const categories = [
    { key: '1', value: 'Laboral inhability' },
    { key: '2', value: 'Licenses' },
    { key: '3', value: 'Vacation' },
  ];
  const registerNews = () => {
    const entryD = new Date(entryDate);
    const endD = new Date(endDate);
    const entryH = new Date(entryHour);
    const endH = new Date(endHour);
    const timeDifference = endD - entryD;
    const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));

    if (category === 'Laboral inhability' && entryD && endD) {
      if (endD && entryD) {
        if (endD > entryD) {
          setText(`Laboral inhability - ${daysDifference} days`);
          console.warn('Register saved.');
        } else {
          setText('Please select the end hours carefully.');
        }
      } else {
        setText('Please select the end hours.');
      }
    } else if (category === 'Licenses' && endH && entryH) {
      const maxHours = 8;
      if (endH && entryH) {
        const timeDifferenceHours = endH - entryH;
        const hoursDifference = Math.round(timeDifferenceHours / (1000 * 3600));
        if (hoursDifference <= maxHours) {
          setText(`Licenses - ${hoursDifference} hours`);
          console.warn('Register saved.');
        } else {
          setText(
            `Select max ${maxHours} hours or select category 'Vacation'.`,
          );
        }
      }
    } else if (category === 'Vacation' && entryD && endD) {
      const minDays = 1;
      const maxDays = 15;
      if (endD && entryD) {
        if (endD > entryD) {
          if (daysDifference >= minDays && daysDifference <= maxDays) {
            setText(`Vacation - ${daysDifference} days`);
            console.warn('Register saved.');
          } else {
            setText(`Select between ${minDays} and ${maxDays} days.`);
          }
        } else {
          setText('Please select the end hours carefully.');
        }
      } else {
        setText('Please select the end hours.');
      }
    } else {
      setText('Select category.');
    }
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.title}>Register News</Text>
        <SelectList
          setSelected={setCategory}
          data={categories}
          save="value"
          placeholder={'Select new type'}
          defaultOption={{ key: '1', value: 'Laboral inhability' }}
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
        <CustomInputDate
          control={control}
          name="entryDate"
          title="Entry Date"
          value={entryDate}
          setValue={setEntryDate}
        />
        <CustomInputDate
          control={control}
          name="endDate"
          title="End Date"
          value={endDate}
          setValue={setEndDate}
        />

        <CustomButton text="Register" onPress={handleSubmit(registerNews)} />
        <Text style={styles.text}>{text}</Text>
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
  text: {
    color: '#F33A3A',
    padding: 10,
  },
});

export default NewsScreen;
