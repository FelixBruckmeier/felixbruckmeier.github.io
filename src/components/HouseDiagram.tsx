import { useTranslation } from "react-i18next";
type Pillar = { title: string; caption?: string; href?: string; };

export default function HouseDiagram() {
  const { t } = useTranslation();
  const pillars = t("expertise.pillars", { returnObjects: true }) as Pillar[];

  return (
    <div className="w-full">
      {/* Roof */}
      <div className="mx-auto max-w-4xl flex justify-center">
        <div className="relative">
          <div className="w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-b-[90px] border-b-neutral-900 dark:border-b-white" aria-hidden />
          <div className="absolute inset-0 -top-5 flex items-end justify-center">
            <span className="px-3 py-1 text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-md translate-y-5">
              {t("expertise.roof")}
            </span>
          </div>
        </div>
      </div>

      {/* Tiles */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.slice(0,5).map((p, i) => (
          <a key={i} href="/#projects" className="block focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 rounded-2xl">
            <div className="h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-semibold leading-snug">{p.title}</div>
              {p.caption ? <div className="mt-2 text-sm opacity-80">{p.caption}</div> : null}
            </div>
          </a>
        ))}
      </div>

      {/* Foundation */}
      <div className="mt-8">
        <div className="mx-auto max-w-5xl rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-center text-sm font-semibold px-4 py-2">
          {t("expertise.foundation")}
        </div>
      </div>

      {/* Value Proposition */}
      <p className="mt-4 text-center text-sm text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
        {t("expertise.valueProp")}
      </p>
    </div>
  );
}
