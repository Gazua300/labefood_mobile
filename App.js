import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthProvider from './src/global/Context'
import Icon from 'react-native-vector-icons/FontAwesome'
import Person from 'react-native-vector-icons/Ionicons'
import Login from './src/pages/Login/Login'
import Signup from './src/pages/Signup/Signup'
import Feed from './src/pages/feed/Feed'
import Detail from './src/pages/detail/Detail.js'
import Address from './src/pages/address/Address'
import Cart from './src/pages/cart/Cart'
import Profile from './src/pages/profile/Profile'
import UpdateProfile from './src/pages/updateProfile/UpdateProfile'
import { StatusBar, View, TouchableOpacity } from 'react-native'



const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        headerTitleAlign: 'center'
      }}>

      <Tab.Screen 
        name='Feed'
        component={Feed}
        options={{
          tabBarIcon: ()=>(
            <Icon name='home' size={30}/>
          )
        }}/>

      <Tab.Screen 
        name='Carrinho'
        component={Cart}
        options={{
          tabBarIcon: ()=>(
            <Icon name='shopping-cart' size={30}/>
          )
        }}
        />
      
      <Tab.Screen
        name='Perfil'
        component={Profile}
        options={{
          tabBarIcon: ()=>(
            <Person name='person' size={30}/>
          )
        }}
        />
      
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='red'/>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerTitleAlign: 'center'
          }}>

          <Stack.Screen 
            name='MyTabs'
            component={MyTabs}
            options={{ headerShown: false }}/>
          
          <Stack.Screen
            name='Login'
            component={Login}/>

          <Stack.Screen
            name='Signup'
            component={Signup}/>
          
          {/* <Stack.Screen
            name='Feed'
            component={Feed}
            options={{
              headerLeft: ()=>(
                <View/>
              ),
              title: 'Lista de restaurantes'
            }}/> */}

          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{
              headerShown: false
            }}/>

          <Stack.Screen
            name='Endereço'
            component={Address}/>

           {/* <Stack.Screen
            name='Carrinho'
            component={Cart}/> */}
          
          {/* <Stack.Screen
            name='Perfil'
            component={Profile}
            options={({navigation})=>({
              headerLeft: ()=>(
                <View/>
              ),
              headerRight: ()=>(
                <TouchableOpacity onPress={async()=>{
                  await AsyncStorage.clear()
                  navigation.navigate('Login')
                }}>
                  <Icon name='logout' size={25}/>
                </TouchableOpacity>
              )
            })}/> */}

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



