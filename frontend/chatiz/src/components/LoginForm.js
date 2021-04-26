import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginform.css'
import { useAuth } from '../utils/auth-context'
export default function LoginForm(props) {
    const {loggedIn} = useAuth()
    return loggedIn ? <>{props.history.push("/dashboard")}</> : <LoggedData {...props}/>
}

function LoggedData(props){
    const {login} = useAuth()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    return (
        <div className="container">
            <div className="card form">
                <h1 style={{ textAlign: 'center' }}>Enter the chat room !</h1>
                
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="username" required />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" required />
                    <button onClick={()=>{login(email,password,function(){
                        props.history.push("/dashboard")
                    })}}>login</button>
                    <small><Link to="/">Go to home ?</Link></small>
            </div>
        </div>
    )
}