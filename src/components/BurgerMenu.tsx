"use client";

import { memo } from "react";

interface IBurgerMenu {
  toggleMenu: () => void;
  isOpenedBurger: boolean;
}

const BurgerMenu = ({ toggleMenu, isOpenedBurger }: IBurgerMenu) => {
  return (
    <div className="flex lg:hidden">
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
    </div>
  );
};

export default memo(BurgerMenu);
