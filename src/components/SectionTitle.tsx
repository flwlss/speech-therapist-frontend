interface ISectionTitle {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = "" }: ISectionTitle) {
  return (
    <h2
      className={`font-serif text-3xl font-semibold leading-tight tracking-tight lg:text-4xl ${className}`}
    >
      {title}
    </h2>
  );
}
