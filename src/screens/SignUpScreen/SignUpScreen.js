import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = () => {
        console.warn("Register")
    }

    const onSignInPress = () => {
        console.warn("Register")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername} />

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail} />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true} />

            <CustomInput
                placeholder="Password"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true} />

            <CustomButton text="Register" onPress={onRegisterPressed} />
            <CustomButton text="Have an account? Sign In" onPress={onSignInPress}/>
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
});

export default SignUpScreen