import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="absolute z-10 h-[5rem] py-4 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
          <a href="/">
            <img src={headerLogo} alt="logo" className="w-32 h-auto" />
          </a>
          <div className="lg:hidden">
            <img
              src={hamburger}
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div
            className={`lg:hidden absolute top-16 z-10 right-2 mt-2 p-4 border border-gray-300 shadow-md ${
              menuOpen ? "bg-white block" : "hidden"
            }`}
          >
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-lg text-gray-700 font-semibold hover:text-blue-500`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg text-gray-700 font-semibold hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
