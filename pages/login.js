import Head from "next/head";
import Link from "next/link";
import Layout from '../layout/layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from "next/router";

export default function Login() {

  const router = useRouter();
  // google handlerr function
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: "http://localhost/3000"});
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  })

  async function onSubmit(values){
    const status = await signIn('credentials',{
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/"
    })

    if(status.ok) {
      router.push(status.url)
    }
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
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email ? <div className="text-red-500">{formik.errors.email}</div> : <></>}
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="password"
                {...formik.getFieldProps('password')}
              />
              {formik.errors.password && formik.touched.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
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