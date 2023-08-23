import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../context/UserContext';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_PATTERN =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{8,}$/;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');
  const { users, setUsers } = useUserContext();

  const onRegisterPressed = data => {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    setUsers([...users, newUser]);
    console.warn('User registered');
  };

  const onSignInPress = () => {
    console.warn('Register');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput
        name="username"
        control={control}
        placeholder="Username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 8,
            message: 'Password should be minimun 8 characters long',
          },
          maxLength: {
            value: 24,
            message: 'Password should be minimun 24 characters long',
          },
        }}
      />

      <CustomInput
        name="email"
        control={control}
        placeholder="Email"
        rules={{
          pattern: {
            value: EMAIL_REGEX,
            message: 'Email is invalid',
          },
        }}
      />

      <CustomInput
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry={true}
        rules={{
          pattern: {
            value: PASSWORD_PATTERN,
            message: 'Password is invalid',
          },
        }}
      />

      <CustomInput
        name="passwordRepeat"
        control={control}
        placeholder="Repeat Password"
        secureTextEntry={true}
        rules={{
          validate: value => value === pwd || 'Password do not match',
        }}
      />

      <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
      <CustomButton text="Have an account? Sign In" onPress={onSignInPress} />
    </View>
  );
};

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

export default SignUpScreen;
