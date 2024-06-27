'use client'
import { createContext, useContext, useState } from 'react';

export const userLogin = createContext({});

export const UserLogin = ({ children }) => {
      const [isloggedin, setisloggedin] = useState(false);
      const [loginRole, setloginRole] = useState('customer');

      return <userLogin.Provider value={{isloggedin, setisloggedin, loginRole, setloginRole}}>{children}</userLogin.Provider>;
    
};

export default function useUserloginStatus() {
      return useContext(userLogin)
}
