import React from 'react';
import { Navigate } from "react-router-dom";
import useStore from '../../store';

const PublicOnlyRoute = ({ Component }) => { 
    const { isLoggedIn } = useStore();
    console.log(isLoggedIn);
    
    return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}

export default PublicOnlyRoute;
