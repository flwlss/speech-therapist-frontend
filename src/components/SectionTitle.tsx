interface ISectionTitle {
  title: string;
}

export default function SectionTitle({ title }: ISectionTitle) {
  return <h2 className="text-2xl mb-3 xl:text-4xl xl:mb-5">{title}</h2>;
}
