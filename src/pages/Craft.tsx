import React from "react";
import { useI18n } from "../i18n";
import { Tile } from "../components/Tile";

export default function Craft() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">{t("craft_title")}</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-6">{t("craft_body")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Tile title="Coffee Table" img="https://placehold.co/800x450/png?text=Coffee+Table" />
        <Tile title="Dining Table" img="https://placehold.co/800x450/png?text=Dining+Table" />
        <Tile title="Sword & Shield" img="https://placehold.co/800x450/png?text=Sword+%26+Shield" />
      </div>
    </main>
  );
}
