import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomInputCurrentHour = ({ title, name, control, setValue }) => {
  const initialDate = new Date();
  initialDate.setHours(initialDate.getHours() - 5);

  const [date, setDate] = useState(initialDate);
  const [defaultDate] = useState(initialDate);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    if (currentDate.getTime() !== defaultDate.getTime()) {
      setDate(defaultDate);
      setMessage('Let current hour.');
    } else {
      setDate(currentDate);
      setValue(currentDate);

      let tempDate = new Date(currentDate);
      let fTime = tempDate.getHours() + ' : ' + tempDate.getMinutes();
      setText(fTime);
      setMessage('');

      control?.field?.onChange(name, currentDate);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 10, width: '50%' }}>
        <Button title={title} onPress={() => showMode('time')} />
      </View>
      {message ? (
        <Text style={{ color: 'red', fontSize: 15 }}>{message}</Text>
      ) : (
        <Text style={{ fontSize: 15 }} editable={false}>
          {text}
        </Text>
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is12Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#FFFFFF',
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    width: '100%',
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    fontWeight: 'bold',
  },
});

export default CustomInputCurrentHour;
