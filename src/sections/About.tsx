import { education, experience, qualification } from "@/common/mock";
import Timeline from "@/components/Timeline";
import Image from "next/image";

const MaskIcon = ({ src }: { src: string }) => (
  <span
    aria-hidden
    className="block h-6 w-6 bg-spruce"
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskSize: "contain",
      WebkitMaskSize: "contain",
      maskPosition: "center",
      WebkitMaskPosition: "center",
    }}
  />
);

const ColumnTitle = ({ icon, title }: { icon: string; title: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist">
      <MaskIcon src={icon} />
    </span>
    <h3 className="font-serif text-2xl font-semibold leading-tight">{title}</h3>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-paper pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-stretch lg:gap-20">
          <div className="animate-rise order-2 lg:order-1">
            <h1 className="font-serif text-[2rem] font-medium leading-[1.15] tracking-tight">
              Я —{" "}
              <strong className="font-semibold">
                Нестерчук София Александровна
              </strong>
              , медицинский логопед-афазиолог.
            </h1>
            <div className="mt-8 space-y-5 text-lg text-ink/85">
              <p>
                Я работаю с пациентами после инсультов и черепно-мозговых травм,
                опухолей, операций на мозг, а также с людьми, страдающими
                нейродегенеративными заболеваниями. Сопровождаю семьи на каждом
                этапе – от острой фазы до устойчивых результатов. Также провожу
                супервизии для начинающих специалистов – помогаю разобраться в
                тактике и нюансах работы.
              </p>
              <p>
                Цель моей работы – шаг за шагом вернуть человеку качество жизни:
                речь, понимание, уверенность в своих силах, а также помочь не
                потеряться в потоке информации и выстроить спокойную, понятную
                систему восстановления. Я помогаю семье увидеть логику
                восстановления: приоритеты, последовательность и адекватную
                нагрузку, используя бережный, но системный подход на основе
                доказательных методов.
              </p>
              <p>
                Веду онлайн-прием, поэтому могу быть рядом с пациентами в любой
                точке мира.
              </p>
            </div>
            <a
              href="#contacts"
              className="mt-9 inline-flex h-14 items-center rounded-full bg-spruce px-8 font-medium text-white transition-colors hover:bg-spruce-dark"
            >
              Записаться
            </a>
          </div>
          <div
            className="animate-rise order-1 mx-auto w-full max-w-[360px] lg:order-2 lg:min-h-[28rem] lg:max-w-none"
            style={{ animationDelay: "120ms" }}
          >
            <div className="relative aspect-[11/12] lg:aspect-auto lg:h-full">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <Image
                  src={"/sofianesterchuk.webp"}
                  alt="Фотография специалиста"
                  fill
                  sizes="(min-width: 1024px) 420px, 360px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
          <div>
            <ColumnTitle icon="/education.svg" title="Образование" />
            <Timeline
              items={education.map((item) => ({
                id: item.id,
                year: item.year,
                title: item.universityName,
                lines: [item.faculty, item.degree],
              }))}
            />
          </div>
          <div>
            <ColumnTitle icon="/experience.svg" title="Опыт работы" />
            <Timeline
              items={experience.map((item) => ({
                id: item.id,
                year: item.year,
                title: item.workName,
                lines: [item.post],
              }))}
            />
          </div>
          <div>
            <ColumnTitle icon="/arrow.svg" title="Повышение квалификации" />
            <Timeline
              items={qualification.map((item) => ({
                id: item.id,
                year: item.year,
                title: item.placeName,
                lines: [item.post],
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
