type PersonFeatures = {
  id: number;
  icon: string;
  title: string;
  features: {
    id: number;
    year?: number;
    item: string;
  }[];
};

export const mockPersonFeatures: PersonFeatures[] = [
  {
    id: 1,
    icon: "/education.svg",
    title: "Образование",
    features: [
      {
        id: 1,
        year: 2025,
        item: "Повышение квалификации «Медицинская логопедия», Новосибирский государственный медицинский университет",
      },
      {
        id: 2,
        year: 2024,
        item: "Новосибирский государственный педагогический университет, ВУЗ по специальности «Дефектологическое образование»",
      },
    ],
  },
  {
    id: 2,
    icon: "/experience.svg",
    title: "Опыт",
    features: [
      {
        id: 3,
        item: "Работаю в Медицинский центр «Ментал» (ранее «Ментал Консалтинг»)",
      },
      {
        id: 4,
        item: "Работаю в «Врачебная практика»",
      },
    ],
  },
  {
    id: 3,
    icon: "/experience.svg",
    title: "Опыт",
    features: [
      {
        id: 5,
        item: "Работаю в Медицинский центр «Ментал» (ранее «Ментал Консалтинг»)",
      },
      {
        id: 6,
        item: "Работаю в «Врачебная практика»",
      },
    ],
  },
  {
    id: 4,
    icon: "/experience.svg",
    title: "Опыт",
    features: [
      {
        id: 7,
        item: "Работаю в Медицинский центр «Ментал» (ранее «Ментал Консалтинг»)",
      },
      {
        id: 8,
        item: "Работаю в «Врачебная практика»",
      },
    ],
  },
];
