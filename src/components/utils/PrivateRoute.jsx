import React from 'react';
import { Navigate } from "react-router-dom";
import useStore from '../../store';

const PrivateRoute = ({ Component }) => { 
    const { isLoggedIn } = useStore();
    console.log(isLoggedIn);
    
    return !isLoggedIn ? <Navigate to="/" replace /> : <Component />;
}

export default PrivateRoute;
