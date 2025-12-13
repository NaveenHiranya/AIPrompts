import { posts } from "../data/posts";
import { ArrowRight } from "lucide-react"; // Optional: adds a nice icon

// Load images
const images = import.meta.glob("../assets/PostImages/*.jpg", {
  eager: true,
  import: "default",
});

interface CardProps {
  name: string;
  imgname: string;
  link: string | number; // Updated to match App.tsx likely types
}

export default function Post({ imgname, name, link }: CardProps) {
  // Find the specific post data
  const postInfo = posts.find((p) => p.id === link);

  // Safely get the image source
  const imgSrc = (images[`../assets/PostImages/${imgname}`] as string) || "";

  const handleClick = () => {
    window.location.href = `/post/${link}`;
  };

  return (
    // 1. Removed w-max and fixed widths. Used w-full to fill the parent container.
    // 2. Updated colors to match the "Slate/Emerald" theme of your App.
    <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-lg transition-transform duration-300 hover:border-emerald-500/50 hover:shadow-emerald-900/20 group">
      
      {/* Image Container */}
      <div className="w-full aspect-square overflow-hidden bg-slate-950 relative">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={imgSrc}
          alt={name}
          loading="lazy"
        />
        {/* Optional: Dark gradient overlay at the bottom of image so text pops if you overlap */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Title - Removed negative margin for cleaner layout, added styling */}
          <h2 className="text-white font-bold text-xl leading-tight mb-2 line-clamp-1">
            {name}
          </h2>
          
          {/* Description */}
          <p className="text-slate-400 text-sm line-clamp-2 mb-4">
            {postInfo?.description || "No description available."}
          </p>
        </div>

        {/* Button - Now w-full to match container */}
        <button
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-4 rounded-xl font-bold transition-all active:scale-95 text-sm"
          onClick={handleClick}
        >
          <span>Get Prompt</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}