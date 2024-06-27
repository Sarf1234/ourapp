import { createContext, useContext } from "react";

export const userRole = createContext({});

export const UserLoginrole = userRole.Provider;

export default  function useUserRole(){
    return useContext(userRole)
}