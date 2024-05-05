import React from 'react'

import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { NavDropdown, Badge } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux' 
import {clearCredentials} from '../../slices/authSlice'
import { toast } from 'react-toastify'

function Header() {
    const { userInfo } = useSelector((state) => state.auth)
console.log(userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(clearCredentials())
        navigate('/')
        toast.dark("Logged out!")
    }

    const handleRedirect = () => {
        navigate('/profile')
    }
  return (
        <nav className="relative container ms-auto w-full p-6 bg-cyan-500">
            <div className="flex item-center justify-between">
                <div className='p-2 text-lg rounded-md border  bg-cyan-500 font-bold text-gray-600'>
                    <NavLink to='/' className={'text-gray-600'} style={{textDecoration: 'none' }}>BA</NavLink>
                </div>
                <div className="w-full md:w-1/3">
                    <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-gray-200 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Search"
                        disabled=""
                    />
                </div>            

                <div className="flex space-x-6 text-gray-100">
                    <NavLink className='text-lg text-gray-100 hover:text-gray-600'  style={{textDecoration: 'none' }} to='/'>Home</NavLink>
                    <NavLink className='text-lg text-gray-100 hover:text-gray-600'  style={{textDecoration: 'none' }} to='/career'>About</NavLink>
                </div>

                <div className="flex space-x-6">

                    {
                        userInfo ? (<>        
                            <NavDropdown title={userInfo.account.full_name}>
                                <Link onClick={handleRedirect}>
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                </Link>
                                <Link onClick={handleLogout}>
                                    <NavDropdown.Item>
                                        Logout
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                        </>) : (<>
                            <NavLink to='/login'>
                                <Button>
                                    Sign In
                                </Button>
                            </NavLink>

                    <NavLink to='/signup'>
                        <Button>
                            Sign Up
                        </Button>
                    </NavLink>
                            </>)
                    }
                    
                </div>


            </div>
        </nav>
  )
}

export default Header