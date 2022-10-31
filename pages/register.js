import Head from "next/head";
import Link from "next/link";
import Layout from '../layout/layout';


export default function Register() {
  return (
    <Layout>
  
      <Head>
        <title>Register</title>
      </Head>

              <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
            <p className="w-3/4 mx-auto text-gray-400"> Lorem ipsum dolor sit amet consectetur adipsicing elit. Dolorers, officia?</p>
          </div>
          <form className="flex flex-col gap-5">
            <div className="input-group">
              <input
                type="Username"
                name="Username"
                placeholder="Username"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="input-group">
              <input
                type="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="input-button">
              <button type="submit">
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray">
            Have an account? <Link href={'/login'} className="text-blue-400">Sign In</Link>
          </p>
        </section>
    </Layout>
  )
}