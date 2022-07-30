import React from 'react'
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Index = () => {
    console.log('homescreen..........');
    const playgroundNavigate = () => {
        Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
    };
    const docsNavigate = () => {
        Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
    };
    return (
        <>
            <HeaderRNE
                leftComponent={
                    <View>
                        <EntypoIcon name="menu" color="white" size={30} />
                    </View>
                }
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={docsNavigate}>
                            <MaterialIcons name="description" color="white" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={playgroundNavigate}
                        >
                            <AntDesign name="rocket1" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{ text: 'Header', style: styles.heading }}
            />
            <Text>Another screen</Text>
        </>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default Index
