import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import {setCredentials} from '../../slices/authSlice'
import authService from '../../services/authService'
import { toast } from 'react-toastify'

function ProfilePage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [full_name, setFullName] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
       setFullName(userInfo.account.full_name)
       setEmail(userInfo.account.email)

    }, [userInfo.setEmail, userInfo.setFullName])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('updated')
        toast.success('Profile Updated Successfully!')
       
    }

  return (loading ? (<h1>Loading...</h1>): (
    <FormContainer>
    <h1>Update Profile</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='full_name'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
                type='text'
                value={full_name}
                onChange={(e)=> setFullName(e.target.value) }
                placeholder='Enter Fullname'
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value) }
                placeholder='Enter Email Address'
            ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value) }
                placeholder='Enter Password'
            ></Form.Control>
        </Form.Group>

        <Button type='submit' className='mt-3'>Update</Button>
    </Form>
</FormContainer>
  ))
}

export default ProfilePage