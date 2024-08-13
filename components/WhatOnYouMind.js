import userImage from "@/public/profile_placeholder.png"
import { IoVideocamSharp } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const WhatOnYouMind = () => {
    return (
        <div className='bg-white rounded-2xl p-6 mb-4 w-8/12'>
            <div className="flex">
                <img className="w-11 h-11 rounded-full" src={userImage.src} />
                <input className="w-full pl-4 text-base placeholder:text-gray-500" placeholder="What's on your mind?" />
            </div>

            <div className="w-full h-[0.1rem] bg-gray-300 my-3"></div>
            <div className="flex justify-between">
                <div className="flex place-items-center p-2">
                    <IoVideocamSharp className="text-2xl text-red-600" />
                    <h3 className="ml-2 text-gray-700 ">Live Video</h3>
                </div>

                <button>
                    <div className="flex place-items-center p-2">
                        <MdOutlinePhotoLibrary className="text-2xl text-green-600" />
                        <h3 className="ml-2 text-gray-700">Photo/Video</h3>
                    </div>
                </button>

                <div className="flex place-items-center p-2">
                    <GoSmiley className="text-2xl text-yellow-500" />
                    <h3 className="ml-2 text-gray-700">Feeling/Activity</h3>
                </div>
            </div>

            <button className="bg-gray-300 w-full h-9 mt-4 rounded-md">Post</button>
        </div>
    )
}

export default WhatOnYouMind
