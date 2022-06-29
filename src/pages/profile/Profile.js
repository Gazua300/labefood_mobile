import { useContext, useEffect } from 'react'
import { AuthContext } from '../../global/Context'
import Edit from 'react-native-vector-icons/Entypo'
import Footer from "../../components/Footer"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"



const Profile = (props)=>{
    const { states, requests } = useContext(AuthContext)
    const profile = states.profile
    const demands = states.demands




    useEffect(()=>{
        requests.historicRequests()
        requests.getProfile()
    }, [])




    return(
        <ScrollView>
            <View style={styles.sectionOne}>
                <Text style={styles.txtContainer}>
                    {profile.name}{'\n\n'}
                    {profile.email}{'\n\n'}
                    {profile.cpf}
                </Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Atualizar')}>
                    <Edit name='edit' size={18}/>
                </TouchableOpacity>
            </View>
            <View style={{borderWidth:0.5, margin:5}}/>
            <View style={styles.sectionOne}>
                <Text style={styles.txtContainer}>
                    Enderço cadastrado{'\n\n'}
                    {profile.address}
                </Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Endereço')}>
                    <Edit name='edit' size={18}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.historicTitle}>Historico de pedidos</Text>
            <View style={{borderWidth:0.5, margin:5}}/>
            {demands.length > 0 ? demands.map(demand=>{
                return(
                    <View key={demand.createdAt}
                        style={styles.card}>
                        <Text style={styles.cardTitle}>
                            {demand.restaurantName}
                        </Text>
                        <Text>
                            Pedido feito em: {new Date(demand.createdAt).toLocaleDateString()} as {new Date(demand.createdAt).toLocaleTimeString()}{'\n'}
                            Expira em: {new Date(demand.expiresAt).toLocaleDateString()} as {new Date(demand.expiresAt).toLocaleTimeString()}
                        </Text>
                    </View>
                )
            }) : <Text></Text>}
            <Footer/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    sectionOne: {
        margin: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txtContainer: {
        fontSize: 17
    },
    historicTitle: {
        textAlign:'center',
        fontSize: 18,
        marginTop: 30
    },
    card: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5
    },
    cardTitle: {
        fontSize: 20,
        color: 'red',
        marginBottom: 10
    }
})


export default Profile