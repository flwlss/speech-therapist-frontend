import SectionTitle from "@/components/SectionTitle";
import Feedback from "@/components/Feedback";
import RequestForm from "@/components/RequestForm";

const Contacts = () => {
  return (
    <section id="contacts" className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="rounded-[2rem] bg-deep px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionTitle title="Контакты" className="mb-8" />
              <Feedback />
            </div>
            <div className="rounded-3xl bg-white p-6 text-ink sm:p-8">
              <RequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
