import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import Feedback from "@/components/Feedback";

const Contaсts = () => {
  return (
    <section id="contacts">
      <SectionTitle title="Контакты" />
      <div className="text-center grid gap-10 sm:grid-cols-2 sm:text-left">
        <div>
          <Feedback />
        </div>
        <form className="space-y-4">
          <p className="text-lg lg:text-xl xl:text-2xl">Оставить заявку</p>
          <div className="space-y-4 lg:flex lg:space-y-0 lg:space-x-4">
            <CustomInput />
            <CustomInput />
          </div>
          <button className="bg-blue-100 w-full h-[50px] border border-blue-700 rounded-md text-blue-700">
            Записаться
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contaсts;
