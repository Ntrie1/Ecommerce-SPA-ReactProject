import { useState } from 'react'
import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/main/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Login from './components/user/login/Login'
import AuthContext from './context/authContext'

import * as authService from './services/authService'

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) =>{
    console.log(values);
    try {
      const result = await authService.login(values.email, values.password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

    <AuthContext.Provider value={{loginSubmitHandler}}>

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
