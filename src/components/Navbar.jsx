import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && !event.target.closest('.mobile-menu-container')) {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [toggle]);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 sm:py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex">
            <span className="block sm:hidden">Satish</span>
            <span className="hidden sm:block">Satish Timalsina</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] lg:text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center mobile-menu-container">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer z-30"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Overlay */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-20 rounded-xl shadow-lg border border-secondary/20 transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] w-full text-right transition-colors duration-300 ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block w-full py-2">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Background Overlay */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 z-10 sm:hidden"
          onClick={() => setToggle(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;