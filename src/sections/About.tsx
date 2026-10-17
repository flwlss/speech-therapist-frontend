import { education, experience, qualification } from "@/common/mock";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="space-y-5 lg:space-y-10">
      <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0">
        <Image
          width={400}
          className="min-w-[300px] min-h-[300px] xl:min-w-[400px] xl:min-h-[400px]"
          height={400}
          src={"/sofia.webp"}
          alt="Фотография специалиста"
          priority
        />
        <div className="space-y-3">
          <h1 className="font-light lg:text-lg xl:text-xl">
            Я — <strong>Нестерчук София</strong>, медицинский логопед-афазиолог.
          </h1>
          <p className="font-light lg:text-lg xl:text-xl">
            Я работаю с пациентами после инсультов и черепно-мозговых травм,
            опухолей, операций на мозг, а также с людьми, страдающими
            нейродегенеративными заболеваниями. Сопровождаю семьи на каждом
            этапе – от острой фазы до устойчивых результатов. Также провожу
            супервизии для начинающих специалистов – помогаю разобраться в
            тактике и нюансах работы.
          </p>
          <p className="font-light lg:text-lg xl:text-xl">
            Цель моей работы – шаг за шагом вернуть человеку качество жизни:
            речь, понимание, уверенность в своих силах, а также помочь не
            потеряться в потоке информации и выстроить спокойную, понятную
            систему восстановления. Я помогаю семье увидеть логику
            восстановления: приоритеты, последовательность и адекватную
            нагрузку, используя бережный, но системный подход на основе
            доказательных методов.
          </p>
          <p className="font-light lg:text-lg xl:text-xl">
            Веду онлайн-прием, поэтому могу быть рядом с пациентами в любой
            точке мира.
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="mb-5 lg:mb-0">
          <h3 className="text-xl mb-2 xl:text-3xl">Образование</h3>
          {education.map((item) => (
            <div key={item.id} className="leading-tight mb-3 last:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={"/education.svg"}
                  className="min-w-[25px] max-h-[25px] xl:min-w-[30px] xl:min-h-[30px]"
                  width={25}
                  height={25}
                  alt="Образование"
                />
                <p className="lg:text-lg xl:text-xl">{item.universityName}</p>
              </div>
              <div className="pl-6 border-l-1 border-gray-500 ml-3 xl:ml-3.5">
                <p className="text-gray-500 text-sm lg:text-base">
                  {item.year}
                </p>
                <p className="lg:text-lg">{item.faculty}</p>
                <p className="text-gray-500 text-sm lg:text-base">
                  {item.degree}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5 lg:mb-0">
          <h3 className="text-xl mb-2 xl:text-3xl">Опыт работы</h3>
          {experience.map((item) => (
            <div key={item.id} className="leading-tight mb-3 last:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={"/experience.svg"}
                  className="min-w-[25px] max-h-[25px] xl:min-w-[30px] xl:min-h-[30px]"
                  width={25}
                  height={25}
                  alt="Опыт работы"
                />
                <p className="lg:text-lg xl:text-xl">{item.workName}</p>
              </div>
              <div className="pl-6 border-l-1 border-gray-500 ml-3 xl:ml-3.5">
                <p className="text-gray-500 text-sm lg:text-base">
                  {item.year}
                </p>
                <p className="lg:text-lg">{item.post}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5 lg:mb-0">
          <h3 className="text-xl mb-2 xl:text-3xl">Повышение квалификации</h3>
          {qualification.map((item) => (
            <div key={item.id} className="leading-tight mb-3 last:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={"/arrow.svg"}
                  className="min-w-[25px] max-h-[25px] xl:min-w-[30px] xl:min-h-[30px]"
                  width={25}
                  height={25}
                  alt="Повышение квалификации"
                />
                <p className="lg:text-lg xl:text-xl">{item.placeName}</p>
              </div>
              <div className="pl-6 border-l-1 border-gray-500 ml-3 xl:ml-3.5">
                <p className="text-gray-500 text-sm lg:text-base">
                  {item.year}
                </p>
                <p className="lg:text-lg">{item.post}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
