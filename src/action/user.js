'use server'
import { redirect } from 'next/navigation';
import { signIn } from '../auth';
import { AuthError } from 'next-auth';


const LoginUser = async (FormData) => {
  console.log(FormData);
  const username = FormData.get('email');
  const password = FormData.get('password');
  console.log(username, password);

  try {
    await signIn('credentials', {
      username,
      password,
      redirect: false,
      callbackURL: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong' };
      }
    }

    throw error;
  }
  redirect("/")
};

export { LoginUser };