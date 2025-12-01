import { useRef, useState } from "react";

// Import all videos (mp4/webm)
const videos = import.meta.glob("../assets/PostVideos/*.{mp4,webm}", {
  eager: true,
  import: "default",
});

// Import all preview images (jpg/png)
const images = import.meta.glob("../assets/PostVideos/*.{jpg,png}", {
  eager: true,
  import: "default",
});

interface CardProps {
  name: string;
  videoname: string;
  prompt: string;
  description: string;
}

export default function VideoPost({
  name,
  videoname,
  prompt,
  description,
}: CardProps) {
  const videoSrc = videos[`../assets/PostVideos/${videoname}`] as string;

  // Convert example: "video1.mp4" → "video1.jpg"
  const imageSrc = images[
    `../assets/PostVideos/${videoname.replace(/\.(mp4|webm)$/i, ".jpg")}`
  ] as string;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [hovered, setHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount <= 2) {
      window.open(
        "https://www.effectivegatecpm.com/udbfkap8f5?key=e61ce9290b438cdada71fde0ac68130f",
        "_blank"
      );
    } else if (newCount === 3) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setClickCount(0);
  };

  return (
    <div className="py-5 px-4 bg-gray-800 mx-auto rounded-2xl w-max border flex flex-col items-center m-2 relative">

      {/* Thumbnail / Video */}
      <div
        className="w-[300px] rounded-t-2xl overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!hovered ? (
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
            autoPlay
            playsInline
            preload="auto"
            className="w-[300px] h-max object-cover rounded-t-2xl"
          />
        )}
      </div>

      {/* Title */}
      <h2 className="text-white font-medium text-3xl w-[300px] mt-[-19px] text-shadow-lg/30">
        {name}
      </h2>

      {/* Description */}
      <div className="w-full m-2">
        <p className="text-green-400">{description}</p>
      </div>

      {/* Button */}
      <button
        className="bg-green-600 w-[300px] rounded-lg cursor-pointer text-white py-2 font-bold mt-3"
        onClick={handleClick}
      >
        Get Prompt
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <div className="w-[calc(100vw-50px)] text-white bg-gray-900 rounded-xl text-center p-6 border border-amber-600 [@media(min-width:500px)]:w-[350px]">
            <p className="font-bold text-lg mb-4">{name}</p>
            <p className="border mb-4 p-2">{prompt}</p>

            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(prompt);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg font-bold"
              >
                {copied ? "copied" : "copy"}
              </button>

              <button
                onClick={closePopup}
                className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
