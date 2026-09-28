import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07111F]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-20">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight"
        >
          HABERT<span className="text-sky-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Projects
          </Link>

          <Link
            to="/skills"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Skills
          </Link>

          <Link
            to="/resume"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Resume
          </Link>

          <Link
            to="/contact"
            className="rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Hire Me
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#07111F] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-sky-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-sky-400"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-sky-400"
            >
              Services
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-sky-400"
            >
              Projects
            </Link>

            <Link
              to="/skills"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-sky-400"
            >
              Skills
            </Link>

            <Link
              to="/resume"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-sky-400"
            >
              Resume
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-full bg-sky-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Hire Me
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

