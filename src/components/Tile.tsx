
type Props = { title: string; subtitle?: string; to?: string; tags?: string[]; };
export default function Tile({ title, subtitle, to, tags }: Props) {
  const Wrapper: any = to ? "a" : "div";
  const props: any = to ? { href: to } : {};
  return (
    <Wrapper {...props} className="block p-5 rounded-xl border bg-[hsl(var(--card))] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition focus:outline-none focus:ring-2">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {subtitle && <p className="mt-2 text-sm opacity-80">{subtitle}</p>}
      {tags?.length ? (<div className="mt-3 flex flex-wrap gap-2">{tags.map((t) => (<span key={t} className="text-xs px-2 py-1 border rounded-sm">{t}</span>))}</div>) : null}
    </Wrapper>
  );
}
