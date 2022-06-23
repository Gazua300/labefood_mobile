import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login'
import Signup from './src/pages/Signup/Signup';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name='Login'
          component={Login}/>

        <Stack.Screen
          name='Signup'
          component={Signup}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}


