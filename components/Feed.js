
import React, { useEffect, useState } from "react";
import Story from "@/components/Story";
import WhatOnYouMind from "./WhatOnYouMind";
import Post from "./Post";
// import WhatsOnYourMind from "./WhatsOnYourMind";
// import Post from "./Post";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { db } from "../firebase";

const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() =>
//     onSnapshot(
//       query(collection(db, "posts"), orderBy("timestamp", "desc")),
//       (snapshot) => {
//         setPosts(snapshot.docs);
//       }
//     )
//   );

const arr = [{},{},{},{},{},{},]

  return (
    <div className="flex flex-col items-center mx-auto mt-14 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatOnYouMind/>
      {arr.map(p=>{
        return <Post/>
      })}
      
      {/* <WhatsOnYourMind />
      {posts.map((post) => {
        return <Post key={post.id} id={post.id} data={post.data()} />;
      })} */}
    </div>
  );
};

export default Feed;