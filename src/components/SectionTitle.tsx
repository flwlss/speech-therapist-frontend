interface ISectionTitle {
  title: string;
  id?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  id,
  className = "",
}: ISectionTitle) {
  return (
    <h2
      id={id}
      className={`font-serif text-3xl font-semibold leading-tight tracking-tight lg:text-4xl ${className}`}
    >
      {title}
    </h2>
  );
}
