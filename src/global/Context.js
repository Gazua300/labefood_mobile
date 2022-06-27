import { createContext, useEffect, useState } from "react"
import { url } from "../constants/urls"
import axios from 'axios'


export const AuthContext = createContext()


function AuthProvider({children}){
    const [restaurant, setRestaurant] = useState([])
    const [token, setToken] = useState('')
    const [product, setProduct] = useState(1)
    const [dish, setDish] = useState({})
    const [dishId, setDishId] = useState('')
    const [visible, setVisible] = useState(false)

console.log('Prato:', dish)

    
    const add = (ds)=>{
        setDishId(ds.id)
        setDish(ds)
        setVisible(true)
    }
          

    const states = { token, restaurant, product, visible }
    const setters = { setToken, setRestaurant, setProduct, setVisible, add }
    const requests = {}

    return(
        <AuthContext.Provider value={{ states, setters, requests }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider