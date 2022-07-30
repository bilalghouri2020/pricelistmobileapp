import React from 'react'
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Layout from '../../components/Layout' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Page1'
const Stack = createNativeStackNavigator();
const Index = () => {
  
  console.log('homescreen..........');
  const playgroundNavigate = () => {
    Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
  };
  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };
  

  return (
    <Layout>
      <Stack.Navigator>
        <Stack.Screen name='page1' component={Page1} />
      </Stack.Navigator>
    </Layout>
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
