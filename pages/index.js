import LeftSidebar from "@/components/LeftSidebar";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}

function Home() {

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
        <Navbar />
        <LeftSidebar />
        <RightSidebar/>
      </main>
    </>
  );
}

export default Home




