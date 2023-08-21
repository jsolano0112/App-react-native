import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, Button } from 'react-native'
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomInputHour = ({ title, name, control }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fTime = ' Hours ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fTime)

        control?.field?.onChange(name, currentDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.container}>
            <View style={{ margin: 10, width: '50%' }}>
                <Button title={title} onPress={() => showMode('time')} />
            </View>
            <Text style={{ fontSize: 15 }}>{text}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is12Hour={true}
                    display="default"
                    onChange={onChange}
                />)}
        </View>
    )
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
        backgroundColor: "#e8e8e8",
        width: '100%',
        borderRadius: 5,
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        fontWeight: 'bold',
    }

});

export default CustomInputHour