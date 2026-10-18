import Link from "next/link";
import Feedback from "@/components/Feedback";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-12">
        <div>
          <p className="font-serif text-xl font-semibold">Нестерчук София</p>
          <p className="mt-1 text-muted">Медицинский логопед-афазиолог</p>
        </div>

        <Feedback />

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:border-t sm:border-ink/10 sm:pt-8 lg:col-span-1 lg:flex-col lg:items-start lg:justify-start lg:border-0 lg:pt-0">
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-spruce underline decoration-spruce/40 underline-offset-4 transition-colors hover:decoration-spruce"
          >
            Политика обработки персональных данных
            <span className="sr-only"> (откроется в новой вкладке)</span>
          </Link>
          <p className="text-sm text-muted">{`© ${year} Все права защищены`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
