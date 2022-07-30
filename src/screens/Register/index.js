import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { TextInputPasswordAndConfirm, TextInputField, TextInputFieldNumeric } from '../../components/TextInput'
import { Logo } from '../../components/Logo'
import { CustomButton, RegisterNavigationButton } from '../../components/Buttons'


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingVertical: 30,
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
    const [fullname, setFullName] = useState('bilal ghouri')
    const [phone, setPhone] = useState("03453523521")
    const [company, setCompany] = useState('dev bilal')
    const [password, serPassword] = useState('smafbua*123')
    const [confirmPassword, serConfirmPassword] = useState()
    const validateHandler = () => {
        if (phone.length >= 11) return true
        if (fullname.length >= 5) return true
        if (company.length >= 5) return true
        console.warn('phone number length issues...')
        return false
    }

    const submitHandler = async () => {
        if (!validateHandler()) return;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            fullname,
            phone,
            company,
            password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        let result = await (await fetch("https://pricelistappbackend.herokuapp.com/api/v1/auth/signup", requestOptions)).json()
        console.log(result.error);
        if (result.error) {
            console.warn(result.error)
            return
        }
        navigation.navigate('login')
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         let token = await AsyncStorage.getItem('@Token')
    //         console.log('token from AsyncStorage.....', token);
    //     }
    //     fetchData()
    // }, [])
    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <Logo />
            <TextInputField
                setHandler={setFullName}
                value={fullname}
                placeHolderText="fullname..."
            />
            <TextInputFieldNumeric
                setHandler={setPhone}
                value={phone}
                placeHolderText="phone..."
            />
            <TextInputField
                setHandler={setCompany}
                value={company}
                placeHolderText="Company..."
            />
            <TextInputPasswordAndConfirm
                password={password}
                setPassword={serPassword}
                confirmPassword={confirmPassword}
                serConfirmPassword={serConfirmPassword}
            />
            <CustomButton
                CustomeText="Register"
                onClick={submitHandler}
            />
            <RegisterNavigationButton
                FirstText={'Forgot password'}
                FirstNavigation={'forgotpassword'}
                SecondText={'Have you an Account?'}
                SecondNavigation={'login'}
            />
        </ScrollView>
    )
}
