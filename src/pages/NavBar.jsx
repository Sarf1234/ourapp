'use client'
import React from 'react'
import VendroNav from './VendroNav'
import UserNav from './UserNav'
import AdminNav from './AdminNav'
import useUserloginStatus from '@/context/UserloginStatus'

const NavBar = () => {
   
const { isloggedin, loginRole } = useUserloginStatus()
  
  const AdminCheck = (role) =>{
    if(role ==="admin"){
      return <AdminNav></AdminNav>
    }else if(role === "vendor"){
       return <VendroNav></VendroNav>
    }else{
       return <UserNav></UserNav>
    }
  }

 return ( 
    <div> 
        {AdminCheck(loginRole)}
    </div>
 )
}

export default NavBar
