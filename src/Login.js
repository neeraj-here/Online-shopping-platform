import React, {useRef, useState} from 'react'
import { Button, Card, Form, Alert, Container } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/products')
        }
        catch {
            setError("Failed to Log in!")
        }
        setLoading(false)
    }

    return (
        
        <>
            <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "80vh" }} >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Let's Log In</h2>
                            {error && <Alert variant="danger"> {error} </Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required ref={emailRef} />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required ref={passwordRef} />
                                </Form.Group>
                                <Button className="w-100" type="submit" disabled={loading}>
                                    {loading ? "Logging you in..." : "Log In"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2 ">
                        Don't have an account already? <Link to='/signup'> SignUp</Link>
                    </div>
                </div>
            </Container>
        </>
    
        
    )
}

export default Login
