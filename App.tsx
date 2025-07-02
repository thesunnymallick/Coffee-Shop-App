import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import History from './src/screen/history/History';
import BottomTab from './src/navigations/BottomTab';
const App = () => {
  const Stack=createNativeStackNavigator();


  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="Tab" component={BottomTab}/>
     <Stack.Screen name="history" component={History}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App