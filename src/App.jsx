import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Links from './components/Links';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 selection:bg-neutral-100 selection:text-black">
      {/* subtle grainy overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)'
        }}
      />

      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Links />
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10">
        <div className="h-px w-full bg-neutral-900" />
        <p className="mt-6 text-xs font-mono uppercase tracking-widest text-neutral-500">
          © {new Date().getFullYear()} — Built with minimal surface area.
        </p>
      </footer>
    </div>
  );
}
