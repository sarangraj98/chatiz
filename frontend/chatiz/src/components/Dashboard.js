import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch, useParams } from 'react-router-dom'
import { useAuth } from '../utils/auth-context'
import '../styles/dash.css'


export default function Dashboard(props) {
    const { path, url } = useRouteMatch()

    return (
        <>
            <Router>
                <div className="sidebar">
                    <Link to="/dashboard" className="active">Home</Link>
                    <Link to={`${url}/random`} >Random Chat</Link>
                    <Link to={`${url}/group`}>Group Chat</Link>
                    <Link to={`${url}/settings`}>Settings</Link>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path={path}>
                            <HomeDash {...props}/>
                        </Route>
                        <Route path={`${path}/:menu`} >
                            <Dynamic {...props} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

function Dynamic(props) {
    let { menu } = useParams()
    const { path, url } = useRouteMatch()
    console.log(path,url)
    return <h3>This is {menu}</h3>
}

function HomeDash(props) {
    const { logout } = useAuth();
    return(
        <>
        <Link to="/">Home</Link><br />
                <button onClick={() => {
                    logout(() => {
                        props.history.push('/')
                    })
                }}>LOGOUT</button>
        </>
    )
    
}