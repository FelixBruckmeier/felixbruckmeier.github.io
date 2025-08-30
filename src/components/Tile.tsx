
import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle?: string;
  to?: string;
  tags?: string[];
};

export default function Tile({ title, subtitle, to, tags }: Props) {
  const Wrapper = to ? Link : "div";
  const props: any = to ? { to } : {};
  return (
    <Wrapper {...props} className="block p-5 rounded-lg border bg-card shadow-sm hover:shadow-lg transition research-glow focus:outline-none focus:ring-2">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className="text-xs px-2 py-1 border rounded-sm">{t}</span>)}
        </div>
      ) : null}
    </Wrapper>
  );
}
