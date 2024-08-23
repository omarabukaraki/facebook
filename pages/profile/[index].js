import { useRouter } from 'next/router'
import Post from '@/components/Post';
import HeaderProfile from '@/components/HeaderProfile';
import PersonalInformation from '@/components/PersonalInformation';
import Navbar from "@/components/Navbar";
import { usersData as usersDataStatic } from '../api/users';



const Profile = ({ usersDataStatic }) => {

  const route = useRouter();
  let index = route?.query?.index;
  const userData = usersDataStatic[index - 1];
  

  return (
    <>
      <Navbar isSubNav={true} />
      <div className='flex flex-col place-items-center '>
        <HeaderProfile isOwnerProfile={false} userData={userData} />
        <div className='mt-10 flex justify-between w-7/12'>
          <PersonalInformation isOwnerProfile={false} />
          <div className='w-[55%] flex flex-col'>
            {userData?.posts?.map((post, index) => {
              return <Post key={index} width={'w-full'} image={post.image} uId={userData.id} uImage={userData.image} uName={userData.name} caption={post.caption} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

export async function getStaticProps(context) {
  // const res = await fetch('http://localhost:3001/api/user');
  // const users = await res.json();
  return {
    props: {
      usersDataStatic
    }
  }
}

export async function getStaticPaths() {
  // const res = await fetch('http://localhost:3001/api/user');
  // const users = await res.json();
  
  const allUsersPaths = usersDataStatic.map(user => ({
    params: { index: user.id.toString(), value: user }
  }));

  return {
    paths: allUsersPaths,
    fallback: false
  };
}


