import React from 'react'
import { Container } from 'react-bootstrap'
import SignUp from './SignUp'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
function Authentication() {
    return (
        <>
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }} >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Router>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </Router>
            </div>
        </Container>
        </>
    )
}

export default Authentication