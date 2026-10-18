export interface ITimelineItem {
  id: number;
  year: string;
  title: string;
  lines: string[];
}

interface ITimeline {
  items: ITimelineItem[];
}

export default function Timeline({ items }: ITimeline) {
  return (
    <ol className="relative space-y-7 border-l-2 border-sage/60 pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden
            className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-spruce bg-paper"
          />
          <p className="text-sm font-semibold text-spruce">{item.year}</p>
          <p className="mt-0.5 font-medium leading-snug">{item.title}</p>
          {item.lines.map((line, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "mt-1 leading-snug text-ink/85"
                  : "text-sm text-muted"
              }
            >
              {line}
            </p>
          ))}
        </li>
      ))}
    </ol>
  );
}
