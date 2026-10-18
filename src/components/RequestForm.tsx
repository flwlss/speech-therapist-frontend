"use client";

import { InputMask } from "@react-input/mask";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";

interface StatusState {
  type: "success" | "error" | null;
  text: string;
}

const inputClass =
  "h-14 w-full rounded-xl border border-ink/25 bg-white px-4 text-base text-ink outline-none transition placeholder:text-muted focus:border-spruce focus:ring-4 focus:ring-spruce/20 disabled:cursor-not-allowed disabled:bg-mist";

// Форма считается заполненной верно, если все поля проходят проверку браузера
// (имя от 2 символов, телефон по маске, галочка согласия) и имя не состоит из пробелов.
const validate = (form: HTMLFormElement) => {
  const name = String(new FormData(form).get("name") ?? "").trim();
  return form.checkValidity() && name.length >= 2;
};

const RequestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState<StatusState>({
    type: null,
    text: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate(event.currentTarget)) return;
    setIsLoading(true);
    setStatus({ type: null, text: "" });

    const formData = new FormData(event.currentTarget);
    const formValues = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
    };

    try {
      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          text: "✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
        });
        (event.target as HTMLFormElement).reset();
        setIsValid(false);
      } else {
        setStatus({
          type: "error",
          text: result.error || "❌ Ошибка при отправке. Попробуйте позже.",
        });
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setStatus({
        type: "error",
        text: "❌ Ошибка соединения. Проверьте интернет и попробуйте снова.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status.text) {
      const timer = setTimeout(() => {
        setStatus({ type: null, text: "" });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status.text]);

  return (
    <form
      onSubmit={handleSubmit}
      onChange={(event) => setIsValid(validate(event.currentTarget))}
      className="space-y-4"
    >
      <p className="font-serif text-2xl font-semibold">Оставить заявку</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Ваше имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={50}
            placeholder="Ваше имя"
            disabled={isLoading}
            autoComplete="name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Телефон
          </label>
          <InputMask
            required
            type="tel"
            id="phone"
            name="phone"
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }}
            placeholder="+7 (___) ___-__-__"
            pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
            disabled={isLoading}
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <label
        htmlFor="agreement"
        className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-ink/85"
      >
        <input
          id="agreement"
          type="checkbox"
          name="agreement"
          required
          disabled={isLoading}
          className="checkbox"
        />
        <span>
          Я согласен на{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-spruce underline decoration-spruce/40 underline-offset-4 transition-colors hover:decoration-spruce"
          >
            обработку персональных данных
            <span className="sr-only"> (откроется в новой вкладке)</span>
          </Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={isLoading || !isValid}
        className="h-14 w-full cursor-pointer rounded-xl bg-spruce font-medium text-white transition-colors hover:bg-spruce-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Отправка..." : "Записаться"}
      </button>

      {status.text && (
        <div
          className={`animate-fade-in rounded-xl p-3 text-sm ${
            status.type === "success"
              ? "border border-green-200 bg-green-50 text-green-800"
              : "border border-red-200 bg-red-50 text-red-800"
          }`}
          role="alert"
        >
          {status.text}
        </div>
      )}
    </form>
  );
};

export default RequestForm;
