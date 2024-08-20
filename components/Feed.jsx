
import React, { useEffect, useState } from "react";
import Story from "@/components/Story";
import WhatOnYouMind from "./WhatOnYouMind";
import Post from "./Post";
import { useSession } from "next-auth/react";




const Feed = ({ data }) => {
  const { data: session } = useSession();
  const userData = JSON.parse(session?.user?.name);
  const finalData = data.concat(userData);

  return (
    <div className="flex flex-col items-center mx-auto mt-14 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatOnYouMind width={'w-8/12'} />
      {finalData && finalData.length !== 0 ? finalData.map((user) => {
        return user.posts.map((post, index) => {
          return <Post width={'w-8/12'} key={index} uId={user.id} image={post.image} caption={post.caption} uImage={user.image} uName={user.name} />
        })
      }) : null
      }
    </div>
  );
};

export default Feed;







