import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Recon Toolkit',
    desc: 'Modular reconnaissance utilities for web targets with clean output and CI-ready JSON.',
    links: { repo: '#', demo: '#' },
  },
  {
    title: 'Payload Lab',
    desc: 'A small lab to craft and test payloads for common injection classes safely.',
    links: { repo: '#', demo: '#' },
  },
  {
    title: 'Ghost Watch',
    desc: 'Endpoint telemetry collector with minimal footprint for adversary emulation.',
    links: { repo: '#', demo: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24">
      <header className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">Projects</h2>
        <div className="mt-2 h-px w-16 bg-neutral-800" />
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-lg border border-neutral-800 bg-neutral-950/60 p-5 hover:border-neutral-700">
            <h3 className="text-neutral-100 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest">
              <a href={p.links.repo} className="inline-flex items-center gap-1 text-neutral-300 hover:text-white">
                Repo <ExternalLink size={14} />
              </a>
              <span className="text-neutral-700">/</span>
              <a href={p.links.demo} className="inline-flex items-center gap-1 text-neutral-300 hover:text-white">
                Demo <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
