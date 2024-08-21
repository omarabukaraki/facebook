import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const res = await fetch('http://localhost:3000/api/user');
  const data = await res.json();
  return {
    props: {
      session,
      data,
    }
  }
}

function Home({data}) {
  const { data: session } = useSession();

  if (!session) {
    return <>
      <Login />
    </>
  }

  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <main>
        <Navbar isSubNav={false} />
        <LeftSidebar />
        <RightSidebar />
        <Feed data={data} />
      </main>
    </>
  );
}

export default Home




