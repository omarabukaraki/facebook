import { useRouter } from 'next/router'
import coverImage from '@/public/elon_musk.jpg'

import Post from '@/components/Post';
import WhatOnYouMind from '@/components/WhatOnYouMind';

import { useSession } from "next-auth/react";
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
          {userData?.posts?.map(post => {
            return <Post width={'w-full'} image={post.image} uImage={userData.image} uName={userData.name} caption={post.caption} />
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
  // const section = useSession();
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

// export async function getStaticPaths(){
//   const res = await fetch('http://localhost:3000/api/user');
//   const users = await res.json();

//   const allUsersPaths = users.map(user=>{
//     console.log(user.id,'-----------------------------')
//    return {
//     params:{
//       details: user.id
//       // user.id
//     }}
//    })
   

//   console.log('from consol ' +allUsersPaths)

//   return {
//     paths:
//     allUsersPaths,
//     fallback: false
//   }
  
// }

// {
//   details: user.id.toString()
//   // user.id
// }


// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/user');
//   const users = await res.json();

//   const paths = users.map(user => ({
//     params: { id: user.id.toString() } 
//   }));

//   return { paths, fallback: true };
// }



// export async function getStaticProps({ params }) {
//   const { id } = params;

//   const res = await fetch(`http://localhost:3000/api/user`);
//   const user = await res.json();
//   return {
//     props: {
//       user:user[id]
//     },
//     revalidate: 10 
//   };
// }

