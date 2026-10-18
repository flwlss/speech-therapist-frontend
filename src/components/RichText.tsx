import { Fragment } from "react";

// Разбиваем текст на обычные части и ссылки (адреса сайтов и e-mail).
// Из-за скобки в регулярном выражении совпадения попадают на нечётные позиции.
const TOKEN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/;

const linkClass =
  "text-spruce underline decoration-spruce/40 underline-offset-4 transition-colors hover:decoration-spruce";

interface IRichText {
  text: string;
}

export default function RichText({ text }: IRichText) {
  return (
    <>
      {text.split(TOKEN).map((part, index) => {
        if (index % 2 === 0) return part;

        if (part.startsWith("http")) {
          // знаки препинания в конце не входят в ссылку
          const [, url, tail] = part.match(/^(.*?)([.,;:)]*)$/) ?? [
            "",
            part,
            "",
          ];
          return (
            <Fragment key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {url}
              </a>
              {tail}
            </Fragment>
          );
        }

        return (
          <a key={index} href={`mailto:${part}`} className={linkClass}>
            {part}
          </a>
        );
      })}
    </>
  );
}
