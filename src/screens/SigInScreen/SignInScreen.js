import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../context/UserContext';

const PASSWORD_PATTERN =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{8,}$/;

const SignInScreen = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { users } = useUserContext();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSignInPressed = data => {
    const user = users.find(user => user.username === data.username);

    if (user && user.password === data.password) {
      navigation.navigate('Home');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };
  const onSignUpPress = () => {
    console.warn('Sign Up');

    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}>Sign In</Text>
      <CustomInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{ required: 'Username is required' }}
      />
      <CustomInput
        name="password"
        placeholder="Password"
        secureTextEntry
        control={control}
        rules={{
          pattern: {
            value: PASSWORD_PATTERN,
            message: 'Password is invalid',
          },
        }}
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      <CustomButton
        backgroundColor="#7EAA92"
        text="Sign In"
        onPress={handleSubmit(onSignInPressed)}
      />
      <CustomButton
        backgroundColor="#9ED2BE"
        text="Don't have an account? Create one"
        onPress={onSignUpPress}
      />
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
    color: '#272829',
    margin: 30,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignInScreen;
