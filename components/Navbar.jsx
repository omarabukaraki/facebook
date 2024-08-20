
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";


const Navbar = ({ isSubNav }) => {
    console.log(isSubNav,'*/84984464848846478')
    const { data: session, data: token } = useSession();
    const userData = session?.user?.name !== undefined ? JSON.parse(session?.user?.name) : '';


    return (
        <div className='fixed z-50 top-0 left-0 right-0 h-12 flex justify-between  items-center shadow-md bg-white'>
            <div className="flex gap-2">
                <Link href={'/'}>
                    <FaFacebook className="text-3xl text-blue-600 ml-4" />
                </Link>
                {isSubNav !== true ? <div className="h-8 w-52 rounded-3xl bg-gray-200 flex justify-center place-items-center">
                    <AiOutlineSearch className="text-xl text-gray-500 mx-2" />
                    <input className="h-8 w-52 rounded-3xl bg-gray-200" placeholder="Search Facebook" />
                </div> : <span></span>}
            </div>


            {
                isSubNav !== true ?
                    <div className="hidden lg:flex items-center gap-[100px] text-[30px] text-gray-500">
                        <div className="relative">
                            <AiFillHome className="text-blue-600 text-2xl" />
                            <div className="rounded-full absolute bg-blue-600 -left-[40px] h-[2px] w-[110px] -bottom-[14px]"></div>
                        </div>

                        <IoStorefrontOutline className="text-2xl" />
                        <svg viewBox="0 0 28 28" fill="currentColor" height="25" width="25">
                            <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
                        </svg>
                        <svg viewBox="0 0 28 28" fill="currentColor" height="25" width="25">
                            <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"></path>
                        </svg>
                    </div> : <span></span>
            }


            <div className="hidden md:flex items-center gap-4">
                <div className="text-base bg-gray-200 p-2 rounded-full">
                    <CgMenuGridO />
                </div>

                <div className="text-base bg-gray-200 p-2 rounded-full">
                    <BsMessenger />
                </div>

                <div className="text-base bg-gray-200 p-2 rounded-full">
                    <IoNotifications />
                </div>

                {isSubNav !== true ? <ProfileMenu image={userData.image} userName={userData.name} /> :
                    <Link href={'/'} className="text-base bg-gray-200 p-2 mr-4 rounded-full">
                        <IoMdArrowRoundBack />
                    </Link>}
            </div>

        </div>



    )
}

export default Navbar




