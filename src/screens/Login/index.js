import React, { useState } from 'react'
import axios from 'axios'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputPassword, TextInputFieldNumeric } from '../../components/TextInput'
import { Logo } from '../../components/Logo'
import { CustomButton, RegisterNavigationButton } from '../../components/Buttons'
import { useSelector, useDispatch, } from 'react-redux'
import { LOGIN } from '../../redux/types';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    loginNavigationContainer: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 400,
        width: '75%',
        justifyContent: 'space-evenly'
    },
    loginNavigationText: {
        fontSize: 15,
        textDecorationLine: 'underline',

    }
})
export default function Index({ navigation }) {

    const reduxState = useSelector(state => state)
    const dispatch = useDispatch()
    console.log("redux state.........", reduxState);
    const [phone, setPhone] = useState("03452352832")
    const [password, serPassword] = useState("smafbu&123")
    const submitHandler = async () => {
        var data = JSON.stringify({
            phone,
            password
        });
        var config = {
            method: 'post',
            url: 'https://pricelistappbackend.herokuapp.com/api/v1/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        let result = (await axios(config)).data
        console.log("token get.......", result?.data?.token);
        if (result?.error) {
            console.warn(result?.error)
            return
        }
        try {
            AsyncStorage.setItem('@Token', JSON.stringify(result.data.token))
            dispatch({type: LOGIN})
        } catch (error) {
            console.log('login async storage error.............', error);
        }
        return
    }

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <Logo />
            <TextInputFieldNumeric
                setHandler={setPhone}
                value={phone}
                placeHolderText="phone..."
            />
            <TextInputPassword
                password={password}
                setPassword={serPassword}
            />
            <CustomButton
                CustomeText="Login"
                onClick={submitHandler}
            />
            <RegisterNavigationButton
                FirstText={'Forgot password'}
                FirstNavigation={'forgotpassword'}

                SecondText={'Register'}
                SecondNavigation={'register'}
            />
        </ScrollView>
    )
}
