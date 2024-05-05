import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <div>
        <Header/>
        <ToastContainer/>
        <Outlet />
    </div>
  )
}

export default MainLayout