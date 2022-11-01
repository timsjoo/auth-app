import Link from 'next/link'
import { getSession } from 'next-auth/react';

export default () => {
  return(
    <section>
      <h3>Pofile Page</h3>
      <Link href={"/"}>Home Page</Link>
    </section>
  )
}

export async function getServiceSideProps({req}) {
  const session = await getSession({req});

  if (!session) { 
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      }
    }
  }
  return {
    props: {session}
  }
}