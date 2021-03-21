import React, {useRef, useState} from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import {Link, useHistory} from 'react-router-dom'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
         e.preventDefault()
         if (passwordRef.current.value !== passwordConfirmRef.current.value) {
             return setError('Passowords do not match!')
        } 
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/home')
        }
        catch {
            setError("Something is Wrong. Failed to create an account!")
        }
        setLoading(false)
    }

    return (
        
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Let's Sign Up</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" required ref={passwordConfirmRef} />
                        </Form.Group>
                        <Button className="w-100" type="submit" disabled={loading}>
                            {loading ? "Signing Up.." : "Sign Up"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 ">
                Already have an account? <Link to='/login'> Log In</Link>
            </div>
        </>
    
        
    )
}

export default SignUp