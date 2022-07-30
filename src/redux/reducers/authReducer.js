import * as t from '../types'

const Authentication = (
    state = {
        isSignedIn: true,
    },
    action
) => {
    switch (action.type) {
        case t.LOGIN:
            console.log('login action dispatch');
            return {
                ...state,
                isSignedIn: true
            }

        case t.LOGOUT:
            console.log('logout action dispatch');
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return { ...state }
    }
}

export default Authentication
