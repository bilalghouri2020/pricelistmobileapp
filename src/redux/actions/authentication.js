import * as t from '../types'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginHandler = () => dispatch => {
    dispatch({
        type: t.LOGIN
    })
}
export const LogoutHandler = () => async dispatch => {
    await AsyncStorage.removeItem('@Token')
    console.log('asyncStorage removed....');
    dispatch({
        type: t.LOGOUT
    })
}
export const LoadingHandler = () => dispatch => {
    dispatch({
        type: t.LOADING
    })
}
