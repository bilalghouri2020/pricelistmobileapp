import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 20
    },
    buttonStyle: {
        width: 150,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        alignItems: 'center',
        borderTopLeftRadius: 100,
        borderTopEndRadius: 100,
        borderBottomLeftRadius: 100
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

export const CustomButton = ({ CustomeText, onClick }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => onClick()}
            >
                <Text style={{ fontSize: 15, elevation: 2 }}>
                    {CustomeText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export const RegisterNavigationButton = ({
    FirstText,
    FirstNavigation,
    SecondText,
    SecondNavigation
}) => {
    const navigation = useNavigation(); 
    console.log(FirstNavigation);
    console.log(SecondNavigation);
    return (
        <View style={styles.loginNavigationContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(`${FirstNavigation}`)}>
                <Text style={styles.loginNavigationText}>
                    {FirstText}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(`${SecondNavigation}`)}>
                <Text style={styles.loginNavigationText}>
                    {SecondText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
