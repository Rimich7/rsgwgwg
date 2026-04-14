import { useState, useEffect, useRef } from "react";

// ─── Icons ──────────────────────────────────────────────────────────────────

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h.878a1 1 0 01.958.713l1.106 3.685a1 1 0 01-.26 1.003L6.59 9.984a16.054 16.054 0 006.426 6.426l2.583-1.592a1 1 0 011.003-.26l3.685 1.106A1 1 0 0121 16.622V17.5A2.5 2.5 0 0118.5 20C9.94 20 3 13.06 3 5.5z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IconTelegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    items: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend & Systems",
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    items: [
      { name: "C++", level: 80 },
      { name: "Python", level: 78 },
      { name: "Node.js", level: 65 },
      { name: "REST API", level: 72 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Linux", level: 70 },
      { name: "Docker", level: 55 },
      { name: "VS Code", level: 95 },
      { name: "CMake", level: 60 },
    ],
  },
];

const PROJECTS = [
  {
    title: "E-Commerce Dashboard",
    tech: ["React", "TypeScript", "Tailwind"],
    description:
      "Full-featured admin dashboard for an online store: analytics, order management, inventory tracking. Responsive SPA with real-time charts.",
    color: "from-blue-600 to-cyan-500",
    icon: "🛒",
    stars: 12,
  },
  {
    title: "Chat Application",
    tech: ["React", "Node.js", "WebSocket"],
    description:
      "Real-time messenger with rooms, private messages and file sharing. Used WebSockets for instant communication and JWT for auth.",
    color: "from-violet-600 to-purple-500",
    icon: "💬",
    stars: 8,
  },
  {
    title: "Algorithms Visualizer",
    tech: ["C++", "Python", "Qt"],
    description:
      "Interactive tool for visualizing sorting and pathfinding algorithms. Built with Qt/C++ for GUI and Python scripts for data generation.",
    color: "from-emerald-600 to-teal-500",
    icon: "🔬",
    stars: 21,
  },
  {
    title: "Telegram Bot",
    tech: ["Python", "aiogram", "SQLite"],
    description:
      "Multifunctional Telegram bot with reminders, weather forecasts and custom commands. Async architecture on aiogram.",
    color: "from-orange-500 to-amber-400",
    icon: "🤖",
    stars: 15,
  },
];

