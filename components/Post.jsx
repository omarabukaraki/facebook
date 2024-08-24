import userImage from "@/public/profile_placeholder.png"
import postImage from "@/public/elon_musk.jpg"

import { TiWorld } from "react-icons/ti";
import { LuDot } from "react-icons/lu";

import { BiLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";


import Link from "next/link";


const Post = ({caption, image,uImage,uName,uId,width}) => {
    let path = uId !== undefined ? `/profile/${uId}` : '/my_profile';

    return (
        <div className={`bg-white rounded-2xl mb-4 ${width} min-w-[22rem] border-[0.01rem] border-gray-300`}>
            <Link href={path} className="flex place-items-center px-6 pt-6">
            <img alt="" className="w-11 h-11 rounded-full mr-2 object-cover" src={uImage} />
                <div>
                    <h3 className="font-bold">{uName}</h3>
                    <p className="flex place-items-center text-gray-500">1 d <LuDot /> <TiWorld className="text-lg" /></p>
                </div>
            </Link>
            <h3 className="px-6 pt-4">{caption}</h3>

            <div className="w-full h-80 my-3">
            <img alt="" src={image} className="w-full h-full object-cover"/>
            </div>

            <div className="h-[0.1rem] bg-gray-300 my-3 mx-6"></div>


            <div className="flex justify-between mx-6 mb-4">
                <div className="flex place-items-center p-2">
                    <BiLike className="text-2xl text-gray-500" />
                    <h3 className="ml-2 text-gray-700 ">LiKe</h3>
                </div>

                <button>
                    <div className="flex place-items-center p-2">
                        <BiComment className="text-2xl text-gray-500" />
                        <h3 className="ml-2 text-gray-700">Comment</h3>
                    </div>
                </button>

                <div className="flex place-items-center p-2">
                    <PiShareFatLight className="text-2xl text-gray-700" />
                    <h3 className="ml-2 text-gray-700">Share</h3>
                </div>
            </div>

        </div>
    )
}

export default Post
