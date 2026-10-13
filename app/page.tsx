
"use client";

import { useState } from "react";
import { useEffect } from "react";

const projects = [
  {
    number: "01",
    title: "Cinematic EditS",
    category: "VIDEO EDITING",
    description: "Visual storytelling with a cinematic touch.",
    gradient: "from-violet-500/30 via-purple-900/20 to-transparent",
  },
  {
    number: "02",
    title: "Reels Edits",
    category: "AFTER EFFECTS",
    description: "Motion, rhythm and carefully crafted details.",
    gradient: "from-sky-400/25 via-blue-900/20 to-transparent",
  },
  {
    number: "03",
    title: "Gaming Montages",
    category: "GRAPHIC DESIGN",
    description: "Distinctive visuals built to stand out.",
    gradient: "from-rose-400/20 via-orange-900/20 to-transparent",
  },
];

export default function Home() {
    useEffect(() => {
    document.documentElement.classList.add("portfolio-ready");

    return () => {
      document.documentElement.classList.remove("portfolio-ready");
    };
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090c] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      
      </div>

      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/[0.06] bg-[#08090c]/70 px-6 py-6 backdrop-blur-2xl lg:px-10">
    
<a
  href="#"
  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] text-lg font-bold text-white transition-all duration-300 hover:scale-110 hover:border-violet-300/70 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)]"
>
  K<span className="text-violet-300 transition-colors duration-300 group-hover:text-white">/</span>
</a>

        <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm text-white/65 shadow-2xl shadow-black/20 backdrop-blur-2xl md:flex">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm transition hover:bg-white/15 sm:block"
        >
          Let&apos;s talk ↗
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {menuOpen && (
          <nav className="absolute right-6 top-20 flex flex-col gap-4 rounded-2xl border border-white/15 bg-[#14151c]/95 p-5 text-sm shadow-xl backdrop-blur-2xl md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      <section id="home" className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-10">
        <div className="mb-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          <span className="text-xs tracking-wide text-white/65">INDEPENDENT VIDEO EDITOR</span>
        </div>

        <p className="mb-4 text-sm tracking-[0.3em] text-white/45">DESIGN. EDITING. CREATION.</p>

        <h1 className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.96] tracking-[-0.065em]">
          Crafting visuals
          <br />
          with <span className="bg-gradient-to-r from-white via-white/80 to-violet-300 bg-clip-text text-transparent">intention.</span>
        </h1>

        <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-7 text-white/50 sm:text-lg">
            I&apos;m KAISER — a creative exploring video editing, motion design
            and visuals that leave an impression.
          </p>
          <a href="#work" className="group flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(167,139,250,0.12)] active:translate-y-0">
            Explore my work
            <span className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-2xl sm:gap-10">
          <div><p className="text-lg font-medium sm:text-2xl">01<span className="text-violet-300">.</span></p><p className="mt-1 text-[10px] tracking-widest text-white/40 sm:text-xs">CREATIVITY</p></div>
          <div><p className="text-lg font-medium sm:text-2xl">02<span className="text-violet-300">.</span></p><p className="mt-1 text-[10px] tracking-widest text-white/40 sm:text-xs">PRECISION</p></div>
          <div><p className="text-lg font-medium sm:text-2xl">03<span className="text-violet-300">.</span></p><p className="mt-1 text-[10px] tracking-widest text-white/40 sm:text-xs">EXPERIMENT</p></div>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-violet-300">SELECTED PROJECTS</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">A few things I&apos;ve made.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/45">A space for experiments, ideas and visual explorations.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} 
className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-violet-300/30 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(139,92,246,0.10)]"
>
              <div className={`relative flex aspect-[5/4] flex-col justify-between overflow-hidden rounded-[22px] bg-gradient-to-br ${project.gradient} p-5`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#ffffff12,transparent_55%)]" />
                <div className="relative flex items-center justify-between text-xs text-white/60">
                  <span>PROJECT / {project.number}</span>
                  <span>↗</span>
                </div>
                <div className="relative self-center text-6xl font-semibold tracking-[-0.08em] text-white/[0.12] transition duration-500 group-hover:scale-110">
                  {project.number}
                </div>
                <span className="relative text-[10px] tracking-[0.2em] text-white/60">{project.category}</span>
              </div>
              <div className="p-5 pb-6">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/45">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      
<section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
  <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl transition-colors duration-300 hover:border-white/15 sm:p-12">
      <p className="mb-6 text-xs tracking-[0.25em] text-violet-300">
        A LITTLE ABOUT ME
      </p>

      <h2 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        Not just edits.
        <br />
        <span className="text-white/40">An entire feeling.</span>
      </h2>

      <p className="mt-7 max-w-xl text-base leading-8 text-white/50">
        I&apos;m KAISER, a video editor passionate about cinematic visuals,
        motion design and creating edits that make every frame count.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {["After Effects", "Topaz AI", "Cinematic Editing", "Motion Design"].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 transition-all duration-300 hover:border-violet-300/30 hover:bg-violet-300/[0.07]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-violet-400/[0.09] to-white/[0.02] p-7 backdrop-blur-2xl transition-all duration-300 hover:border-violet-300/25">
        <span className="text-xs tracking-[0.2em] text-white/40">MY APPROACH</span>
        <h3 className="mt-8 text-2xl font-medium">Every frame matters.</h3>
        <p className="mt-3 text-sm leading-7 text-white/45">
          Thoughtful timing, clean transitions and details that bring a visual story together.
        </p>
      </div>

      <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl transition-all duration-300 hover:border-white/20">
        <span className="text-xs tracking-[0.2em] text-white/40">CURRENTLY EXPLORING</span>
        <h3 className="mt-8 text-2xl font-medium">Motion. Rhythm. Mood.</h3>
        <p className="mt-3 text-sm leading-7 text-white/45">
          Experimenting with cinematic effects, visual pacing and distinctive editing styles.
        </p>
      </div>
    </div>
  </div>
</section>


      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-2xl sm:p-12">
          <p className="text-xs tracking-[0.25em] text-violet-300">HAVE A PROJECT IN MIND?</p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">Let&apos;s make it happen.</h2>
          <p className="mt-4 max-w-lg text-white/50">Open to creative collaborations, fresh ideas and interesting projects.</p>
          <a href="mailto:ka4zerxd@gmail.com" className="mt-8 inline-flex rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white">
            Get in touch ↗
          </a>
          
<div className="mt-6 flex flex-wrap gap-3">
  <a
    href="https://instagram.com/KAISERXAEP"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-white/[0.08] hover:text-white"
  >
    Instagram ↗
  </a>

  <a
    href="https://youtube.com/@HOLLVYNX"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-white/[0.08] hover:text-white"
  >
    YouTube ↗
  </a>
</div>

        </div>
        <div className="flex flex-col gap-3 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KAISER. Made with intention.</p>
          <a href="#home" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
