import { useContext, useState } from 'react'
import axios from 'axios'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { url } from '../../constants/urls'
import { AuthContext } from '../../global/Context'

const Address = (props)=>{
    const { states, setters } = useContext(AuthContext)
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighbourhood, setNeighbourhood] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [complement, setComplement] = useState('')



    const saveAddress = ()=>{
        const body = {
            street,
            number,
            neighbourhood,
            city,
            state,
            complement
        }
        const headers = {
            headers: {
                auth: states.token
            }
        }
        axios.put(`${url}/address`, body, headers).then(res=>{
            console.log(res.data)
            alert('Endereço cadastrado.')
            props.navigation.navigate('Feed')
        }).catch(e=>{
            alert(e.response.data)
        })
    }



    const limpar = ()=>{
        setCity('')
        setComplement('')
        setNeighbourhood('')
        setNumber('')
        setState('')
        setStreet('')
    }
    

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    onChangeText={setStreet}
                    value={street}
                    placeholder='Rua / Av.'/>

                <TextInput style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    placeholder='Número'
                    keyboardType='numeric'/>

                <TextInput style={styles.input}
                    onChangeText={setNeighbourhood}
                    value={neighbourhood}
                    placeholder='Bairro'/>

                <TextInput style={styles.input}
                    onChangeText={setCity}
                    value={city}
                    placeholder='Cidade'/>

                <TextInput style={styles.input}
                    onChangeText={setState}
                    value={state}
                    placeholder='Estado'/>

                <TextInput style={styles.input}
                    onChangeText={setComplement}
                    value={complement}
                    placeholder='Complemento'/>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={saveAddress}>
                        <Text style={{color:'whitesmoke'}}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={limpar}>
                        <Text style={{color:'whitesmoke'}}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    form: {
        marginTop: 100
    },
    input: {
        backgroundColor: 'lightgray',
        margin: 10,
        height: 40,
        width: 300,
        fontSize: 18,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    button: {
        backgroundColor: '#e8222e',
        padding: 10,        
        alignItems: 'center',
        width: 100,
        borderRadius: 10
    }
})

export default Address