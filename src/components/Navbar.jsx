import { useCallback, useState } from 'react';

const items = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'medium', label: 'Medium' },
  { id: 'github', label: 'Github' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onNav = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-lg border border-neutral-800/60 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" onClick={(e) => onNav(e, 'home')} className="font-mono text-sm tracking-widest text-neutral-200">
              CYBER / PORTFOLIO
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center rounded border border-neutral-800 px-3 py-2 text-neutral-300 hover:bg-neutral-900"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
            <nav className="hidden md:flex items-center gap-6 font-mono text-[12px] uppercase tracking-widest">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={(e) => onNav(e, it.id)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {it.label}
                </a>
              ))}
            </nav>
          </div>
          {open && (
            <nav className="md:hidden border-t border-neutral-800/60 px-4 py-2 font-mono text-[12px] uppercase tracking-widest">
              <ul className="flex flex-col">
                {items.map((it) => (
                  <li key={it.id}>
                    <a
                      href={`#${it.id}`}
                      onClick={(e) => onNav(e, it.id)}
                      className="block py-2 text-neutral-300 hover:text-white"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
