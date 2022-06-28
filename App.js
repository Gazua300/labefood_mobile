import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar, Image } from 'react-native'
import AuthProvider from './src/global/Context'
import Login from './src/pages/Login/Login'
import Signup from './src/pages/Signup/Signup'
import Feed from './src/pages/feed/Feed'
import Detail from './src/pages/detail/Detail.js'
import Address from './src/pages/address/Address'
import Cart from './src/pages/cart/Cart'
import Profile from './src/pages/profile/Profile'




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
            component={Feed}
            options={{
              headerTitle: ()=>(
                <Image
                  source={require('./assets/logo-future-eats-invert.png')}/>
              )
            }}/>

          <Stack.Screen
            name='Detail'
            component={Detail}/>

          <Stack.Screen
            name='Endereço'
            component={Address}/>

          <Stack.Screen
            name='Carrinho'
            component={Cart}/>
          
          <Stack.Screen
            name='Perfil'
            component={Profile}/>

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  ) 
}


const screenOptions = {
  
  headerTitleAlign: 'center'
}


