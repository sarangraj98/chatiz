import React from 'react'
import {  useHistory } from 'react-router';

export default function NotFound() {
    const history = useHistory()
    setTimeout(() => {
        history.push('/')
      }, 2000)
    return (
        <div>
           Page not found !<br/>
           Redirects in 2 seconds
        </div>
    )
}
