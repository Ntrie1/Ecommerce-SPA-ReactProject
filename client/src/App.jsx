import { useState } from 'react'
import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/main/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>

    <Header />
    
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>

     <Footer />

              </>
  )
}

export default App
