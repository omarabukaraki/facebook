import { IoVideocamSharp } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";


const WhatOnYouMind = ({ width }) => {

    const { data: session } = useSession()
    const fPicker = useRef(null);
    const caption = useRef(null);
    const btn = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const addImageToPost = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedFile(imageUrl);
        }
    };

    useEffect(() => {
        return () => {
            if (selectedFile) {
                URL.revokeObjectURL(selectedFile);
            }
        };
    }, [selectedFile]);

    const handleButton = () => {
        if (caption.current.value !== '' || selectedFile !== null) {
            btn.current.className = "bg-blue-600 w-full h-9 mt-4 rounded-md text-white";
        } else {
            btn.current.className = "bg-gray-300 w-full h-9 mt-4 rounded-md";
        }
    }


    const userImage = session?.user?.name !== undefined ? JSON.parse(session?.user?.name).image : '';

    return (
        <div className={`bg-white rounded-2xl p-6 mb-4 ${width} border-[0.01rem] border-gray-300`}>
            <div className="flex">
                <img className="w-11 h-11 rounded-full object-cover" src={userImage} />
                <input onChange={handleButton} ref={caption} className="w-full pl-4 text-base placeholder:text-gray-500" placeholder="What's on your mind?" />
            </div>

            <div className="w-full h-[0.1rem] bg-gray-300 my-3"></div>
            <div className="flex justify-between">

                <div className="flex place-items-center p-2">
                    <IoVideocamSharp className="text-2xl text-red-600" />
                    <h3 className="ml-2 text-gray-700 ">Live Video</h3>
                </div>

                <label htmlFor="filePicker">
                    <div className="flex items-center gap-2 p-2 cursor-pointer">
                        <MdOutlinePhotoLibrary className="text-green-600 text-2xl" />
                        <p className="text-gray-500 font-medium">Photo/video</p>
                    </div>
                    <input
                        type="file"
                        name="filePicker"
                        id="filePicker"
                        accept="image/*"
                        onChange={addImageToPost}
                        ref={fPicker}
                        hidden
                    />
                </label>

                <div className="flex place-items-center p-2">
                    <GoSmiley className="text-2xl text-yellow-500" />
                    <h3 className="ml-2 text-gray-700">Feeling/Activity</h3>
                </div>


            </div >

            <button ref={btn} onClick={()=>{
                caption.current.value = '';
                handleButton()
            }} className="bg-gray-300 w-full h-9 mt-4 rounded-md">Post</button>

        </div>

    )
}

export default WhatOnYouMind



