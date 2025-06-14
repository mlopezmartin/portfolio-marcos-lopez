import React, { useState } from "react";
import type { HeaderProps, NavItem } from "./Header.types";
import ButtonToggle from "@/components/atoms/ButtonToggle/ButtonToggle";
import IconMenu from "../Icons/Svg/IconMenu";
import { IconClose } from "../Icons";
import LanguageToggle from "@/components/atoms/LanguageToggle/LanguageToggle";



const Header: React.FC<HeaderProps> = ({navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className=" text-text w-full z-50 fixed top-0 shadow-md">
      <div className="container inset-0 bg-[color:var(--color1)] mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">Marcos Lopez</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonToggle />
          <div className="flex gap-2 items-center">
              {/* <a
                href="/es/"
                onClick={() => localStorage.setItem("lang", "es")}
                className="px-2 py-1 rounded border text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                ES
              </a>
              <a
                href="/en/"
                onClick={() => localStorage.setItem("lang", "en")}
                className="px-2 py-1 rounded border text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                EN
              </a> */}
              <LanguageToggle/>
            </div>

        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ButtonToggle />
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IconClose color={"var(--neutral1)"} />
            ) : (
              <IconMenu color={"var(--neutral1)"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        {/* Menú lateral animado */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-[color:var(--color1)] text-[color:var(--neutral1)] shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={closeMenu}
            className="self-end text-[color:var(--neutral1)]"
            aria-label="Close menu"
          >
            <IconClose color={"var(--neutral1)"} />
          </button>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block hover:text-primary transition-colors text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
