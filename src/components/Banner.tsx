import { Helmet } from "react-helmet-async";
import { Rocket, ArrowRight, Zap } from "lucide-react";

export default function Banner() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Productivity AI Prompts | Vnix AI Prompts</title>
        <meta
          name="description"
          content="Discover powerful productivity prompts you can use in any AI tool. Boost efficiency, focus, and task completion with Vnix AI Prompts."
        />
        <link
          rel="canonical"
          href="https://ai-prompts-coral.vercel.app/productivity-prompt"
        />
      </Helmet>

      {/* UI Container */}
      <div className="w-full max-w-7xl mx-auto px-4 my-8">
        
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 shadow-2xl">
          
          {/* Decorative Background Elements (The Glows) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
            
            {/* Left Side: Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mx-auto md:mx-0">
                <Zap className="w-3 h-3 fill-emerald-400" />
                <span>Efficiency Booster</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Supercharge Your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Workflow with AI
                </span>
              </h2>

              <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
                Stop wasting time on repetitive tasks. Unlock a curated library of 
                prompts designed to double your output and streamline your daily grind.
              </p>

              {/* Action Button */}
              <a
                href="/productivity-prompt"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20 group mx-auto md:mx-0 w-max"
              >
                <span>View Productivity Prompts</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Side: Visual/Icon */}
            <div className="relative w-full md:w-1/3 flex justify-center md:justify-end items-center">
              {/* Large Decorative Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 blur-[60px] opacity-20 animate-pulse"></div>
                <Rocket 
                  strokeWidth={1.5}
                  className="w-40 h-40 md:w-56 md:h-56 text-slate-800 fill-emerald-500/10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] transform -rotate-12 transition-transform hover:rotate-0 duration-500" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}