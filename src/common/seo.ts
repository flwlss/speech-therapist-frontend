import { education, mockFaqs, mockPrograms } from "@/common/mock";

// Адрес сайта задаётся в .env (NEXT_PUBLIC_SITE_URL) — от него зависят
// canonical, sitemap, Open Graph и микроразметка.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

const PHONE = "+79133827164";
const EMAIL = "nesterchuk.sofia@mail.ru";

export const SITE_TITLE = "Нестерчук София, медицинский логопед-афазиолог";

export const SITE_DESCRIPTION =
  "Нестерчук София — медицинский логопед-афазиолог. Онлайн-реабилитация речи после инсульта и ЧМТ, диагностика, работа над дикцией, супервизия.";

export const SITE_KEYWORDS = [
  "логопед-афазиолог",
  "медицинский логопед",
  "афазия",
  "реабилитация после инсульта",
  "логопед после ЧМТ",
  "логопед онлайн",
  "онлайн-реабилитация речи",
  "постановка дикции",
  "супервизия для логопедов",
];

export function buildJsonLd() {
  const universities = Array.from(
    new Set(education.map((item) => item.universityName)),
  );

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_TITLE,
    inLanguage: "ru-RU",
  };

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Нестерчук София Александровна",
    givenName: "София",
    familyName: "Нестерчук",
    jobTitle: "Медицинский логопед-афазиолог",
    telephone: PHONE,
    email: EMAIL,
    url: SITE_URL,
    image: `${SITE_URL}/sofianesterchuk.webp`,
    knowsLanguage: "ru",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Новосибирск",
      addressCountry: "RU",
    },
    alumniOf: universities.map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
    knowsAbout: [
      "Афазия",
      "Реабилитация после инсульта",
      "Черепно-мозговые травмы",
      "Логопедия",
      "Дикция и речь",
    ],
  };

  const business = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: SITE_TITLE,
    url: SITE_URL,
    image: `${SITE_URL}/sofianesterchuk.webp`,
    telephone: PHONE,
    email: EMAIL,
    founder: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      { "@type": "Country", name: "Россия" },
      {
        "@type": "AdministrativeArea",
        name: "Русскоязычные пациенты по всему миру",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Программы",
      itemListElement: mockPrograms.map((program) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: program.title,
          description: program.intro.join(" "),
          serviceType: "Логопедическая помощь и реабилитация речи (онлайн)",
          provider: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: mockFaqs.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: { "@type": "Answer", text: item.description },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, person, business, faq],
  };
}
