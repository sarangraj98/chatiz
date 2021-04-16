import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';

export const UnauthenticatedRoutes = () => {
    return (
        <Router>
            
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export const AuthenticatedRoutes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" component={LoginForm}></Route>
                    <Route path="/dashboard"  component={Dashboard}></Route>
                </Switch>
            </Router>
        </>
    );
}
