import { useContext, useState } from "react"
import { StyleSheet } from "react-native"
import { url } from "../../constants/urls"
import axios from 'axios'
import { AuthContext } from "../../global/Context"
import { Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native"



const Login = (props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setters } = useContext(AuthContext)


    const login = ()=>{
        const body = {
            email,
            password
        }
        axios.post(`${url}/login`, body).then(res=>{
            setters.setToken(res.data.token)
            props.navigation.navigate('Feed')
        }).catch(e=>{
            alert(e.response.data.message)
        })
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="nome@email.com"/>
                
                <TextInput style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Senha"/>

                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={login}
                        style={styles.button}>
                        <Text style={{color:'whitesmoke'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.linkContainer}>
                    Ainda não tem cadastro?
                    <Text style={styles.link}
                        onPress={()=> props.navigation.navigate('Signup')}> Clique aqui.</Text>                
                </Text>
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
        alignItems: 'center',
        marginTop: 25 
    },
    button: {
        backgroundColor: '#e8222e',
        padding: 10,        
        alignItems: 'center',
        width: 100,
        borderRadius: 10,
    },
    linkContainer: {
        alignItems: 'center',
        marginTop: 50,
        textAlign: 'center'
    },
    link: {
        color: 'blue'
    }
})

export default Login