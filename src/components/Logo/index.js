import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    mainLogoContainer: {
        width: '100%',
        marginTop: "10%",
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',

        borderRadius: 20
    },
    mainLogoStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
})

export const Logo = () => {
    return (
        <View style={styles.mainLogoContainer}>
            <Image
                style={styles.mainLogoStyle}
                source={require('../../assets/images/MainLogo.jpg')}
            />
        </View>
    )
}
