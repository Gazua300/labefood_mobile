import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import AuthProvider from './src/global/Context'
import Login from './src/pages/Login/Login'
import Signup from './src/pages/Signup/Signup'
import Feed from './src/pages/feed/Feed'
import Detail from './src/pages/detail/Detail.js'
import Address from './src/pages/address/Address'




const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='red'/>
      <AuthProvider>
        <Stack.Navigator
          screenOptions={screenOptions}>
          
          <Stack.Screen
            name='Login'
            component={Login}/>

          <Stack.Screen
            name='Signup'
            component={Signup}/>
          
          <Stack.Screen
            name='Feed'
            component={Feed}/>

          <Stack.Screen
            name='Detail'
            component={Detail}/>

          <Stack.Screen
            name='Endereço'
            component={Address}/>

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  ) 
}


const screenOptions = {
  
  headerTitleAlign: 'center'
}


