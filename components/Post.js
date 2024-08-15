import userImage from "@/public/profile_placeholder.png"
import postImage from "@/public/elon_musk.jpg"

import { TiWorld } from "react-icons/ti";
import { LuDot } from "react-icons/lu";

import { BiLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";


import { MdOutlineClose } from "react-icons/md";


const Post = ({caption, image,uImage,uName}) => {
    return (
        <div className='bg-white rounded-2xl  mb-4 w-8/12'>
            <div className="flex place-items-center px-6 pt-6">
                <img className="w-11 h-11 rounded-full mr-2" src={uImage} />
                <div>
                    <h3 className="font-bold">{uName}</h3>
                    <p className="flex place-items-center text-gray-500">1 d <LuDot /> <TiWorld className="text-lg" /></p>
                </div>
            </div>

            <h3 className="px-6 pt-4">{caption}</h3>

            <div className="w-full h-80 my-3">
            <img src={image} className="w-full h-full"/>
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
