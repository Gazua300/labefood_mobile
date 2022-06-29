import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar, Image, View, TouchableOpacity } from 'react-native'
import AuthProvider from './src/global/Context'
import Icon from "react-native-vector-icons/AntDesign"
import Login from './src/pages/Login/Login'
import Signup from './src/pages/Signup/Signup'
import Feed from './src/pages/feed/Feed'
import Detail from './src/pages/detail/Detail.js'
import Address from './src/pages/address/Address'
import Cart from './src/pages/cart/Cart'
import Profile from './src/pages/profile/Profile'
import UpdateProfile from './src/pages/updateProfile/UpdateProfile'




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
              headerLeft: ()=>(
                <View/>
              ),
              title: 'Lista de restaurantes'
            }}/>

          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{
              headerShown: false
            }}/>

          <Stack.Screen
            name='Endereço'
            component={Address}/>

          <Stack.Screen
            name='Carrinho'
            component={Cart}
            options={{
              headerLeft: ()=>(
                <View/>
              )
            }}/>
          
          <Stack.Screen
            name='Perfil'
            component={Profile}
            options={({navigation})=>({
              headerLeft: ()=>(
                <View/>
              ),
              headerRight: ()=>(
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                  <Icon name='logout' size={25}/>
                </TouchableOpacity>
              )
            })}
            />

            <Stack.Screen
              name='Atualizar'
              component={UpdateProfile}
              options={{
                title: 'Atualizar perfil'
              }}/>

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  ) 
}


const screenOptions = {
  
  headerTitleAlign: 'center'
}


