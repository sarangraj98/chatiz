import React from 'react'
import '../styles/loginform.css'
export default function LoginForm() {
    const submitHandler = () => {
        alert('Button clicked')
    }
    return (
        <div className="container">
            <div className="card form">
                <h1 style={{ textAlign: 'center' }}>Enter the chat room !</h1>
                <form className="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button onClick={submitHandler}>login</button>
                </form>
            </div>
        </div>
    )
}
