import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur text-white">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
        
          <Link to="/" className="font-bold text-xl tracking-tight">
            Mazedul
          </Link>
 
          <ul className="hidden md:flex items-center gap-10 text-gray-200">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/project" className="hover:text-white transition">Project</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
 
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
 
        {open && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/" className="block px-2 py-2 rounded hover:bg-white/10">Home</Link></li>
              <li><Link to="/about" className="block px-2 py-2 rounded hover:bg-white/10">About</Link></li>
              <li><Link to="/project" className="block px-2 py-2 rounded hover:bg-white/10">Project</Link></li>
              <li><Link to="/contact" className="block px-2 py-2 rounded hover:bg-white/10">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
