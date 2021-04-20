import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Error from './Error'

function Authentication() {
    return (
        <>
        <Router>
            <Route path='/authentication/signup' component={SignUp} />
            <Route path='/authentication/login' component={Login} />
            <Route path='*'> <Error /> </Route>
        </Router>
        </>
    )
}

export default Authentication