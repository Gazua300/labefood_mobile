import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { url } from '../../constants/urls'
import { AuthContext } from '../../global/Context'
import { Searchbar, Avatar } from 'react-native-paper'
import { TouchableOpacity, Text, Image, ScrollView, StyleSheet, View } from 'react-native'




const Feed =(props)=>{
    const { states, setters } = useContext(AuthContext)
    const [restaurants, setRestaurants] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    

    useEffect(()=>{
        const headers = {
            headers: {
                auth: states.token
            }
        }        
        axios.get(`${url}/restaurants`, headers).then(res=>{
            setRestaurants(res.data.restaurants)
        }).catch(e=>{
            alert(e.response.data.message)
        })
    }, [])


    const restaurantDetail = (id)=>{
        const headers = {
            headers: {
                auth: states.token
            }
        }
        axios.get(`${url}/restaurants/${id}`, headers).then(res=>{
            setters.setRestaurant(res.data.restaurant)
            props.navigation.navigate('Detail')
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const onChangeSearch = (query)=>{
        setSearchQuery(query)
    }


    // const found = restaurants.filter(rest=>{
    //     return rest.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    // })


    return(
        <ScrollView>
            <View style={styles.logo}>
                <Image
                    source={require('../../../assets/logo-future-eats-invert.png')}/>
                <Searchbar
                    onChangeText={onChangeSearch}
                    value={searchQuery}/>
                {restaurants && restaurants.map(rest=>{
                    return(
                        <View key={rest.id}
                            style={styles.container}>
                            <TouchableOpacity onPress={()=> restaurantDetail(rest.id)}>                            
                                <Avatar.Image size={250} style={styles.avatar}
                                    source={{uri: rest.logoUrl}}/>
                            </TouchableOpacity>
                            <Text style={styles.restName}>{rest.name}</Text>
                            <Text style={styles.content}>
                                Entrega em: {rest.deliveryTime}min{'\n'}
                                Frete: R$ {rest.shipping},00
                            </Text>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    logo: {
        alignItems: 'center'
    },
    container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        margin: 10
    },
    avatar: {
        margin: 10
    },
    restName: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    },
    content: {
        
    }
})

export default Feed
