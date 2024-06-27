'use client'
import { useState } from 'react'
import Link from 'next/link';
import useUserloginStatus from '@/context/UserloginStatus'
import { CheckAuth } from '@/utility/CheckAuth';
import GetAuthorization from '@/utility/GetAuthorization';
import Cookies from 'js-cookie';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setisloggedin, setloginRole} = useUserloginStatus()
  console.log(CheckAuth())
  
  const Submit = async () =>{ 
    const data = {
      user_id : email,
      password : password
    } 

    try{
       const response =  await fetch(`${process.env.NEXT_PUBLIC_URL}/login`,{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
              'Authorization': GetAuthorization()
          }
        })
        if(!response.ok){
            if(response?.status===401){
             alert("invaild password!")
            }
            else
            {
              alert("some error occure");
            }  
        }else{
            const datacookies = await response.json()
            setCookie(datacookies)
            setisloggedin(CheckAuth())
            await fetchData()
        }             
    }
    catch(error){
        console.log(error)
    }
       
}

const fetchData = async() =>{ 
  if(CheckAuth()){ 
      try{
          const response =  await fetch(`${process.env.NEXT_PUBLIC_URL}/user`,{
              method:'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization': GetAuthorization()
              }
          })
          if(!response.ok){
              console.log("something went wrong")
              return null;
              }else{
                const data = await response.json()
                const role = data.roles[0];
                setloginRole(role);
                localStorage.setItem('userRole', role);
                    if (data.roles[0] === "admin") {
                      console.log("admin")
                    }
                    else if(data.roles[0] === "vendor"){
                      console.log("vendor")
                    } else {
                      console.log("user")
                    }
           }

         }catch(e){
           console.log("something went wrong ")
         }                               
  }
}
  
  const handleLogin = async() => {
    if(email === ""){
      alert("Please enter email");
     }         
     else if(password === ""){
      alert("Please enter password");
       } 
      else{
        await Submit();
      }
  };

  const setCookie = (cookieData) =>{
    Cookies.set('authToken',cookieData?.authToken,{path:'/'})
    Cookies.set('refreshToken',cookieData?.refreshToken,{path:'/'})   
  } 

  return (
    <div className="flex justify-center items-center h-5/6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4 text-black tracking-widest">eRentals</h1>
        <div className='text-left'>
          <label className='text-black text-left font-medium'>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 mb-4 text-black bg-gray-100 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='text-left'>
          <label className='text-black text-left font-medium'>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-6 bg-gray-100 text-black  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-site-color text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <div className="mt-4 text-left">
          <p className="text-sm text-black">
            Don't have an account?{' '}
            <Link href="#" className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="text-sm mt-2 text-black">
            Forgot your password?{' '}
            <Link href="#" className="text-red-500 hover:underline">
              Reset Password
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page