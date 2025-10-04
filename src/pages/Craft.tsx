// src/pages/Craft.tsx
import React from "react";
import { H1, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";

const Page: React.FC = () => (
  <div className={`${layout.container} ${spacing.py12} ${spacing.stackMd}`}>
    <H1>Craft & Research</H1>
    <Body className="text-muted-foreground">
      Content coming soon. Replace with real case details (Situation → Research → Decisions → Impact).
    </Body>
  </div>
);

export default Page;
