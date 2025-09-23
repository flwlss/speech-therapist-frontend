export type Contact = {
  id: number;
  title: string;
  url: string;
  address: string;
  metro: MetroStation[];
  phoneNumber: string;
};

type MetroStation = {
  id: number;
  name: string;
  time: number;
};
