import React from 'react'
import VendroNav from './VendroNav'
import UserNav from './UserNav'
import AdminNav from './AdminNav'
import { auth } from '../auth'

const NavBar = async() => {
   const session = await auth()
   const role = session?.user?.role


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
        {AdminCheck(role)}
    </div>
 )
}

export default NavBar
