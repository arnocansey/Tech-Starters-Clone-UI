import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../input.css";

const Header = (): JSX.Element => {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState<boolean>(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-blue-900 text-center text-white p-2 z-100">
        <h1 className="font-bold text-5xl">(877) 932-0040</h1>
      </div>
      <header className="fixed top-0 left-0 w-full bg-slate-500 shadow-md z-40">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-white">
            Tech Starters
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            <ul className="flex items-center gap-8 text-white">
              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsServicesMenuOpen(true)}
                onMouseLeave={() => setIsServicesMenuOpen(false)}
              >
                <span className="hover:text-blue-400 transition cursor-pointer">
                  Services
                </span>
                {/* Dropdown with animation */}
                <div
                  className={`absolute left-0 mt-2 space-y-2 bg-slate-700 p-4 transition-all duration-300 ease-out ${
                    isServicesMenuOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-4 invisible"
                  }`}
                >
                  <Link
                    to="/it-support"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    IT Support
                  </Link>
                  <Link
                    to="/cybersecurity"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    Cybersecurity
                  </Link>
                  <Link
                    to="/consulting"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    IT Consulting
                  </Link>
                </div>
              </li>

              {/* About Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsAboutMenuOpen(true)}
                onMouseLeave={() => setIsAboutMenuOpen(false)}
              >
                <Link to="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
                {/* Dropdown with animation */}
                <div
                  className={`absolute left-0 mt-2 space-y-2 bg-slate-700 p-4 transition-all duration-300 ease-out ${
                    isAboutMenuOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-4 invisible"
                  }`}
                >
                  <Link
                    to="/team"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    Careers
                  </Link>
                  <Link
                    to="/mission"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    Community
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isServicesMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isServicesMenuOpen && (
          <nav className="bg-slate-600 md:hidden">
            <ul className="flex flex-col items-center gap-6 py-4 text-white">
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition"
                  onClick={() => setIsServicesMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition"
                  onClick={() => setIsServicesMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
