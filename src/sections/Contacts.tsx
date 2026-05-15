import SectionTitle from "@/components/SectionTitle";
import Feedback from "@/components/Feedback";
import RequestForm from "@/components/RequestForm";

const Contaсts = () => {
  return (
    <section id="contacts">
      <SectionTitle title="Контакты" />
      <div className="text-center grid gap-10 sm:grid-cols-2 sm:text-left">
        <div>
          <Feedback />
        </div>
        <RequestForm />
      </div>
    </section>
  );
};

export default Contaсts;
