export type PersonFeature = {
  id: number;
  icon: string;
  title: string;
  features: Feature[];
};

type Feature = {
  id: number;
  year?: number;
  item: string;
};
