export type PersonFeatures = {
  id: number;
  icon: string;
  title: string;
  features: PersonFeature[];
};

type PersonFeature = {
  id: number;
  year?: number;
  item: string;
};
