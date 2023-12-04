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
import AllDevices from './components/devices/all-devices/AllDevices'
import DetailsDevice from './components/devices/details-device/DetailsDevice'
import EditDevice from './components/devices/edit-device/EditDevice'
import Profile from './components/user/profile/Profile'
import AuthGuard from './components/common/guards/AuthGuard'
import NotFound from './components/main/notFound/NotFound'

function App() {


  return (
    <>
    <AuthProvider>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/devices' element={<AllDevices />} />
        <Route path='/register' element={<Register/>} />


      <Route element={<AuthGuard/>} >

        <Route path='/logout' element={<Logout/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/devices/create' element={<CreateDevice/>} />
        <Route path='/devices/:deviceId' element={<DetailsDevice/>} />
        <Route path='devices/:deviceId/edit' element={<EditDevice/>} />
      </Route>


      <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </AuthProvider>
    </>
  )
}

export default App
