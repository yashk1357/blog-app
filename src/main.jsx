import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout.jsx'
import HomePage from './components/pages/HomePage.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpPage from './components/pages/SignUpPage.jsx'
import store from './Store/store.js'
import {Provider} from 'react-redux'
import ProfilePage from './components/pages/ProfilePage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
      {/* private routes */}
      <Route path='' element={<PrivateRoute/>}>
        <Route path='/profile' element={<ProfilePage/>} />
      </Route>
      


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <React.StrictMode>
      <App />
      </React.StrictMode>
    </RouterProvider>
  </Provider>
  
)
