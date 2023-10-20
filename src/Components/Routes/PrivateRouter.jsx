import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    
    const {user, loading}= useContext(AuthContext);

    const location= useLocation();
    if(loading){
        return  <div className='text-center flex justify-center mt-40'><span className='loading loading-bars loading-lg text-center '></span></div>
    }
    if(user){
        return <>{children}</>
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>


};

export default PrivateRouter;