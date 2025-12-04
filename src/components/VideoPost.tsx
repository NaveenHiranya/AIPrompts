import { useRef, useState } from "react";
import { posts } from "../data/posts";

// Import videos
const videos = import.meta.glob("../assets/PostVideos/*.{mp4,webm}", {
  eager: true,
  import: "default",
});

// Import preview images
const images = import.meta.glob("../assets/PostVideos/*.{jpg,png}", {
  eager: true,
  import: "default",
});

interface CardProps {
  name: string;
  videoname: string;
  link: string;
}

export default function VideoPost({ name, videoname, link }: CardProps) {
  const postInfo = posts.find((p) => p.id === link);
  if (postInfo?.videoname) {
  }
  const videoSrc = videos[`../assets/PostVideos/${videoname}`] as string;
  const imageSrc = images[
    `../assets/PostVideos/${videoname.replace(/\.(mp4|webm)$/i, ".jpg")}`
  ] as string;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleClick = () => {
    window.location.href = `/post/${link}`;
  };

  return (
    <div className="py-4 px-2 bg-gray-800 mx-auto rounded-2xl w-max border flex flex-col items-center m-2 relative">
      
      <div className="w-[300px] rounded-t-2xl overflow-hidden">
        {!isPlaying ? (
          <img
            src={imageSrc}
            loading="lazy"
            className="w-[300px] h-max object-cover rounded-t-2xl"
          />
        ) : (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            autoPlay
            className="w-[300px] h-max object-cover rounded-t-2xl"
          />
        )}
      </div>

      {/* Title */}
      <h2 className="text-white font-medium text-3xl w-[300px] mt-[-18px] text-shadow-lg/30 ">
        {name}
      </h2>

  
      <div className="w-[300px] mt-2">
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-800 transition  cursor-pointer"
          >
            Play Video
          </button>
        )}
      </div>

    
      <div className="w-[300px] m-2">
        <p className="text-green-400">{postInfo?.description}</p>
      </div>

    
      <button
        className="bg-green-600 w-[300px] rounded-lg cursor-pointer text-white py-2 font-bold mt-1"
        onClick={handleClick}
      >
        Get Prompt
      </button>
    </div>

  );
}
