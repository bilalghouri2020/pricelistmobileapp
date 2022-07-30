import React from 'react'




import { Provider } from 'react-redux';
// import {Auth} from './src/redux/store'
import store1 from './src/redux/store'
import NavigationComponent from './src/navigation'
import { Text, View } from 'react-native';



export default function App() {
  
  // const store = new Auth()
  // console.log("store.......", store);
  // const dispatch = useDispatch()
  
  
  return (
    <Provider store={store1.store}>
      <NavigationComponent/>
    </Provider>
  )
}


