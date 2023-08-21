import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SigInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ConsultScreen from '../screens/ConsultScreen/ConsultScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}> 
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Consult" component={ConsultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation