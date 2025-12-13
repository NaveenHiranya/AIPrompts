import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";

// KEEP YOUR EXISTING IMAGE IMPORTS HERE
import image1 from "../assets/WebImages/1.webp";
import image2 from "../assets/WebImages/2.webp";
import image3 from "../assets/WebImages/3.webp";
import image4 from "../assets/WebImages/4.webp";

// Data structure defining the images, their prompts, and where links go.
// Update the 'prompt' and 'link' fields with your real data.
const featuredPromptsData = [
  {
    id: 1,
    src: image1,
    // A long prompt example to demonstrate the "..." overflow truncation
    prompt: "generate image as Anime style illustration and ratio 1:1, highly detailed in the style of the movie 'Your Name'. A slim girl with very long, straight black hair reaching down to her knees. She is wearing a modern hoodie and leggings. She stands on an asphalt mountain road behind a complete horizontal silver iron barrier fence. Her hand rests on the fence as she looks out toward the calm sea in the distance. The background features lush grassy mountains and a blue ocean without large waves. The camera angle is low, looking slightly up from the precipice side, zoomed in to focus on the girl and her long hair.",
    // Where clicking this image should take the user
    link: `post/Anime-style-illustration`, 
  },
  {
    id: 2,
    src: image2,
    prompt: "A glowing neon fish swimming in dark water, bioluminescent scales in cyan and magenta, macro photography, high contrast, cinematic lighting.",
    link: `post/Neon-Fish`,
  },
  {
    id: 3,
    src: image3,
    prompt: "A detailed photograph of a customized cyberpunk sportbike parked on a rain-slicked street at night. The motorcycle features weathered, grimy metal fairings accented by glowing violet and blue neon light strips along the frame and wheel rims. Futuristic digital dashboard screens are visible on the handlebars. The background is a dense, fog-laden futuristic Asian metropolis filled with towering skyscrapers, glowing neon advertisements with Japanese characters, and reflections on the wet asphalt. Cinematic lighting.",
    link: `post/photograph-of-a-customized-cyberpunk`,
  },
  {
    id: 4,
    src: image4,
    prompt: "A cinematic nature photograph of a serene autumn forest. A whitetail deer drinks gracefully from a rocky, bubbling stream alongside a winding dirt path. Sunlight filters through a dense canopy of vibrant red, orange, and gold trees, casting dappled light on moss-covered boulders and fallen leaves that blanket the forest floor. Highly detailed, natural colors, photorealistic film grain.",
    link: `post/A-cinematic-nature-photograph`,
  },
];


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
        <link rel="canonical" href="https://ai-prompts-coral.vercel.app/" />
      </Helmet>

      {/* UI Container */}
      <div className="p-4 md:p-6 w-full max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-800 p-[2px] shadow-2xl shadow-emerald-900/20">
          
          {/* Main Card Content */}
          <div className="relative overflow-hidden rounded-[2.4rem] bg-slate-950 px-6 py-10 md:px-12 md:py-14">
            
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
              
              {/* --- LEFT CONTENT --- */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>AI Prompt Library</span>
                </div>

                {/* Headings */}
                <div className="space-y-2">
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white leading-[0.9]">
                    Vnix
                  </h2>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
                    AI Prompts
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                  Unlock your creative potential with a curated collection of
                  high-fidelity AI prompts. Click any example to view its prompt details in the library.
                </p>

                {/* CTA Button */}
{/*                 
                <button className="group mt-4 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
                  <span>Explore Full Library</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button> */}
              </div>

              {/* --- RIGHT CONTENT (Interactive Image Grid) --- */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {/* We map over the new data array instead of just images */}
                  {featuredPromptsData.map((item, i) => (
                    <a
                      href={item.link} // Makes the whole tile clickable
                      key={item.id}
                      className={`
                        relative group overflow-hidden bg-slate-900 border border-slate-800/50 shadow-lg block cursor-pointer
                        aspect-square transition-all duration-500 hover:border-emerald-500/50 hover:shadow-emerald-900/30
                        /* Keeping your original rounded corner logic */
                        ${i === 0 ? "rounded-tl-[2rem] rounded-br-xl" : ""}
                        ${i === 1 ? "rounded-tr-[2rem] rounded-bl-xl" : ""}
                        ${i === 2 ? "rounded-bl-[2rem] rounded-tr-xl" : ""}
                        ${i === 3 ? "rounded-br-[2rem] rounded-tl-xl" : ""}
                      `}
                    >
                      {/* The Image */}
                      <img
                        src={item.src}
                        alt="AI Prompt Result"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />

                      {/* The Dark Overlay & Prompt Text Area */}
                      {/* This is hidden by default (opacity-0) and appears on hover (group-hover:opacity-100) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                        
                        {/* Little icon showing it's a link */}
                        <div className="absolute top-3 right-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 translate-y-2 group-hover:translate-y-0">
                            <ExternalLink className="w-5 h-5" />
                        </div>

                        {/* The Prompt Text with truncation */}
                        {/* line-clamp-2 handles the "..." overflow automatically */}
                        <p className="text-sm text-slate-200 font-medium line-clamp-2 overflow-hidden text-ellipsis leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <span className="text-emerald-400 font-bold mr-1">Prompt:</span> {item.prompt}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}