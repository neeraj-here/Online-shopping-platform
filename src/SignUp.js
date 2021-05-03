import React, {useRef, useState} from 'react'
import { Button, Card, Form, Alert, Container } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import {db} from './Firebase'
import {Link, useHistory} from 'react-router-dom'

function SignUp() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    function handleSubmit(e) {
         e.preventDefault()
         if (passwordRef.current.value !== passwordConfirmRef.current.value) {
             return setError('Passowords do not match!')
        }
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value).then((cred) => {
                db.collection('SignedUpUserData').doc(cred.user.uid).set({
                    email: emailRef.current.value,
                }).then(() => {
                    history.push('/products')
                }).catch(err => setError(err.message))
            }).then(() => setLoading(false)).catch(() => {
                setError("Something is Wrong. Failed to create an account!")
                setLoading(false)
            })
    }

    return (
        
        <>
            <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "80vh" }} >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4"> Let's Sign Up </h2>
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
                                {loading ? "Signing you up..." : "Sign Up"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2 ">
                    Already have an account? <Link to='/login'> Log In</Link>
                    </div>
                </div>
            </Container>
        </>
    
        
    )
}

export default SignUp