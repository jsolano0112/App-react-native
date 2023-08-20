import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';

const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{8,}$/;

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { control,
         handleSubmit,
        formState: {errors},
     } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        //validate user
        navigation.navigate('Home');
    }
    const onSignUpPress = () => {
        console.warn("Sign Up")

        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.root}>
            <Image source={Logo}
                style={[styles.logo,
                { height: height * 0.3 }]}
                resizeMode="contain" />

            <CustomInput
                name="username"
                placeholder="Username"
                control={control} 
                rules = {{required:'Username is required'}}
                />
            <CustomInput
                name="password"
                placeholder="Password"
                secureTextEntry
                control={control} 
                rules={{
                    pattern: {
                        value: PASSWORD_PATTERN,
                        message: 'Password is invalid'
                    }
                }}
                />

            <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
            <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
});

export default SignInScreen