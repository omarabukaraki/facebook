import { useRouter } from 'next/router'
import Post from '@/components/Post';
import HeaderProfile from '@/components/HeaderProfile';
import PersonalInformation from '@/components/PersonalInformation';


const profile = ({users}) => {

  const route = useRouter();
  const userData = users[route.query.index -1];

  return (
    <div className='flex flex-col place-items-center '>
     <HeaderProfile isOwnerProfile={false} userData={userData}/>
      <div className='mt-10 flex justify-between w-7/12'>
         <PersonalInformation isOwnerProfile={false}/>
        <div className='w-[55%] flex flex-col'>
          {userData?.posts?.map((post,index) => {
            return <Post key={index} width={'w-full'} image={post.image} uId={userData.id} uImage={userData.image} uName={userData.name} caption={post.caption} />
          })}
        </div>
      </div>
    </div>
  )
}

export default profile

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/user');
  const users = await res.json();
 return {
     props: {
      users
     }
 }
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/user');
  const users = await res.json();

  const allUsersPaths = users.map(user => ({
    params: { index: user.id.toString() ,value: user }
  }));

  return {
    paths: allUsersPaths,
    fallback: false
  };
}
