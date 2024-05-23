import React from 'react'

import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { NavDropdown, Badge } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux' 
import {clearCredentials} from '../../slices/authSlice'
import { toast } from 'react-toastify'

function Header() {
    
  return (
    <>
    </>
  )
}

export default Header