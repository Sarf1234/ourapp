'use client'
import AdminHomePage from "@/Components/admin/AdminHomePage";
import UserHomePage from "@/Components/customer/UserHomePage";
import VendorHomePage from "@/Components/vendor/VendorHomePage";
import Image from "next/image";
import useUserloginStatus from '@/context/UserloginStatus'

export default function Home() {
  const { isloggedin, loginRole } = useUserloginStatus()
  
  const AdminCheck = (role) => {
    if (role === "admin") {
        return <AdminHomePage></AdminHomePage>;
    } else if (role === "vendor") {
        return <VendorHomePage></VendorHomePage>;
    } else {
        return <UserHomePage></UserHomePage>;
    }
  };

  return(
    <div>
       {AdminCheck(loginRole)}
    </div>
  ) 
}
