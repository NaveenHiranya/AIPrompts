import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Copy, Check, Home, Clock, Sparkles, ArrowLeft, AlertCircle } from "lucide-react";

import { posts } from "../data/posts";
import AdUnit50 from "../components/AdUnit50";
import AdUnitG from "../components/AdUnitG";

// Logic to load images dynamically (Same as in your Post component)
const images = import.meta.glob("../assets/PostImages/*.jpg", {
  eager: true,
  import: "default",
});

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  // Load the specific image for this post
  const postImage = post?.imgname 
    ? (images[`../assets/PostImages/${post.imgname}`] as string) 
    : null;

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(5);

  /* -------------------------------
      COUNTDOWN TIMER
  --------------------------------*/
  useEffect(() => {
    if (counter === 0) {
      setLoading(false);
      return;
    }
    const t = setTimeout(() => setCounter((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [counter]);

  /* -------------------------------
      COPY + AD TRIGGER
  --------------------------------*/
  const copyPrompt = () => {
    if (post?.prompt) {
      navigator.clipboard.writeText(post.prompt);
      setCopied(true);

      // Ad Trigger
      setTimeout(() => {
        window.open(
          "https://www.effectivegatecpm.com/udbfkap8f5?key=e61ce9290b438cdada71fde0ac68130f",
          "_blank"
        );
      }, 200);

      setTimeout(() => setCopied(false), 4000);
    }
  };

  // --- ERROR STATE (Post not found) ---
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400 gap-4">
        <AlertCircle size={48} className="text-red-500" />
        <h1 className="text-2xl font-bold text-white">Post Not Found</h1>
        <Link to="/" className="px-6 py-2 bg-slate-800 rounded-lg hover:bg-emerald-600 hover:text-white transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* SEO: Dynamic Title */}
      <Helmet>
        <title>{post.name} | Vnix AI Prompts</title>
        <meta name="description" content={`Get the AI prompt for ${post.name}.`} />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
        
        {/* Top Ad Unit */}
        <div className="w-full flex justify-center bg-slate-900/50 py-2">
           <AdUnit50 />
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-medium group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Gallery</span>
          </Link>
        </div>

        {/* Main Content Card */}
        <main className="max-w-3xl mx-auto px-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Image Header */}
            {postImage && (
              <div className="w-full h-64 sm:h-80 md:h-96 relative bg-slate-950">
                <img 
                  src={postImage} 
                  alt={post.name} 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                   <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg leading-tight">
                    {post.name}
                  </h1>
                </div>
              </div>
            )}
            
            {!postImage && (
               <div className="p-8 border-b border-slate-800">
                  <h1 className="text-3xl font-bold text-white">{post.name}</h1>
               </div>
            )}

            {/* Prompt Section */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-sm">
                  <Sparkles size={16} />
                  <span>AI Prompt Source</span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyPrompt}
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                    copied
                      ? "bg-emerald-500 text-slate-900 scale-105"
                      : loading
                      ? "bg-slate-800 text-slate-500 cursor-wait"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/20 active:scale-95"
                  }`}
                >
                  {loading ? (
                    <>
                      <Clock size={18} className="animate-spin" />
                      <span>Unlock in {counter}s</span>
                    </>
                  ) : copied ? (
                    <>
                      <Check size={18} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              {/* The Prompt Box */}
              <div className="relative group">
                <div className={`
                  w-full bg-slate-950 border-2 rounded-2xl p-6 font-mono text-sm md:text-base leading-relaxed shadow-inner
                  ${loading ? "border-slate-800 text-slate-600 select-none blur-[2px]" : "border-emerald-500/30 text-slate-300 select-text"}
                  transition-all duration-500
                `}>
                  {loading 
                    ? "Generating prompt preview... Please wait while we retrieve the high-quality text data from our servers." 
                    : post.prompt
                  }
                </div>
                
                {/* Loading Overlay (if active) */}
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700 text-slate-300 font-mono text-xs animate-pulse">
                      Encrypting... {counter}
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-center text-xs text-slate-500 mt-4">
                Click "Copy" to support us and grab this prompt instantly.
              </p>

            </div>
          </div>

          {/* Bottom Ad Unit */}
          <div className="mt-8">
            <AdUnitG />
          </div>

          {/* Home Button (Bottom) */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all"
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}