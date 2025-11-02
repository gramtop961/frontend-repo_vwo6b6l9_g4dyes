export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24">
      <header className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">About</h2>
        <div className="mt-2 h-px w-16 bg-neutral-800" />
      </header>
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-neutral-200/90 leading-relaxed">
            I am a security practitioner focused on adversarial thinking, offensive testing, and pragmatic defense. My work spans vulnerability research, exploit development, and building practical tooling that elevates blue and red teams.
          </p>
          <p className="mt-4 text-neutral-400">
            Ethos: simple tools, precise impact. Old-fashioned craft with modern tradecraft.
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-lg border border-neutral-800 bg-[radial-gradient(circle_at_30%_30%,rgba(40,40,40,0.25),transparent_60%)] p-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">Stacks</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Red Team', 'Pentest', 'Reverse', 'Python', 'Go', 'OSINT', 'Cloud', 'Web', 'Linux'].map((t) => (
                <span key={t} className="select-none rounded border border-neutral-800 bg-neutral-950 px-2 py-1 text-[11px] text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
