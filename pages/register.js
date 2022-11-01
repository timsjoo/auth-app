import Head from "next/head";
import Link from "next/link";
import Layout from '../layout/layout';
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";


export default function Register() {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassworrd: '',
    },
    validate: registerValidate,
    onSubmit,
  })

  async function onSubmit(values){
    console.log(values);
  }

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
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <input
                type="Username"
                name="Username"
                placeholder="Username"
                {...formik.getFieldProps('username')}
              />
              {formik.errors.username && formik.touched.username ? <div className="text-red-500">{formik.errors.username}</div> : <></>}
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email ? <div className="text-red-500">{formik.errors.email}</div> : <></>}
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              {formik.errors.password && formik.touched.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
            </div>
            <div className="input-group">
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                {...formik.getFieldProps('cpassword')}
              />
              {formik.errors.cpassword && formik.touched.cpassword ? <div className="text-red-500">{formik.errors.cpassword}</div> : null}
            </div>
            <div className="input-button">
              <button type="submit">
                Register
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