import Link from 'next/link';
import { LoginUser } from '../../../action/user';
import { auth } from '../../../auth'
import { redirect } from 'next/navigation';

const LoginPage = async() => {
  const session = await auth()
  const user = session?.user
  if(user) redirect('/')


  return (
    <div className="flex justify-center items-center h-5/6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4 text-black tracking-widest">eRentals</h1>
        <form action={LoginUser}>
          <div className='text-left'>
            <label className='text-black text-left font-medium'>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mb-4 text-black bg-gray-100 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              name="email"
            />
          </div>
          <div className='text-left'>
            <label className='text-black text-left font-medium'>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 mb-6 bg-gray-100 text-black  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              name="password"
            />
          </div>
          <button
            className="w-full bg-blue-site-color text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Sign In
          </button>
        </form>
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
};

export default LoginPage;