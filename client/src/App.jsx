import { useState } from 'react'
import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/main/homePage/HomePage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/user/login/Login'
import AuthContext from './context/authContext'

import * as authService from './services/authService'

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) =>{
    console.log(values);
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    loginSubmitHandler, 
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  }

  return (
    <>

    <AuthContext.Provider value={values}>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
      </Routes>

      <Footer />

    </AuthContext.Provider>
    </>
  )
}

export default App
