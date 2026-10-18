"use client";

import { useState, useEffect, useCallback } from "react";
import BurgerMenu from "./BurgerMenu";

const NAV_ITEMS = [
  { id: "about", name: "Обо мне" },
  { id: "faq", name: "Частые вопросы" },
  { id: "programs", name: "Программы" },
  { id: "contacts", name: "Записаться" },
];

const Navbar = () => {
  const [isOpenedBurger, setIsOpenedBurger] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenedBurger((prev) => !prev);
  }, []);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setIsOpenedBurger(false);
      // Даём меню закрыться и вернуть прокрутку странице, затем скроллим к разделу.
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          element.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
          });
        }
      });
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
    if (!isOpenedBurger) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpenedBurger(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenedBurger]);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
        <nav
          aria-label="Основная навигация"
          className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border border-ink/10 bg-paper/90 pl-5 pr-2 shadow-[0_10px_30px_-14px_rgba(22,48,47,0.35)] backdrop-blur-md sm:pl-6"
        >
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="font-display text-base font-semibold tracking-tight sm:text-lg"
          >
            Нестерчук София
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={
                    item.id === "contacts"
                      ? "ml-2 inline-block rounded-full bg-spruce px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-spruce-dark"
                      : "inline-block rounded-full px-4 py-2 text-[0.95rem] text-ink/80 transition-colors hover:bg-mist hover:text-spruce"
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <BurgerMenu toggleMenu={toggleMenu} isOpenedBurger={isOpenedBurger} />
        </nav>
      </header>

      {/* Панель вынесена из <header>: у шапки есть backdrop-blur, и внутри неё
          fixed-элементы позиционировались бы относительно шапки, а не экрана. */}
      {isOpenedBurger && (
        <div
          id="mobile-menu"
          className="animate-fade-in fixed inset-x-3 bottom-3 top-[4.75rem] z-40 overflow-y-auto rounded-3xl bg-deep p-6 text-white sm:inset-x-5 lg:hidden"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={
                  item.id === "contacts" ? "pt-8" : "border-b border-white/15"
                }
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={
                    item.id === "contacts"
                      ? "flex h-14 items-center justify-center rounded-full bg-sun font-semibold text-ink"
                      : "block py-4 font-display text-2xl font-medium"
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
