import React from "react";

type Project = { title: string; summary: string; tags: string[]; link?: string };

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-5 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] research-glow">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.link ? (
          <a className="text-sm text-[hsl(var(--primary))] hover:underline" href={project.link} target="_blank" rel="noreferrer">Open</a>
        ) : null}
      </div>
      <p className="mt-2 opacity-90">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map(t => <span key={t} className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--muted))]">{t}</span>)}
      </div>
    </article>
  );
}
