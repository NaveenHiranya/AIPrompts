import { useState } from "react";

const images = import.meta.glob("../assets/PostImages/*.jpg", {
  eager: true,
  import: "default",
});

interface CardProps {
  name: string;
  imgname: string;
  prompt: string;
  description: string;
  // pass your ad URL here
}

export default function Post({ imgname, name, prompt,description }: CardProps) {
  const imgSrc = images[`../assets/PostImages/${imgname}`] as string;

  const [clickCount, setClickCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount <= 2) {
      // Open ad in new tab/window
      window.open(
        "https://www.effectivegatecpm.com/udbfkap8f5?key=e61ce9290b438cdada71fde0ac68130f",
        "_blank"
      );
    } else if (newCount === 3) {
      // Show popup div
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setClickCount(0); // Reset click count when popup closes
  };

  return (
    <div className="py-5 px-4 bg-gray-800 mx-auto rounded-2xl w-max border flex flex-col  items-center m-2">
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
      <p className="text-green-400">{description}</p>
      </div>
      <button
        className="bg-green-600 w-[300px] rounded-lg cursor-pointer text-white py-2 font-bold mt-3"
        onClick={handleClick}
      >
        Get Prompt
      </button>

      {/* Popup div */}
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
                {copied ? "copid" : "copy"}
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
