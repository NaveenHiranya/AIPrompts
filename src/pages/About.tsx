import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ArrowLeft, MapPin, GraduationCap, Code2, Github, Linkedin, Mail } from "lucide-react";
import NaveenHiranya from "../assets/WebImages/NaveenHiranya.png";

// Define props type for the helper component
interface SocialButtonProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

export default function AboutMe() {
  // Define your site domain for absolute URLs (Required for SEO images)
  const siteUrl = "https://ai-prompts-coral.vercel.app";
  const absoluteImageUrl = `${siteUrl}${NaveenHiranya}`;

  return (
    <HelmetProvider>
      {/* SEO Configuration */}
      <Helmet>
        {/* Standard Metadata */}
        <title>Naveen Hiranya</title>
        <meta
          name="description"
          content="Portfolio of Naveen Hiranya, a Management & IT undergraduate at the University of Kelaniya"
        />
        <link rel="canonical" href={`${siteUrl}/about`} />

        {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Naveen Hiranya" />
        <meta property="og:description" content="Discover Naveen Hiranya's portfolio. Specializing in React, Node.js, and AI Prompt Engineering." />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:url" content={`${siteUrl}/about`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Naveen Hiranya" />
        <meta name="twitter:description" content="Management & IT Undergraduate" />
        <meta name="twitter:image" content={absoluteImageUrl} />
      </Helmet>

      {/* Page Container */}
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
        
        {/* Navigation */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-medium group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-6 pb-20">
          
          {/* Hero / Profile Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            
            {/* Subtle Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
              
              {/* --- PROFILE IMAGE SECTION --- */}
              <div className="flex-shrink-0 text-center">
                <img
                  src={NaveenHiranya}
                  alt="Naveen Hiranya"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-2 ring-emerald-500/30 shadow-md bg-slate-800"
                />
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-6">
                  <SocialButton icon={Github} href="https://github.com/NaveenHiranya" label="GitHub" />
                  <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/naveen-hiranya-45054a3a0/" label="LinkedIn" />
                  <SocialButton icon={Mail} href="/contact" label="Email" />
                </div>
              </div>

              {/* Text Content Column */}
              <div className="flex-1 text-center md:text-left space-y-6">
                
                {/* Name & Title */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                    Naveen Hiranya
                  </h1>
                  <p className="text-xl text-emerald-400 font-medium flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <Code2 size={20} />
                    <span>Full-Stack Developer</span>
                    <span className="text-slate-600">•</span>
                    <span>AI Enthusiast</span>
                  </p>
                </div>

                {/* Info Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
                    <GraduationCap size={16} className="text-emerald-500" />
                    <span>University of Kelaniya</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
                    <MapPin size={16} className="text-emerald-500" />
                    <span>Sri Lanka</span>
                  </div>
                </div>

                {/* Bio Text */}
                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                  <p>
                    I am an undergraduate reading for a BSc (Hons) in 
                    <strong className="text-white"> Management & Information Technology</strong>. 
                    I bridge the gap between business logic and technical implementation.
                  </p>
                  <p>
                    Currently, I focus on <strong className="text-white">Full-Stack Web Development</strong> and 
                    exploring the potential of <strong className="text-white">AI Prompt Engineering</strong>. 
                    My goal is to build intelligent, API-integrated applications that enhance productivity 
                    and unlock new creative possibilities for users.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Technologies & Interests
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Node.js", "AI APIs", "Prompt Engineering"].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </HelmetProvider>
  );
}

// Helper Component for Social Buttons
function SocialButton({ icon: Icon, href, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 bg-slate-800 text-slate-400 hover:bg-emerald-500 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1 border border-slate-700 hover:border-emerald-500"
    >
      <Icon size={20} />
    </a>
  );
}