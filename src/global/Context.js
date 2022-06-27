import { createContext, useEffect, useState } from "react"
import { url } from "../constants/urls"
import axios from 'axios'


export const AuthContext = createContext()


function AuthProvider({children}){
    const [restaurant, setRestaurant] = useState([])
    const [token, setToken] = useState('')

          

    const states = { token, restaurant }
    const setters = { setToken, setRestaurant }
    const requests = {}

    return(
        <AuthContext.Provider value={{ states, setters, requests }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider