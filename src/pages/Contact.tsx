import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Mail, Clock } from "lucide-react";

export default function Contact() {
  // Your specific WhatsApp number
  const whatsappNumber = "94756067029";
  // A pre-filled message makes it easier for users to start chatting
  const preFilledMessage = encodeURIComponent("Hi Vnix, I have a question about the AI Prompts.");
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${preFilledMessage}`;

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Vnix AI Prompts</title>
        <meta
          name="description"
          content="Get in touch with the Vnix AI Prompts team. We are available on WhatsApp to answer your questions and help you with prompt engineering."
        />
        <link rel="canonical" href="https://ai-prompts-coral.vercel.app/contact" />
      </Helmet>

      {/* Page Container */}
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
        
        {/* Navigation Bar (Simple Back Button) */}
        <div className="max-w-7xl mx-auto w-full px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-medium group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
          
          <div className="w-full max-w-2xl text-center space-y-8">
            
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Conversation</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
                Have a question about a prompt? Need a custom solution? 
                We are here to help you streamline your workflow.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-black/50 overflow-hidden relative group">
              
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <div className="grid gap-6">
                
                {/* WhatsApp Action Card */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-slate-900 p-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-emerald-900/20 group/btn"
                >
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MessageCircle size={32} className="text-white fill-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-white">Chat on WhatsApp</h3>
                    <p className="text-emerald-100 text-sm font-medium opacity-90">
                      Replies within 1 day
                    </p>
                  </div>
                </a>

                {/* Email / Alternative (Visual Only for now) */}
                <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-5 rounded-2xl opacity-75">
                  <div className="bg-slate-800 p-3 rounded-xl">
                    <Mail size={24} className="text-slate-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-300">Email Support</h3>
                    <p className="text-slate-500 text-sm">Coming soon</p>
                  </div>
                </div>

              </div>
              
              {/* Footer text inside card */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                <Clock size={16} />
                <span>We'll get back to you as soon as possible</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}