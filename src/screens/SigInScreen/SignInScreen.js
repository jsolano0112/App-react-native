import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn("Sign in")
    }
    const onSignUpPress = () => {
        console.warn("Sign Up")
    }

    return (
        <View style={styles.root}>
            <Image source={Logo}
                style={[styles.logo,
                { height: height * 0.3 }]}
                resizeMode="contain" />

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername} />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true} />
            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress}/>
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