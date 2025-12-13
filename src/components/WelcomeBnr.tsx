import { Helmet } from "react-helmet-async";

import image1 from "../assets/WebImages/1.png";
import image2 from "../assets/WebImages/2.png";
import image3 from "../assets/WebImages/3.png";
import image4 from "../assets/WebImages/4.png";

export default function WelcomeBnr() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Vnix AI Prompts | High-Quality AI Prompt Library</title>
        <meta
          name="description"
          content="Vnix AI Prompts provides high-quality AI prompts to expand creativity, productivity, and intelligent workflows. Built by a full-stack developer passionate about AI."
        />
        <meta
          name="keywords"
          content="AI prompts, prompt engineering, ChatGPT prompts, AI tools, Vnix AI, prompt library"
        />
        <link rel="canonical" href="https://your-domain.vercel.app/" />
      </Helmet>

      {/* UI */}
      <div className="m-4 rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 p-1">
        <div className="rounded-3xl bg-slate-950 p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT */}
            <div className="w-full lg:w-1/2 h-[25vh] md:h-[50vh] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-[18vw] lg:text-[13vw] font-extrabold text-emerald-400 leading-[0.85]">
                  Vnix
                </h2>
                <h3 className="text-[6vw] lg:text-[4vw] font-bold text-white -mt-2">
                  AI Prompts
                </h3>
              </div>

              <div className="flex items-end">
                <p className="text-[2.5vw] sm:text-[2.2vw] lg:text-[1.5vw] text-gray-300 max-w-xl font-bold">
                  Expand your creativity with high-quality AI prompts crafted to
                  enhance productivity, innovation, and intelligent workflows.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[image1, image2, image3, image4].map((img, i) => (
                <div
                  key={i}
                  className={`p-[5px] bg-gradient-to-br from-emerald-500 to-emerald-700 ${
                    i === 0
                      ? "rounded-tl-3xl"
                      : i === 1
                      ? "rounded-tr-3xl"
                      : i === 2
                      ? "rounded-bl-3xl"
                      : "rounded-br-3xl"
                  }`}
                >
                  <div className="aspect-square overflow-hidden rounded-3xl bg-slate-900">
                    <img
                      src={img}
                      alt="Vnix AI Prompt preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
