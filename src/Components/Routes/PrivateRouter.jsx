import React, {  useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    
    const {user, loading}= useContext(AuthContext);

    const location= useLocation();
    if(loading){
        return  <div className='text-center flex justify-center my-40'><span className='loading loading-dots loading-lg font-extrabold text-center '></span></div>
    }
    if(user){
        return <>{children}</>
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>

};

export default PrivateRouter;