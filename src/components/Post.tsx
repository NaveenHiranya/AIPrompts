// import { useState } from "react";
import { posts } from "../data/posts";
const images = import.meta.glob("../assets/PostImages/*.jpg", {
  eager: true,
  import: "default",
});

interface CardProps {
  name: string;
  imgname: string;
  link: string;
  // pass your ad URL here
}

export default function Post({ imgname, name, link }: CardProps) {
  const postInfo = posts.find((p) => p.id === link);

  const imgSrc = images[`../assets/PostImages/${imgname}`] as string;


  const handleClick = () => {
    window.location.href = `/post/${link}`;
  };

  return (
    <div className="py-5 px-4 bg-gray-800 mx-auto rounded-2xl w-max flex flex-col  items-center m-2">
      <div className="w-[300px] rounded-t-2xl overflow-hidden">
        <img
          className="w-[300px] h-max object-cover rounded-t-2xl"
          src={imgSrc}
          alt="postImage"
          loading="lazy"
        />
      </div>

      <h2 className="text-white font-medium text-3xl w-[300px] mt-[-19px] text-shadow-lg/30">
        {name}
      </h2>
      <div className="w-full m-2">
        <p className="text-green-400">{postInfo?.description}</p>
      </div>
      <button
        className="bg-green-600 w-[300px] rounded-lg cursor-pointer text-white py-2 font-bold mt-3"
        onClick={handleClick}
      >
        Get Prompt
      </button>

      
    </div>
  );
}
