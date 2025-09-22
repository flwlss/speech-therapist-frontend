"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", name: "Обо мне" },
    { id: "skills", name: "С чем помогу" },
    { id: "services", name: "Услуги и цены" },
    { id: "contact", name: "Контакты" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`bg-white border-b border-gray-200 fixed w-full z-10 px-5 py-4.5 ${
        isMenuOpen && "pb-0"
      }`}
    >
      <nav className="container mx-auto">
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className={`${isMenuOpen ? "block" : "hidden"} lg:flex`}>
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {navItems.map((item) => {
              return (
                <li
                  className={
                    "py-2 border-b border-blue-700 last:border-none lg:border-0 lg:hover:text-blue-700 lg:p-0"
                  }
                  key={item.id}
                >
                  <Link href={"/"}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
