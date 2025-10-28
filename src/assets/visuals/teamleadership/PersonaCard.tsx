import React from "react";
import Tile from "@/components/ui/Tile";
import Tag from "@/components/ui/Tag";
import { Body, Small, Subtitle } from "@/components/ui/Tokens";
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
    <div className="w-full flex justify-center">
      <Tile
        variant="static"
        className="w-full max-w-[1100px] mx-auto p-8 md:p-10 flex flex-col gap-6 text-left text-[14px] md:text-[15px] leading-snug"
      >
        {/* === OUTER GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start text-left">
          {/* === LEFT COLUMN – Profile === */}
          <div className="flex flex-col h-full text-left">
            <Tile
              variant="transparent"
              className="flex flex-col justify-between h-full text-left"
            >
              {/* Profile Image */}
              <div className="w-56 h-56 rounded-full overflow-hidden border border-border bg-muted mb-8">
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

              {/* Name + Role */}
              <div className="space-y-2 mb-6 text-left">
                <Subtitle className="text-left text-3xl md:text-4xl font-semibold">
                  {name}
                </Subtitle>
                <Small className={`${colors.muted.text} text-left text-base md:text-lg`}>
                  {role} {level ? `· ${level}` : ""}
                </Small>
              </div>

              {/* Quote */}
              {quote && (
                <Body className="italic text-foreground/80 max-w-md leading-relaxed text-sm md:text-base text-left">
                  “{quote}”
                </Body>
              )}
            </Tile>
          </div>

          {/* === MIDDLE COLUMN === */}
          <div className="flex flex-col gap-3 h-full text-left">
            {description && (
              <Tile
                variant="transparent"
                className="flex-1 flex flex-col justify-between text-left"
              >
                <Subtitle className="text-left text-lg md:text-xl font-semibold">
                  Role Overview
                </Subtitle>
                <Body
                  className={`${colors.muted.text} text-left text-sm md:text-[15px] leading-snug`}
                >
                  {description}
                </Body>
              </Tile>
            )}

            {skills.length > 0 && (
              <Tile
                variant="transparent"
                className="flex-1 flex flex-col justify-between text-left"
              >
                <Subtitle className="text-left text-lg md:text-xl font-semibold">
                  Key Skills
                </Subtitle>
                <div className="flex flex-wrap gap-2 mt-2 text-left">
                  {skills.map((skill, i) => (
                    <Tag key={i} color="gray" className="text-xs md:text-sm px-2 py-1">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Tile>
            )}

            {responsibilities.length > 0 && (
              <Tile
                variant="transparent"
                className="flex-1 flex flex-col justify-between text-left"
              >
                <Subtitle className="text-left text-lg md:text-xl font-semibold">
                  Responsibilities
                </Subtitle>
                <Body
                  className={`${colors.muted.text} text-left text-sm md:text-[15px] leading-snug`}
                >
                  <ul className="list-disc pl-5 space-y-1">
                    {responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </Body>
              </Tile>
            )}
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="flex flex-col gap-3 h-full text-left">
            {needs && (
              <Tile
                variant="transparent"
                className="flex-1 flex flex-col justify-between text-left"
              >
                <Subtitle className="text-left text-lg md:text-xl font-semibold">
                  Needs
                </Subtitle>
                <Body
                  className={`${colors.muted.text} text-left text-sm md:text-[15px] leading-snug`}
                >
                  {needs}
                </Body>
              </Tile>
            )}

            {painPoints && (
              <Tile
                variant="transparent"
                className="flex-1 flex flex-col justify-between text-left"
              >
                <Subtitle className="text-left text-lg md:text-xl font-semibold">
                  Pain Points
                </Subtitle>
                <Body
                  className={`${colors.muted.text} text-left text-sm md:text-[15px] leading-snug`}
                >
                  {painPoints}
                </Body>
              </Tile>
            )}

            {challenges && (
              <Tile
                variant="transparent"
                className="flex-1 flex flex-col justify-between text-left"
              >
                <Subtitle className="text-left text-lg md:text-xl font-semibold">
                  Challenges
                </Subtitle>
                <Body
                  className={`${colors.muted.text} text-left text-sm md:text-[15px] leading-snug`}
                >
                  {challenges}
                </Body>
              </Tile>
            )}
          </div>
        </div>
      </Tile>
    </div>
  );
}
