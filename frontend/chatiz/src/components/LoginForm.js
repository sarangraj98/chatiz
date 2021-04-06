import React from 'react'
import '../styles/loginform.css'
import auth from '../utils/auth'
export default function LoginForm(props) {
    return (
        <div className="container">
            <div className="card form">
                <h1 style={{ textAlign: 'center' }}>Enter the chat room !</h1>
                
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button onClick={()=>{
                        auth.login(()=>{
                            props.history.push("/dashboard")
                        })
                    }}>login</button>
                
            </div>
        </div>
    )
}
