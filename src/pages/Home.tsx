import { useRef } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import "../App.css";

// Components
import Post from "../components/Post";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import WelcomeBnr from "../components/WelcomeBnr";

// Data
// Assuming posts is an array of objects.
// If your data file is .js, you might need to use // @ts-ignore or define a type file.
import { posts } from "../data/posts";

// Define the shape of your Post object for type safety
interface PostItem {
  id: string;
  name: string;
  imgname: string; // or string | undefined based on your data
  ratio: string;
  link?: string;
}

export default function App() {
  // 1. Explicitly type the ref as an HTMLDivElement (initially null)
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. Type the direction argument strictly
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll amount: 280px (approx card width + gap)
      const scrollAmount = direction === "left" ? -280 : 280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <WelcomeBnr />

      {/* --- Section: Latest Posts --- */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-8 mb-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Latest <span className="text-emerald-400">Posts</span>
          </h2>
        </div>
      </div>

      <Banner />

      {/* --- Section: Horizontal Image Scroll --- */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Featured <span className="text-emerald-400">Gallery</span>
            </h2>
          </div>
          
          {/* Scroll Hints */}
          <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider hidden sm:block">
            Swipe or use buttons
          </span>
        </div>

        {/* Scrollable Container Wrapper */}
        <div className="relative group">
          
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-slate-900/80 hover:bg-emerald-500 text-white border border-slate-700 hover:border-emerald-400 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 -ml-2 sm:-ml-4 active:scale-95"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-2 py-4"
          >
            {/* We cast `posts` to `PostItem[]` to ensure TS knows the shape.
              If `posts` is already typed in your data file, you can remove `as PostItem[]`.
            */}
            {(posts as PostItem[]).map((post) =>
              post.imgname && post.ratio === "small" ? (
                <div key={post.id} className="flex-none w-[200px] sm:w-[250px]">
                  <Post
                    name={post.name}
                    imgname={post.imgname}
                    link={post.id} // Ensure Post component accepts `link` prop with correct type
                  />
                </div>
              ) : null
            )}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-slate-900/80 hover:bg-emerald-500 text-white border border-slate-700 hover:border-emerald-400 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 -mr-2 sm:-mr-4 active:scale-95"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}