"use client";

import { memo } from "react";

interface IBurgerMenu {
  toggleMenu: () => void;
  isOpenedBurger: boolean;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const BurgerMenu = ({
  toggleMenu,
  isOpenedBurger,
  handleScroll,
}: IBurgerMenu) => {
  return (
    <div className="flex justify-between lg:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="text-gray-500"
        aria-controls="mobile-menu"
        aria-expanded={isOpenedBurger}
      >
        <span className="sr-only">Открыть меню</span>
        <div className="w-6 h-6 flex flex-col justify-center">
          <span
            className={`absolute h-0.5 w-6 bg-current duration-300 ease-in-out ${
              isOpenedBurger ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-current duration-300 ease-in-out ${
              isOpenedBurger ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-current duration-300 ease-in-out ${
              isOpenedBurger ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      {!isOpenedBurger && (
        <a href="#contacts" onClick={handleScroll} className="text-blue-700">
          Записаться
        </a>
      )}
    </div>
  );
};

export default memo(BurgerMenu);
