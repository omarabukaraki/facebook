import { IoLocationSharp } from "react-icons/io5";
import { FaClock, FaHeart } from "react-icons/fa";

const PersonalInformation = ({ isOwnerProfile }) => {
    return (
        <div className={`flex flex-col place-content-between w-[43%] bg-white ${isOwnerProfile === true ? 'h-96' :' h-56'} rounded-xl border-[0.01rem] border-gray-300 p-4`}>
            <h3 className='font-bold text-xl'>Intro</h3>
            {isOwnerProfile === true ? <button className='flex justify-center place-items-center bg-gray-300 h-10 px-3 rounded-md  w-full text-base'>Add bio</button> : ''}
            <div className='flex place-items-center'><IoLocationSharp className='text-2xl text-gray-500 mr-2' /> <h3 className='text-base'>Form <span className='font-bold'>Amman, Jordan</span></h3></div>
            <div className='flex place-items-center'><FaHeart className='text-xl text-gray-500 mr-3' /> <h3 className='text-base'>  Married</h3></div>
            <div className='flex place-items-center'><FaClock className='text-xl text-gray-500 mr-3' /> <h3 className='text-base'>Joined February 2018</h3></div>
            {isOwnerProfile === true ? <>
                <button className='flex justify-center place-items-center bg-gray-300 h-10 px-3 rounded-md  w-full text-base'>Edit details</button>
                <button className='flex justify-center place-items-center bg-gray-300 h-10 px-3 rounded-md  w-full text-base'>Add featured</button>
            </> : ''}
        </div>
    )
}

export default PersonalInformation
