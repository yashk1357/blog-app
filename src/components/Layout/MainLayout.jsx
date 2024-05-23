import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';

function MainLayout() {
  return (
    <Box>
        <ToastContainer/>

        <Outlet />
    </Box>
  )
}

export default MainLayout