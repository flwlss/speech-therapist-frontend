"use client";

import { memo } from "react";

interface IBurgerMenu {
  toggleMenu: () => void;
  isOpenedBurger: boolean;
}

const BurgerMenu = ({ toggleMenu, isOpenedBurger }: IBurgerMenu) => {
  return (
    <div className="flex items-center gap-3 lg:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="grid h-11 w-11 place-items-center rounded-full text-ink"
        aria-controls="mobile-menu"
        aria-expanded={isOpenedBurger}
      >
        <span className="sr-only">Открыть меню</span>
        <span aria-hidden className="relative block h-6 w-6">
          <span
            className={`absolute left-0 top-[11px] h-0.5 w-6 bg-current duration-300 ease-in-out ${
              isOpenedBurger ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-0 top-[11px] h-0.5 w-6 bg-current duration-300 ease-in-out ${
              isOpenedBurger ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[11px] h-0.5 w-6 bg-current duration-300 ease-in-out ${
              isOpenedBurger ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </span>
      </button>
    </div>
  );
};

export default memo(BurgerMenu);
