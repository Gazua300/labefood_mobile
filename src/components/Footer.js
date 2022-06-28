import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Person from 'react-native-vector-icons/Ionicons'



const Footer = ()=>{
    const navigation = useNavigation()


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Feed')}>
                <Icon name='home' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Carrinho')}>
                <Icon name='shopping-cart' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Perfil')}>
                <Person name='person' size={30}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
})


export default Footer