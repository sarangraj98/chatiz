import React from 'react'
import '../styles/loginform.css'
export default function LoginForm() {
    const submitHandler = ()=>{
        alert('Button clicked')
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Enter the chat room !</h1>
                <input name="name" placeholder="Enter your name" required></input>
                <br/><select>
                    <option value="">Test</option>
                    <option value="">Test</option>
                    <option value="">Test</option>
                </select><br/>
                <button onClick={submitHandler}>ENTER</button>
            </div>
        </div>
    )
}
