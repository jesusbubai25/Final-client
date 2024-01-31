import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {loading,user}=useSelector(state=>state.user)
    if(user){
        return <Outlet/>
    }
    if(!user && loading===false){
        return <Navigate to="/"/>
    }
}

export default ProtectedRoute