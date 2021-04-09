import React, { createContext, useState} from 'react'

const AuthContext = createContext({});

const AuthProvider = (props)=>{
    const [loggedIn,setLoggedIn ] = useState(false)
    // useEffect(() => {
       
    // }, [])
    const login = (cb)=>{
        setLoggedIn(true)
        cb()
    }
    const logout = (cb)=>{
        setLoggedIn(false)
        cb()
    }
    const authContextValue = {
        login,loggedIn,logout
    };
    return <AuthContext.Provider value={authContextValue}{...props}/>
}

const useAuth = ()=> React.useContext(AuthContext);

export {AuthProvider,useAuth}