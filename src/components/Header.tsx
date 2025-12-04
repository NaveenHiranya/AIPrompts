import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const link = "hover:text-blue-400 transition font-medium";
  const barLink = "px-4 py-3 border-b border-gray-700 hover:bg-gray-700 text-white";

  return (
    <>
      {/* HEADER */}
      <div className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center border border-blue-500 px-2 py-1 rounded-2xl md:text-xl md:py-3 md:px-4">
          <p className="text-lg font-bold">Ai Prompts</p>

          <div className="flex items-center gap-4">
            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
              <a className={link} href="/categories">
                Categories
              </a>
              <a className={link} href="/about">
                About Us
              </a>
            </div>

            {/* Burger menu */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 text-3xl md:hidden flex items-center justify-center cursor-pointer"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* SIDEBAR MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[70vw] max-w-[260px]
          bg-gray-800 shadow-xl border-l border-gray-700
          flex flex-col pt-20 transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <a className={barLink} href="/categories" onClick={() => setOpen(false)}>
          Categories
        </a>
        <a className={barLink} href="/about" onClick={() => setOpen(false)}>
          About Us
        </a>
      </div>
    </>
  );
}
