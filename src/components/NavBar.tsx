"use client";

import { useState, useEffect, useCallback } from "react";
import BurgerMenu from "./BurgerMenu";

const NAV_ITEMS = [
  { id: "about", name: "Обо мне" },
  { id: "skills", name: "С чем помогу" },
  { id: "services", name: "Услуги и цены" },
  { id: "contact", name: "Контакты" },
];

const Navbar = () => {
  const [isOpenedBurger, setIsOpenedBurger] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenedBurger((prev) => !prev);
  }, []);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpenedBurger(false);
    },
    [],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpenedBurger(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpenedBurger) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpenedBurger]);

  return (
    <header
      className={`bg-white border-b border-gray-200 fixed w-full z-10 px-5 py-4.5 ${
        isOpenedBurger && "h-full"
      }`}
    >
      <nav className="container mx-auto">
        <BurgerMenu toggleMenu={toggleMenu} isOpenedBurger={isOpenedBurger} />
        <div className={`${isOpenedBurger ? "block" : "hidden"} lg:flex`}>
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {NAV_ITEMS.map((item) => {
              return (
                <li
                  className={
                    "py-2 border-b border-blue-700 last:border-none lg:border-0 lg:hover:text-blue-700 lg:p-0"
                  }
                  key={item.id}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
