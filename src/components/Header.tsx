import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Desktop Link Styles
  const linkClass = "text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200";
  
  // Mobile Sidebar Link Styles
  const barLinkClass = "block px-6 py-4 text-lg font-medium text-slate-200 border-b border-slate-800 hover:bg-slate-800/50 hover:text-emerald-400 transition-all duration-200";

  return (
    <>
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo Area */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">
              VNIX
            </span>
          </a>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {/* I updated the classes below so they match the new theme if you uncomment them:
                <a className={linkClass} href="/categories">
                  Categories
                </a> 
              */}
              
              <a className={linkClass} href="/about">
                About Me
              </a>
              
              <a 
                href="/contact" 
                className="px-4 py-2 text-sm font-bold text-slate-900 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-transform active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE OVERLAY (Backdrop) --- */}
      <div
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 z-[60] md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* --- SIDEBAR MENU --- */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[75vw] max-w-[300px]
          bg-slate-900 shadow-2xl shadow-black border-l border-emerald-500/10
          flex flex-col pt-20 z-[70] transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button inside Sidebar */}
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
        >
          <X size={20} />
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col">
          <a className={barLinkClass} href="/about" onClick={() => setOpen(false)}>
            About Me
          </a>
          
          {/* Updated styles for future use:
            <a className={barLinkClass} href="/categories" onClick={() => setOpen(false)}>
              Categories
            </a> 
          */}
          
          <a className={barLinkClass} href="/contact" onClick={() => setOpen(false)}>
            Contact Support
          </a>
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto p-6 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            © 2025 VNIX AI Prompts
          </p>
        </div>
      </div>
    </>
  );
}