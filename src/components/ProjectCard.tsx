import React from "react";

type Project = { title: string; summary: string; tags: string[]; link?: string };

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.link ?? "#"} className="card p-5 block focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="opacity-70" aria-hidden>↗</span>
      </div>
      <p className="mt-2 opacity-90">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map(t => <span key={t} className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--muted))]">{t}</span>)}
      </div>
    </a>
  );
}
