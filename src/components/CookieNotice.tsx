"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie-notice-accepted";
const CHANGE_EVENT = "cookie-notice-change";

// Запасной вариант на случай, если localStorage недоступен (например, приватный режим).
let isAcceptedInMemory = false;

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

const getSnapshot = () => {
  if (isAcceptedInMemory) return true;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

// На сервере считаем уведомление принятым: так нет рассинхрона при гидратации,
// а в браузере оно появляется только тем, кто его ещё не принимал.
const getServerSnapshot = () => true;

const CookieNotice = () => {
  const isAccepted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (isAccepted) return null;

  const accept = () => {
    isAcceptedInMemory = true;
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* хранилище недоступно — достаточно значения в памяти */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <div
      role="region"
      aria-label="Уведомление об использовании файлов cookie"
      className="animate-rise fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-white p-5 shadow-xl sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-6"
    >
      <p className="text-sm leading-relaxed text-ink sm:flex-1">
        Этот сайт использует файлы cookie и сервис «Яндекс Метрика», чтобы
        анализировать посещаемость и улучшать работу сайта. Продолжая
        пользоваться сайтом, вы соглашаетесь с этим. Подробнее — в{" "}
        <Link
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-spruce underline decoration-spruce/40 underline-offset-4 transition-colors hover:decoration-spruce"
        >
          Политике обработки персональных данных
          <span className="sr-only"> (откроется в новой вкладке)</span>
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-4 w-full shrink-0 cursor-pointer rounded-full bg-spruce px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-spruce-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spruce sm:mt-0 sm:w-auto"
      >
        Принять
      </button>
    </div>
  );
};

export default CookieNotice;
