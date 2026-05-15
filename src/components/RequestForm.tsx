"use client";

import { InputMask } from "@react-input/mask";
import { useState, FormEvent, useEffect } from "react";

interface StatusState {
  type: "success" | "error" | null;
  text: string;
}

const RequestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<StatusState>({
    type: null,
    text: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-lg lg:text-xl xl:text-2xl font-medium">
        Оставить заявку
      </p>

      <div className="space-y-4 lg:flex lg:space-y-0 lg:space-x-4">
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={50}
          placeholder="Ваше имя"
          disabled={isLoading}
          className="border border-blue-700 w-full h-[50px] px-4 outline-none rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
        />

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
          className="border border-blue-700 w-full h-[50px] px-4 outline-none rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-100 w-full h-[50px] border border-blue-700 rounded-md text-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Отправка..." : "Записаться"}
      </button>

      {status.text && (
        <div
          className={`p-3 rounded-md text-sm animate-fade-in ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
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
