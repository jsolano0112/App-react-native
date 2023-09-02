import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';

const NewsScreen = () => {
  const [category, setCategory] = useState('');
  const [entryDate, setEntryDate] = useState();
  const [endDate, setEndDate] = useState();
  const { control, handleSubmit } = useForm();

  const categories = [
    { key: '1', value: 'Laboral inhability' },
    { key: '2', value: 'Licenses' },
    { key: '3', value: 'Vacation' },
  ];
  const registerNews = () => {
    console.warn('Register saved.');
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.title}>Register News</Text>
        <SelectList
          setSelected={setCategory}
          data={categories}
          placeholder={'Select new type'}
          defaultOption={{ key: '1', value: 'Laboral inhability' }}
        />
        <CustomInputDate
          control={control}
          name="date"
          title="Entry Date"
          value={entryDate}
          setValue={setEntryDate}
        />
        <CustomInputDate
          control={control}
          name="date"
          title="End Date"
          value={endDate}
          setValue={setEndDate}
        />

        <CustomButton text="Register" onPress={handleSubmit(registerNews)} />
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

export default NewsScreen;
