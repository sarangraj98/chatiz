import React, { createContext, useState } from 'react'
import axios from 'axios'
const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    // useEffect(() => {

    // }, [])
    const login = async (email, password, cb) => {
            const data = await axios({
                method: 'post', url: "http://localhost:5000/users/login",
                data: {
                    email: email, // This is the body part
                    password: password
                }
            })
           console.log(data)
       


        cb()
    }
    const logout = (cb) => {
        setLoggedIn(false)
        cb()
    }
    const authContextValue = {
        login, loggedIn, logout
    };
    return <AuthContext.Provider value={authContextValue}{...props} />
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }