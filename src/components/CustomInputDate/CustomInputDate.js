import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Button } from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomInputDate = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      'Date: ' +
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);

    console.log(fDate + ' (' + fTime + ')');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 10, width: '50%' }}>
        <Button title="Date" onPress={() => showMode('date')} />
      </View>
      <Text style={{ fontSize: 15 }}>{text}</Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFCFC',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    fontWeight: 'bold',
  },
});

export default CustomInputDate;
