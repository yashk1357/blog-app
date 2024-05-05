import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import {setCredentials} from '../../slices/authSlice'
import authService from '../../services/authService'
import { toast } from 'react-toastify'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        setLoading(false)
        if(userInfo){
            navigate('/')
        }

    }, [userInfo, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
       try {
        const res = await authService.login({email, password})
        console.log(res)
        dispatch(setCredentials(res))
        navigate('/')
        toast.success("Logged in successfully!")
        setLoading(false)
       } catch (error) {
        toast.error(error.message)
        setLoading(false)
       }
       

    }

  return (loading ? (<h1>Loading...</h1>): (<FormContainer>
    <h1>Sign In</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value) }
                placeholder='Email Address'
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value) }
                placeholder='Password'
            ></Form.Control>
        </Form.Group>

        <Button type='submit' className='mt-3'>Sign In</Button>
        <Row className='py-3'>
            <Col>
                New Customer? <Link to='/signup'>Register</Link>
            </Col>
        </Row>
    </Form>
</FormContainer>))
}

export default LoginPage