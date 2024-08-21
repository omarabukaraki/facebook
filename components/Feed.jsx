
import React, { useContext, useEffect, useState } from "react";
import Story from "@/components/Story";
import Post from "./Post";
import WhatOnYouMind from "./WhatOnYouMind";




const Feed = ({data}) => {
  
  return (
    <div className=" flex flex-col items-center mx-auto mt-14 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatOnYouMind  width={'w-8/12'} />
      {data && data.length !== 0 ? data.map((user) => {
        return user.posts.map((post, index) => {
          return <Post width={'w-8/12'} key={index} uId={user.id} image={post.image} caption={post.caption} uImage={user.image} uName={user.name} />
        })
      }) : null
      }
    </div>
  );
};

export default Feed;








