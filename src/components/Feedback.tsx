import Image from "next/image";

const Feedback = () => {
  return (
    <address className="grid gap-2">
      <a
        href="tel:+7 (999) 999-99-99"
        className="text-lg text-blue-700 xl:text-xl"
      >
        +7 (999) 999-99-99
      </a>
      <a
        href="mailto:test@mail.ru"
        className="text-lg text-blue-700 xl:text-xl"
      >
        test@mail.ru
      </a>
      <div className="flex justify-center sm:justify-start gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <Image
            src={"/telegram.svg"}
            width={40}
            height={40}
            loading="lazy"
            alt="Телеграм"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Макс">
          <Image
            src={"/max.svg"}
            width={40}
            height={40}
            loading="lazy"
            alt="Макс"
          />
        </a>
      </div>
    </address>
  );
};

export default Feedback;
