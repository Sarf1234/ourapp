import { useSession, signIn } from 'next-auth/react';

const LoginPage = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    // User is already logged in, redirect to protected route
    return <Redirect to="/protected" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ user_id: email, password }),
        headers: {
          'Authorization': GetAuthorization()
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          alert("Invalid password!");
        } else {
          alert("Some error occurred");
        }
      } else {
        const data = await response.json();
        signIn('credentials', { email, password, callbackUrl: '/protected' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-5/6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4 text-black tracking-widest">eRentals</h1>
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;