'use client'
import AdminHomePage from "@/pages/AdminHomePage";
import UserHomePage from "@/pages/UserHomePage";
import VendorHomePage from "@/pages/VendorHomePage";
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
