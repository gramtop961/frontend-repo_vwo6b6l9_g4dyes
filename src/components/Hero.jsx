import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h1 className="font-mono text-4xl md:text-6xl font-semibold tracking-tight text-white">Cybersecurity Portfolio</h1>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Minimal, dark and a little bit grunge. I break things to make them safer — specializing in offensive security, red teaming and threat research.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-mono uppercase tracking-widest">
              <a href="#projects" className="rounded border border-neutral-700 bg-neutral-900 px-4 py-2 text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800">View Projects</a>
              <a href="#contact" className="rounded border border-neutral-800 px-4 py-2 text-neutral-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
