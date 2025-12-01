import { useRef, useState } from "react";

const videos = import.meta.glob("../assets/PostVideos/*.{mp4,webm}", {
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
  

  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="py-5 px-4 bg-gray-800 mx-auto rounded-2xl w-max border flex flex-col items-center m-2">
      <div className="w-[300px] rounded-t-2xl overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          loop
          className="w-[300px] h-max object-cover rounded-t-2xl"
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => videoRef.current?.pause()}
        />
      </div>

      <h2 className="text-white font-medium text-3xl w-[300px] mt-[-19px] text-shadow-lg/30">
        {name}
      </h2>

      <div className="w-full m-2">
        <p className="text-green-400">{description}</p>
      </div>

      <button
        className="bg-green-600 w-[300px] rounded-lg cursor-pointer text-white py-2 font-bold mt-3"
        onClick={handleClick}
      >
        Get Prompt
      </button>

      {showPopup && (
        <div className="absolute border z-10 border-amber-600 flex justify-center">
          <div className="absolute z-10 w-[calc(100vw-50px)] text-white bg-gray-900 rounded-xl text-center p-6 [@media(min-width:500px)]:w-[350px]">
            <p className="font-bold text-lg mb-4">{name}</p>
            <p className="border mb-4">{prompt}</p>

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
