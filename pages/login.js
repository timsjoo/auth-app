import Head from "next/head";
import Link from "next/link";
import Layout from '../layout/layout';
import { useSession, signIn, signOut } from 'next-auth/react';


export default function Login() {

  // google handlerr function
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: "http://localhost/3000"});
  }

  return (
    <div>
      <Layout>
        <Head>
          <title>Login</title>
        </Head>
      
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
            <p className="w-3/4 mx-auto text-gray-400"> Lorem ipsum dolor sit amet consectetur adipsicing elit. Dolorers, officia?</p>
          </div>
          <form className="flex flex-col gap-5">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div className="input-button">
              <button type="submit">
                Login
              </button>
            </div>
              <div className="input-button">
              <button type="submit" onClick={handleGoogleSignIn}>
                Sign In with Google
              </button>
            </div>
              <div className="input-button">
              <button type="submit">
                Sign In with GitHub
              </button>
            </div>
          </form>
          <p className="text-center text-gray">
            Do not have an account? <Link href={'/register'} className="text-blue-400">Sign Up</Link>
          </p>
        </section>
      </Layout>
    </div>
  )
}