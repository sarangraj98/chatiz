import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h3>This is home page</h3><br />
            <Link to="/dashboard">Profile</Link><br />
            <Link to="/login">LOGIN</Link><br />
        </div>
    )
}
