import AdminHomePage from "@/pages/AdminHomePage";
import UserHomePage from "@/pages/UserHomePage";
import VendorHomePage from "@/pages/VendorHomePage";
import { auth } from '../auth';

export default async function Home() {
  const session = await auth()
   const role = session?.user?.role
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
       {AdminCheck(role)}
    </div>
  ) 
}
