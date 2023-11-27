import { useContext, useEffect } from "react";

import * as authService from '../../../services/authService';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";

const Logout = () => {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() =>{
        authService.logout()
        .then(() => logoutHandler()) 
        .catch(() => navigate('/'))
    }, []);
    
    return null;
}

export default Logout;