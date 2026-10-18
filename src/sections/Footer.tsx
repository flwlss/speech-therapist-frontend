import Feedback from "@/components/Feedback";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-x-10 gap-y-8 px-5 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-serif text-xl font-semibold">Нестерчук София</p>
          <p className="text-muted">Медицинский логопед-афазиолог</p>
        </div>
        <Feedback />
        <p className="text-sm text-muted sm:col-span-2">{`© ${year} Все права защищены`}</p>
      </div>
    </footer>
  );
};

export default Footer;
