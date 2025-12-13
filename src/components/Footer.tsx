import { Facebook, MessageCircle, Heart, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* --- Social Links Section --- */}
        <nav aria-label="Social Media Links" className="flex gap-4 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=61584396424767"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Vnix AI Prompts on Facebook"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-[#1877F2] text-white rounded-xl transition-colors duration-300 font-medium group"
          >
            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Facebook</span>
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb72MKU5kg6ycjRgtS2U"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Vnix AI Prompts on Whatsapp"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-[#25D366] text-white rounded-xl transition-colors duration-300 font-medium group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Whatsapp</span>
          </a>
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800 mb-6 max-w-md" role="presentation"></div>

        {/* --- Credits & Copyright --- */}
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <p className="flex items-center gap-2 text-sm">
            Developed with 
            <Heart className="w-3 h-3 text-red-500 fill-red-500" aria-hidden="true" /> 
            by 
            <span className="text-emerald-400 font-bold">Vnix</span>
          </p>
          
          <a 
            href="/contact" 
            className="flex items-center gap-2 text-sm hover:text-white transition-colors border-b border-transparent hover:border-emerald-500 pb-0.5"
          >
            <Mail className="w-3 h-3" aria-hidden="true" />
            Contact Support
          </a>

          {/* Copyright Line */}
          <p className="text-xs text-slate-600 mt-4 text-center">
            &copy; {currentYear} Vnix AI Prompts. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}