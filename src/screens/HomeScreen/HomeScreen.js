import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInputDate from '../../components/CustomInputDate/CustomInputDate';
import CustomInputHour from '../../components/CustomInputHour/CustomInputHour';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton';

const HomeScreen = () => {
    const { control,
        handleSubmit,
    } = useForm();
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Hours Registration</Text>

            <CustomInputDate
                control={control}
            />
            <CustomInputHour
                control={control}
            />

            <CustomButton
            text="Register" 
            // onPress={} 
            />

        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontFamily: 'Metric-Regular',
        fontSize: 30,
        lineHeight: 50,
        paddingTop: 10,
        marginTop: 35,
        color: '#DE7474'
    }
});

export default HomeScreen