const EDUCATION = [
  {
    year: "2022 — present",
    degree: "Bachelor's in Computer Science",
    school: "University of Information Technologies",
    icon: "🎓",
  },
  {
    year: "2023",
    degree: "React — The Complete Guide",
    school: "Udemy · Maximilian Schwarzmüller",
    icon: "📜",
  },
  {
    year: "2023",
    degree: "Modern C++: From Beginner to Expert",
    school: "Online Course",
    icon: "📜",
  },
  {
    year: "2024",
    degree: "Python for Data Science & Automation",
    school: "Stepik",
    icon: "📜",
  },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Components ──────────────────────────────────────────────────────────────

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="text-slate-400 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: (typeof SKILLS)[0] }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`border rounded-2xl p-6 ${skill.bg} backdrop-blur-sm transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className={`text-base font-bold mb-5 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
        {skill.category}
      </h3>
      {skill.items.map((item, i) => (
        <SkillBar key={item.name} name={item.name} level={item.level} color={skill.color} delay={i * 100} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
          {project.icon}
        </div>
        <div className="flex items-center gap-1 text-amber-400 text-sm">
          <IconStar />
          <span className="font-mono">{project.stars}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 mt-3">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`text-xs font-mono px-2.5 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 text-white/80 border border-white/10`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent" />
    </div>
  );
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-xl" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-mono text-sm text-blue-400 font-bold tracking-widest">RK.dev</span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-blue-300"
              >
                {link}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-2xl font-semibold text-slate-300 hover:text-blue-400 transition-colors"
          >
            {link}
          </button>
        ))}
      </div>
    </>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Kol'chugin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400">
              Roman
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-400 font-medium mb-6 h-8">
            <TypeWriter
              texts={[
                "Fullstack Developer",
                "React Enthusiast",
                "C++ Programmer",
                "Python Coder",
                "Open-Source Lover",
              ]}
            />
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            20-year-old fullstack developer passionate about building fast, beautiful, and maintainable software.
            I work across the full stack — from React UIs to system-level C++ and Python automation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </button>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-10 justify-center lg:justify-start">
            {["React", "TypeScript", "C++", "Python", "Node.js", "Git"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono bg-slate-800 border border-slate-700 text-slate-400 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 relative">
            <img
              src="/avatar.jpg"
              alt="Roman Kolchugin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
          {/* Floating badges */}
          <div className="absolute -bottom-4 -left-6 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm font-mono text-blue-400 shadow-xl">
            &lt;React /&gt;
          </div>
          <div className="absolute -top-4 -right-6 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm font-mono text-violet-400 shadow-xl">
            C++ 20
          </div>
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm font-mono text-emerald-400 shadow-xl">
            Python 🐍
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </div>

        {/* Additional chips */}
        <div className="mt-10 p-6 bg-slate-800/40 border border-slate-700/40 rounded-2xl">
          <p className="text-slate-500 text-xs font-mono mb-4">// also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Zustand", "Redux", "Vite", "Webpack", "FastAPI", "Express",
              "PostgreSQL", "MongoDB", "Figma", "Bash", "STL", "OpenCV",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs font-mono bg-slate-700/50 border border-slate-600/50 text-slate-400 rounded-lg hover:text-slate-200 hover:border-slate-400 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/Rimich23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-all duration-200 font-medium"
          >
            <IconGithub />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const { ref, inView } = useInView();
  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Education & Courses</SectionTitle>
        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />
          <div className="space-y-8">
            {EDUCATION.map((item, i) => (
              <div
                key={i}
                className={`flex gap-8 transition-all duration-700 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-2 border-slate-900 mt-2 shadow-lg shadow-blue-500/30 relative z-10" />
                </div>
                <div className="flex-1 pb-2">
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-colors">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-xs font-mono text-slate-500">{item.year}</span>
                    </div>
                    <h3 className="text-white font-semibold text-base">{item.degree}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      icon: <IconPhone />,
      label: "Phone",
      value: "+7 918 009 46 49",
      copyValue: "+79180094649",
      href: "tel:+79180094649",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40",
    },
    {
      icon: <IconMail />,
      label: "Email",
      value: "fustroman23@mail.ru",
      copyValue: "fustroman23@mail.ru",
      href: "mailto:fustroman23@mail.ru",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
    },
    {
      icon: <IconTelegram />,
      label: "Telegram",
      value: "@Rimich23",
      copyValue: "@Rimich23",
      href: "https://t.me/Rimich23",
      color: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20 hover:border-sky-500/40",
    },
    {
      icon: <IconGithub />,
      label: "GitHub",
      value: "github.com/Rimich23",
      copyValue: "https://github.com/Rimich23",
      href: "https://github.com/Rimich23",
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20 hover:border-violet-500/40",
    },
  ];

  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Contact</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-2xl font-bold text-white mb-4">Let's build something together 🚀</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm actively looking for my first commercial project or internship.
              Whether it's a frontend task, a backend service, or a full product — I'm in.
              Feel free to reach out through any channel below!
            </p>

            <div className="space-y-4">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${c.bg} transition-all duration-200 cursor-pointer group`}
                  onClick={() => copy(c.copyValue, c.label)}
                >
                  <div className={`${c.color} flex-shrink-0`}>{c.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 font-mono">{c.label}</p>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`${c.color} font-medium text-sm hover:underline truncate block`}
                    >
                      {c.value}
                    </a>
                  </div>
                  <span className="text-slate-600 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    {copied === c.label ? "✓ copied!" : "copy"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Code card */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-500 text-xs font-mono ml-2">contact.ts</span>
              </div>
              <pre className="p-6 text-sm font-mono overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-400">{"{"}</span>{"\n"}
                  {"  "}<span className="text-emerald-300">name</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">"Roman Kolchugin"</span>
                  <span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-emerald-300">age</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-orange-400">20</span>
                  <span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-emerald-300">role</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">"Fullstack Developer"</span>
                  <span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-emerald-300">stack</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-400">[</span>{"\n"}
                  {"    "}<span className="text-amber-300">"React"</span>
                  <span className="text-slate-400">,</span>{" "}
                  <span className="text-amber-300">"C++"</span>
                  <span className="text-slate-400">,</span>{" "}
                  <span className="text-amber-300">"Python"</span>
                  <span className="text-slate-400">,</span>{"\n"}
                  {"    "}<span className="text-amber-300">"TypeScript"</span>
                  <span className="text-slate-400">,</span>{" "}
                  <span className="text-amber-300">"Node.js"</span>{"\n"}
                  {"  "}<span className="text-slate-400">]</span>
                  <span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-emerald-300">openToWork</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-orange-400">true</span>
                  <span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-emerald-300">telegram</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">"@Rimich23"</span>{"\n"}
                  <span className="text-slate-400">{"}"}</span>{"\n\n"}
                  <span className="text-slate-500">// Let's collaborate! 🚀</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-slate-600 text-sm font-mono">© 2025 Kol'chugin Roman</span>
        <div className="flex items-center gap-4">
          <a href="https://t.me/Rimich23" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-400 transition-colors">
            <IconTelegram />
          </a>
          <a href="https://github.com/Rimich23" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-400 transition-colors">
            <IconGithub />
          </a>
          <a href="mailto:fustroman23@mail.ru" className="text-slate-600 hover:text-blue-400 transition-colors">
            <IconMail />
          </a>
        </div>
        <span className="text-slate-700 text-xs font-mono">Built with React + Vite + Tailwind</span>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-[Inter,sans-serif] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
