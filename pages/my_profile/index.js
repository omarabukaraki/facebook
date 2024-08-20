import HeaderProfile from "@/components/HeaderProfile"
import Navbar from "@/components/Navbar";
import PersonalInformation from "@/components/PersonalInformation";
import Post from "@/components/Post";
import WhatOnYouMind from "@/components/WhatOnYouMind";
import { useSession } from "next-auth/react"

const MyProfile = () => {
  const { data: session } = useSession()
  const userData = JSON.parse(session?.user?.name !== undefined ? session?.user?.name : '{}');
  console.log(userData)
  return (
  <>
  <Navbar isSubNav={true}/>
  <div className='flex flex-col place-items-center '>
      <HeaderProfile isOwnerProfile={true} userData={userData} />
      <div className='mt-10 flex justify-between w-7/12'>
        <PersonalInformation isOwnerProfile={true} />
        <div className='w-[55%] flex flex-col'>
          <WhatOnYouMind uImage={userData.image} width={'w-full'} />
          {userData?.posts?.map(post => {
            return <Post width={'w-full'} image={post.image} uImage={userData.image} uName={userData.name} caption={post.caption} />
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default MyProfile
