import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

import * as authService from '../services/authService'
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => { 
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
  
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
      _id: auth._id,
      isAuthenticated: !!auth.email,
    }
 

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;