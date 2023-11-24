import { useState } from 'react'
import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/main/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Login from './components/user/login/Login'

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
