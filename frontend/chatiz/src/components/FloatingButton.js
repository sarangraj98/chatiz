import React from 'react'
import '../styles/floating.css'
import auth from '../utils/auth'
export default function FloatingButton(props) {
    return (
        <div>
            <button onClick={()=>{
                       auth.logout(() => {
                        props.history.push('/')
                    })
                    }}>login</button>

        </div>
    )
}
