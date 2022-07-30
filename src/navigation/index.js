import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, useColorScheme, View } from 'react-native'

import Screens from '../screens'
import { useDispatch } from 'react-redux'
import { LOGIN, LOGOUT } from '../redux/types'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
import axios from 'axios'
import { LogoutHandler } from '../redux/actions/authentication';
export default function Index() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const scheme = useColorScheme();
    const { isSignedIn } = useSelector(state => state).authentication

    const checkTokenRequest = async (token) => {
        // console.log("token ........from checkTokenRequestHandler...", JSON.parse(token));
        var config = {
            method: 'post',
            url: 'https://pricelistappbackend.herokuapp.com/api/v1/users/checktoken',
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`
            }
        };
        let IsAuthenticate = await axios(config)
        console.log("token authentication response............", IsAuthenticate?.data);
        if (IsAuthenticate?.data?.error) {
            dispatch(LogoutHandler())
            return
        }
        if (IsAuthenticate?.data?.loginState) {
            dispatch({ type: LOGIN })
            return
        }
    }
    useEffect(() => {
        const checkToken = async () => {
            let token = await AsyncStorage.getItem('@Token')
            if (token === null) {
                dispatch(LogoutHandler())
                setLoading(false)
                return
            }
            await checkTokenRequest(token)
            setLoading(false)
        }
        checkToken()
    }, [])

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator screenOptions={{
                // headerShown: loading === false && isSignedIn ? true : false,
                headerShown: false
            }}>
                {
                    loading ? (
                        <Stack.Screen name="splashscreen" component={Screens.SplashScreen} />
                    ) : isSignedIn ? <>
                        <Stack.Screen
                            name="homepage"
                            component={Screens.HomeScreen}
                            options={{
                                title: 'Home'
                            }}
                        />
                    </> : (
                        <>
                            <Stack.Screen name="login" component={Screens.LoginScreen} />
                            <Stack.Screen name="register" component={Screens.Register} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >


    )
}
