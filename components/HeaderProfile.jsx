import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import friendImage from '@/public/frinddd.png'

const HeaderProfile = ({ isOwnerProfile, userData }) => {
    return (
        <div className='flex justify-center border-b-2 border-gray-200 w-full bg-gradient-to-b  from-[#768692]  via-white to-white pb-56' >
            <img src={userData.coverImage} className='w-7/12 h-96 rounded-b-lg relative mb-32' />
            <div className=' absolute top-72 justify-end px-6 w-7/12'>
                <div className='flex justify-between '>
                    <div className='flex justify-between'>
                        <img src={userData.image} className='w-44 h-44 rounded-full border-4 border-white object-cover' />
                        <h1 className='flex items-end text-2xl font-bold pb-4 pl-5'>{userData.name}</h1>
                    </div>

                    <div className="flex flex-col justify-between place-items-end w-5/12">
                        { isOwnerProfile !== false ? <button className='flex justify-center place-items-center bg-gray-300 h-10 px-3 rounded-md mt-8'><IoCamera className='mr-2 text-xl' /> <span className='font-bold'>Edit cover photo</span></button> : <span></span>}
                        {
                            isOwnerProfile !== true ? <div className=' flex justify-evenly place-items-end pb-4 w-full'>
                                <button className='flex justify-center place-items-center bg-blue-600 h-10 px-3 rounded-md text-w text-white w-[40%]'><IoPersonAdd className='mr-2 text-lg' /> <span className='font-bold'>Add Friend</span></button>
                                <button className='flex justify-center place-items-center bg-gray-300 h-10 px-3 rounded-md  w-[40%]'><MdEdit className='mr-2  text-lg' /> <span className='font-bold'>Message</span></button>
                                <button className='flex place-items-center bg-gray-300 h-10 px-4 rounded-md  '><IoIosArrowUp className='text-base' /></button>
                            </div> :
                                <div className=' flex justify-evenly place-items-end pb-4 w-full'>
                                    <button className='flex justify-center place-items-center bg-blue-600 h-10 px-3 rounded-md text-w text-white w-[40%]'><FaPlus className='mr-2' /> <span className='font-bold'>Add to story</span></button>
                                    <button className='flex justify-center place-items-center bg-gray-300 h-10 px-3 rounded-md  w-[40%]'><MdEdit className='mr-2' /> <span className='font-bold'>Edit profile</span></button>
                                    <button className='flex place-items-center bg-gray-300 h-10 px-4 rounded-md  '><IoIosArrowUp className='text-base' /></button>
                                </div>
                        }

                    </div>

                </div>
                <div className='flex flex-col place-items-center justify-center w-full h-56 mt-4 border-[0.01rem] border-gray-300 rounded-lg'>
                    <img className='w-28 h-28' src={friendImage.src} />
                    <h3 className='font-bold text-gray-600 text-xl'>Add more friends to get recommendations</h3>
                    <p className='text-gray-600 text-base'>When you add some more friends you’ll see a list of people you may know here.</p>
                </div>

                <div className="h-[0.01rem]  bg-gray-300 my-4"></div>

            </div>
        </div>
    )
}

export default HeaderProfile
