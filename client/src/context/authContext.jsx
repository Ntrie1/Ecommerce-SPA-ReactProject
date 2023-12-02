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
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');

    const clearError = () => {
      setLoginError(''),
      setRegisterError('')
    }
  
    const loginSubmitHandler = async (values) =>{
      try {
        const result = await authService.login(values.email, values.password);
        localStorage.setItem('accessToken', result._id)
        setAuth(result);
        setLoginError('');
        navigate('/')
      } catch (error) {
        setAuth({});
        setLoginError(error.message);
      }
    }
  
    const registerSubmitHandler = async(values) =>{
      
        try {
      const result = await authService.register(
        values.email,
        values.username,
        values.password,
        values.repeatPassword);
  
        setAuth(result);
        localStorage.setItem('accessToken', result._id)
        navigate('/')
        } catch (error) {
            setAuth({});
            setRegisterError(error.message);
       }
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
      clearError,
      username: auth.username,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.email,
      loginError,
      registerError
    }
 

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;