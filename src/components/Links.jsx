import { Github, Mail, Newspaper, ExternalLink } from 'lucide-react';

export default function Links() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <header className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">Find me</h2>
        <div className="mt-2 h-px w-16 bg-neutral-800" />
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <article id="medium" className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
          <div className="flex items-center gap-2 text-neutral-200">
            <Newspaper size={18} />
            <h3 className="font-semibold">Medium</h3>
          </div>
          <p className="mt-2 text-sm text-neutral-400">Writings on research notes, exploit breakdowns, and blue-team takeaways.</p>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white">
            Read articles <ExternalLink size={14} />
          </a>
        </article>

        <article id="github" className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
          <div className="flex items-center gap-2 text-neutral-200">
            <Github size={18} />
            <h3 className="font-semibold">GitHub</h3>
          </div>
          <p className="mt-2 text-sm text-neutral-400">Tools, PoCs and experiments — security-first code with clear docs.</p>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white">
            Explore repos <ExternalLink size={14} />
          </a>
        </article>

        <article id="contact" className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
          <div className="flex items-center gap-2 text-neutral-200">
            <Mail size={18} />
            <h3 className="font-semibold">Contact</h3>
          </div>
          <p className="mt-2 text-sm text-neutral-400">Open to research, audits and collaboration. Let's talk.</p>
          <div className="mt-4 text-sm text-neutral-300">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">Email</div>
            <a href="mailto:you@example.com" className="hover:text-white">you@example.com</a>
          </div>
        </article>
      </div>
    </section>
  );
}
