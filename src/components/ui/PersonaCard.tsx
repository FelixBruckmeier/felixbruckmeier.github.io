// src/components/ui/PersonaCard.tsx
import React from "react";
import Tile from "@/components/ui/Tile";
import Tag from "@/components/ui/Tag";
import { Body, Small, Subtitle, Quote } from "@/components/ui/Tokens";
import { colors } from "@/lib/tokens";

interface PersonaCardProps {
  name: string;
  role?: string;
  level?: string;
  quote?: string;
  imgSrc?: string;
  description?: string;
  skills?: string[];
  needs?: string;
  painPoints?: string;
  challenges?: string;
  responsibilities?: string[];
}

export default function PersonaCard({
  name,
  role,
  level,
  quote,
  imgSrc,
  description,
  skills = [],
  needs,
  painPoints,
  challenges,
  responsibilities = [],
}: PersonaCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* LEFT COLUMN – Profile (Bild + Name + Quote) */}
      <div className="flex flex-col">
        <Tile
          variant="static"
          className="flex flex-col items-center md:items-start p-8 gap-8"
        >
          {/* Profilbild */}
          <div className="w-60 h-60 rounded-full overflow-hidden border border-border bg-muted flex-shrink-0 shadow-md mb-12">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-3xl font-semibold text-muted-foreground">
                {name.charAt(0)}
              </div>
            )}
          </div>

          {/* Name + Rolle */}
          <div className="text-center md:text-left space-y-2">
            <Subtitle>{name}</Subtitle>
            <Small className={colors.muted.text}>
              {role} {level ? `· ${level}` : ""}
            </Small>
          </div>

          {/* Quote */}
          {quote && <Quote className="mt-8">“{quote}”</Quote>}
        </Tile>
      </div>

      {/* MIDDLE COLUMN – Overview, Skills, Responsibilities */}
      <div className="flex flex-col gap-6">
        {description && (
          <Tile variant="static">
            <Subtitle className="mb-2">Role Overview</Subtitle>
            <Body className={colors.muted.text}>{description}</Body>
          </Tile>
        )}

        {skills.length > 0 && (
          <Tile variant="static">
            <Subtitle className="mb-2">Key Skills</Subtitle>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map((skill, i) => (
                <Tag key={i} color="gray">
                  {skill}
                </Tag>
              ))}
            </div>
          </Tile>
        )}

        {responsibilities.length > 0 && (
         <Tile variant="static">
  <Subtitle className="mb-2">Responsibilities</Subtitle>
  <Body className={colors.muted.text}>
    <ul className="list-disc pl-5 space-y-1">
      {responsibilities.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  </Body>
</Tile>

        )}
      </div>

      {/* RIGHT COLUMN – Needs, Pain Points, Challenges */}
      <div className="flex flex-col gap-6">
        {needs && (
          <Tile variant="static">
            <Subtitle className="mb-2">Needs</Subtitle>
            <Body className={colors.muted.text}>{needs}</Body>
          </Tile>
        )}

        {painPoints && (
          <Tile variant="static">
            <Subtitle className="mb-2">Pain Points</Subtitle>
            <Body className={colors.muted.text}>{painPoints}</Body>
          </Tile>
        )}

        {challenges && (
          <Tile variant="static">
            <Subtitle className="mb-2">Challenges</Subtitle>
            <Body className={colors.muted.text}>{challenges}</Body>
          </Tile>
        )}
      </div>
    </div>
  );
}
