
import React, { useEffect, useState } from "react";
import Story from "@/components/Story";
import WhatOnYouMind from "./WhatOnYouMind";
import Post from "./Post";




const Feed = () => {
  const [users, setUsers] = useState([]);
  const [test, setTest] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/user')
      .then(resp => resp.json())
      .then(result => {
        setUsers(result)
      })
  }, []
  );

  useEffect(() => {
    let dd = localStorage.getItem('userPosts');
    setTest(JSON.parse(dd))
  }, [])


  return (
    <div className="flex flex-col items-center mx-auto mt-14 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatOnYouMind width={'w-8/12'} />
      {/* {<Post image={dataPost?.image || ''} caption={dataPost?.caption || 'omar'} uImage={dataPost?.image || ''} uName={dataPost?.name || ''} />} */}
      {users && users.length !== 0 ? users.map((user) => {
        return user.posts.map((post, index) => {
          return <Post width={'w-8/12'} key={index} uId={user.id} image={post.image} caption={post.caption} uImage={user.image} uName={user.name} />
        })
      }) : null
      }
    </div>
  );
};

export default Feed;








