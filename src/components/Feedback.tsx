import Image from "next/image";

const Feedback = () => {
  return (
    <address className="grid gap-3 not-italic">
      <a
        href="tel:+7 (999) 999-99-99"
        className="font-serif text-2xl font-medium underline-offset-4 hover:underline xl:text-3xl"
      >
        +7 (999) 999-99-99
      </a>
      <a
        href="mailto:test@mail.ru"
        className="text-lg underline-offset-4 hover:underline xl:text-xl"
      >
        test@mail.ru
      </a>
      <div className="mt-2 flex gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="block rounded-full transition-transform hover:scale-105"
        >
          <Image
            src={"/telegram.svg"}
            width={44}
            height={44}
            loading="lazy"
            alt="Телеграм"
          />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Макс"
          className="block rounded-xl transition-transform hover:scale-105"
        >
          <Image
            src={"/max.svg"}
            width={44}
            height={44}
            loading="lazy"
            alt="Макс"
          />
        </a>
      </div>
    </address>
  );
};

export default Feedback;
