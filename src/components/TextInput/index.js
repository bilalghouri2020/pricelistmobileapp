import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Appearance } from 'react-native'

const styles = StyleSheet.create({
    inputTextContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    inputText: {
        width: "75%",
        backgroundColor: colorScheme === 'dark' ? 'darkgrey' : 'lightgrey',
        padding: 15,
        borderRadius: 100,
        fontSize: 15,
        borderWidth: 3,
        color: '#121212'

    },
})

const colorScheme = Appearance.getColorScheme()

export const TextInputField = ({
    setHandler,
    value,
    placeHolderText
}) => {

    
    
    return (
        <View style={styles.inputTextContainer}>
            <TextInput
                onChangeText={setHandler}
                value={value}
                style={styles.inputText}
                placeholder={placeHolderText}
                placeholderTextColor="#121212"
            />
        </View>
    )
}
export const TextInputFieldNumeric = ({
    setHandler,
    value,
    placeHolderText
}) => {
    return (
        <View style={styles.inputTextContainer}>
            <TextInput
                onChangeText={setHandler}
                keyboardType='numeric'
                value={value}
                style={styles.inputText}
                placeholder={placeHolderText}
                placeholderTextColor="#121212"
            />
        </View>
    )
}
export const TextInputPassword = ({
    password,
    setPassword,
}) => {
    
    return (
        <View style={styles.inputTextContainer}>
            <TextInput
                onChangeText={setPassword}
                value={password}
                style={styles.inputText}
                placeholder="password..."
                placeholderTextColor="#121212"
            />
        </View>
    )
}

export const TextInputPasswordAndConfirm = ({
    password,
    setPassword,
    confirmPassword,
    serConfirmPassword,
}) => {
    
    return (
        <View style={styles.inputTextContainer}>
            <TextInput
                onChangeText={setPassword}
                value={password}
                style={styles.inputText}
                placeholder="password..."
                placeholderTextColor="#121212"
            />
            <TextInput
                onChangeText={serConfirmPassword}
                value={confirmPassword}
                style={{...styles.inputText, marginVertical:20}}
                placeholder="confirm password..."
                placeholderTextColor="#121212"
            />
        </View>
    )
}

