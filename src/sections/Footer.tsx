import Feedback from "@/components/Feedback";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 p-4">
      <div className="container mx-auto grid text-center gap-x-10 gap-y-4 sm:grid-cols-2 sm:text-left">
        <div>
          <p className="uppercase text-lg xl:text-xl">Нестерчук София</p>
          <p className="text-sm xl:text-base">Медицинский логопед</p>
        </div>
        <Feedback />
        <p className="uppercase text-gray-500 text-xs">{`© ${year} Все права защищены`}</p>
      </div>
    </footer>
  );
};

export default Footer;
