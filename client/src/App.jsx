import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/main/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Login from './components/user/login/Login'
import {AuthProvider} from './context/authContext'

import Register from './components/user/register/Register'
import Logout from './components/user/logout/Logout'
import CreateDevice from './components/devices/create-device/CreateDevice'

function App() {


  return (
    <>
    <AuthProvider>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/devices/create' element={<CreateDevice/>} />
      </Routes>

      <Footer />

    </AuthProvider>
    </>
  )
}

export default App
