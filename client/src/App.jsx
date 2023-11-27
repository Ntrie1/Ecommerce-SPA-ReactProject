import { useState } from 'react'
import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/main/homePage/HomePage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/user/login/Login'
import AuthContext from './context/authContext'

import * as authService from './services/authService'
import Register from './components/user/register/Register'
import Logout from './components/user/logout/Logout'

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) =>{
    console.log(values);
    try {
      const result = await authService.login(values.email, values.password);
      localStorage.setItem('accessToken', result._id)
      setAuth(result);
      navigate('/')
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const registerSubmitHandler = async(values) =>{
    
    const result = await authService.register(
      values.name,
      values.email,
      values.username,
      values.password,
      values.rePassword);

      setAuth(result);
      localStorage.setItem('accessToken', result._id)
      navigate('/')
    console.log(result);
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  const values = {
    loginSubmitHandler, 
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

  return (
    <>

    <AuthContext.Provider value={values}>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>

      <Footer />

    </AuthContext.Provider>
    </>
  )
}

export default App
