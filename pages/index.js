import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { usersData } from "./api/users";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // const res = await fetch('http://localhost:3001/api/user');
  // const data = await res.json();

  return {
    props: {
      session,
    }
  }
}

function Home() {
  const { data: session } = useSession();
  const uData = usersData;
  

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
        <Feed data={uData} />
      </main>
      {/* test */}
    </>
  );
}

export default Home




