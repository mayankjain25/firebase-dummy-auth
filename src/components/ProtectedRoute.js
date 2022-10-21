import React from 'react'
import { Navigate, useInRouterContext } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';
const ProtectedRoute = ({children}) => {
    let {user} = useUserAuth();
    if(!user){
        return <Navigate to="/" />
    }
    return (
    <div>{children}</div>
  )
}

export default ProtectedRoute