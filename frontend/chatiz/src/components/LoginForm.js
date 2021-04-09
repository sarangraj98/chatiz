import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginform.css'
import { useAuth } from '../utils/auth-context'
export default function LoginForm(props) {
    const {loggedIn} = useAuth()
    return loggedIn ? <>{props.history.push("/dashboard")}</> : <LoggedData {...props}/>
}

function LoggedData(props){
    const {login} = useAuth()
    return (
        <div className="container">
            <div className="card form">
                <h1 style={{ textAlign: 'center' }}>Enter the chat room !</h1>
                
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button onClick={()=>{login(()=>{
                        props.history.push("/dashboard")
                    })}}>login</button>
                    <small><Link to="/">Go to home ?</Link></small>
            </div>
        </div>
    )
}