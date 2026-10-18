export type ProgramList = {
  title: string;
  items: string[];
};

export type Program = {
  id: number;
  title: string;
  intro: string[];
  note?: string;
  lists: ProgramList[];
};
