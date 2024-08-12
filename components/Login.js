import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { InputForm } from "./Form";
import { signIn } from "next-auth/react"
import Head from "next/head";

const Login = () => {
    return (
        <>
        <Head>
            <title>login</title>
        </Head>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='bg-blue-600 h-screen hidden md:flex flex-col justify-center place-items-center '>
                <FaFacebook className="text-8xl text-white" />
                <h1 className="text-white font-bold text-3xl mt-6">Facebook</h1>
            </div>

            <div className="flex flex-col justify-center place-items-center md:mt-0 mt-16">
                <FaFacebook className="text-8xl text-blue-600" />
                <h1 className="text-3xl text-blue-600 font-bold my-10">Login</h1>
                <InputForm />

                <button onClick={()=>{signIn("google")}}>
                    <div className="bg-blue-600 flex gap-4 p-4 px-6 items-center rounded-md cursor-pointer my-12">
                        <div className="bg-white p-1 rounded-2xl"><FcGoogle className="text-xl" /> </div>
                        <h3 className="text-white text-base ">SignIn with Google</h3>
                    </div>
                </button>
            </div>
        </div>
        </>
    )
}

export default Login



