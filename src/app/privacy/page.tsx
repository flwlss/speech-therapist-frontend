import type { Metadata } from "next";
import PrivacyToc from "@/components/PrivacyToc";
import RichText from "@/components/RichText";
import { PRIVACY_TITLE, privacySections } from "@/common/privacy";
import { PolicyItem } from "@/types/privacy";

export const metadata: Metadata = {
  title: `${PRIVACY_TITLE} | Нестерчук София`,
  description:
    "Политика в отношении обработки персональных данных. Оператор — Нестерчук София Александровна, медицинский логопед-афазиолог",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "article",
    url: "/privacy",
    title: PRIVACY_TITLE,
  },
};

const NumberCell = ({ value }: { value: string }) => (
  <span className="pt-0.5 text-sm font-semibold tabular-nums text-spruce">
    {value}
  </span>
);

const PolicyClause = ({ item }: { item: PolicyItem }) => (
  <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-2 border-t border-ink/10 pt-4 first:border-0 first:pt-0 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
    <NumberCell value={item.number} />
    <div className="min-w-0 space-y-3 [overflow-wrap:anywhere]">
      {item.text && (
        <p>
          <RichText text={item.text} />
        </p>
      )}

      {item.term && item.definition && (
        <p>
          <strong className="font-semibold">{item.term}</strong> —{" "}
          <RichText text={item.definition} />
        </p>
      )}

      {item.lead && <p className="font-medium">{item.lead}</p>}

      {item.list && (
        <ul className="space-y-3">
          {item.list.map((entry, index) => (
            <li key={index} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sage"
              />
              <span className="min-w-0">
                <RichText text={entry} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default function Privacy() {
  return (
    <main>
      <section className="bg-mist py-12 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h1 className="max-w-3xl break-words font-serif text-[1.75rem] font-medium leading-[1.15] tracking-tight min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
            {PRIVACY_TITLE}
          </h1>
        </div>
      </section>

      <div className="bg-paper py-10 lg:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <aside>
            <PrivacyToc
              sections={privacySections.map(({ id, number, title }) => ({
                id,
                number,
                title,
              }))}
            />
          </aside>

          <article className="min-w-0 max-w-3xl space-y-12 text-ink/90 lg:space-y-14">
            {privacySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <h2
                  id={`${section.id}-title`}
                  className="flex items-start gap-3 font-serif text-xl font-semibold leading-snug text-ink sm:gap-4 sm:text-2xl lg:text-[1.75rem]"
                >
                  <span
                    aria-hidden
                    className="grid h-9 min-w-9 shrink-0 place-items-center rounded-full bg-mist px-2 text-base font-semibold tabular-nums text-spruce sm:h-10 sm:min-w-10"
                  >
                    {section.number}
                  </span>
                  <span className="min-w-0 break-words pt-0.5">
                    {section.title}
                  </span>
                </h2>

                <div className="mt-6 space-y-5">
                  {section.intro && (
                    <p className="[overflow-wrap:anywhere]">
                      <RichText text={section.intro} />
                    </p>
                  )}

                  {section.items && (
                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <PolicyClause key={item.number} item={item} />
                      ))}
                    </div>
                  )}

                  {section.rows && (
                    <dl className="divide-y divide-ink/10 overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10">
                      {section.rows.map((row) => (
                        <div
                          key={row.label}
                          className="grid gap-1 p-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
                        >
                          <dt className="text-sm font-semibold text-spruce">
                            {row.label}
                          </dt>
                          <dd className="min-w-0 [overflow-wrap:anywhere]">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
