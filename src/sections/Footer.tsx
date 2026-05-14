import Image from "next/image";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 p-4">
      <div className="container mx-auto grid text-center gap-x-10 gap-y-4 sm:grid-cols-2 sm:text-left">
        <div>
          <p className="uppercase text-lg xl:text-xl">Нестерчук София</p>
          <p className="text-sm xl:text-base">Медицинский логопед</p>
        </div>
        <address className="grid gap-2">
          <a
            href="tel:+7 (999) 999-99-99"
            className="text-lg text-blue-700 xl:text-xl"
          >
            +7 (999) 999-99-99
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
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Макс"
            >
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
        <p className="uppercase text-gray-500 text-xs">{`© ${year} Все права защищены`}</p>
      </div>
    </footer>
  );
};

export default Footer;
