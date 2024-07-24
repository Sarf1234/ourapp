import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name:'credentials',
      credentials: {
        username: { label: "Username", type:'email'},
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user_id = credentials.username
        const password = credentials.password;
      
        if (!user_id ||!password) {
          throw new CredentialsSignin("please enter your username and password")
        }
      
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/login`, {
            method: "POST",
            body: JSON.stringify({ user_id, password }),
            timeout: 5000,
          })
          
          if (!response.ok) {
            throw new Error("Couldn't login with username and password")
          }
      
          const tokenResponse = await response.json()
          const token = tokenResponse.authToken
          
          const userDetailsResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            timeout: 3000,
          })

          if (!userDetailsResponse.ok) {
            throw new Error("Couldn't fetch user details")
          }

          const userData = await userDetailsResponse.json()
            return {
              id: userData.id,
              role: userData?.roles[0],
              email: userData.email,
              mobile: userData.mobile,
              firstName: userData.f_name,
              lastName: userData.l_name,
              profession:userData.profession,
              varified: userData.is_varified,
              profilPick: userData.profile_pic,
            }
        } catch (error) {
          console.log(error)
        }
      }
    }),
  ],
  pages:{
    signIn:"/login"
  }
})