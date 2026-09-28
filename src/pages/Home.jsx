import {
  ArrowRight,
  Code2,
  Download,
  Globe,
  MonitorCog,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Briefcase,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#07111F] text-[#F8FAFC]">
      <Navbar />

      {/* HERO */}
      <main>
        <section className="relative isolate overflow-hidden">
          {/* Background glow */}
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-3xl" />
          <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Grid background */}
          <div className="absolute inset-0 -z-10 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
            
            {/* LEFT SIDE */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-4 py-2 text-sm text-[#38BDF8]">
                <Sparkles size={16} />
                <span>Available for opportunities & projects</span>
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
                Web Developer & ICT Solutions Specialist
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Building Digital
                <span className="block text-[#38BDF8]">
                  Solutions That
                </span>
                Solve Real Problems.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#94A3B8] sm:text-xl">
                I design and develop modern websites, web applications and
                practical ICT solutions that help businesses, organizations
                and individuals work better, grow faster and serve people
                more effectively.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3.5 font-semibold text-[#07111F] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38BDF8]/20"
                >
                  View My Work
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-white/10"
                >
                  Hire Me
                </a>

                <a
                  href="#resume"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 font-medium text-[#94A3B8] transition hover:text-white"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>

              {/* QUICK STATS */}
              <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-2xl font-bold text-white">Web</p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Development
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">ICT</p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Solutions
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">Real</p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Problem Solving
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto max-w-lg">
                
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-[#38BDF8]/10 blur-3xl" />

                {/* Main card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1A2B]/80 p-8 shadow-2xl backdrop-blur-xl">
                  
                  {/* Window header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/70" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                      <span className="h-3 w-3 rounded-full bg-green-400/70" />
                    </div>

                    <Code2 size={20} className="text-[#38BDF8]" />
                  </div>

                  {/* Code-style visual */}
                  <div className="py-8 font-mono text-sm leading-8">
                    <p className="text-[#94A3B8]">
                      <span className="text-[#38BDF8]">const</span>{" "}
                      developer = {"{"}
                    </p>

                    <p className="pl-6 text-white">
                      name:{" "}
                      <span className="text-[#38BDF8]">
                        "Habert Kageni"
                      </span>
                      ,
                    </p>

                    <p className="pl-6 text-white">
                      role:{" "}
                      <span className="text-[#38BDF8]">
                        "Web Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-6 text-white">
                      focus:{" "}
                      <span className="text-[#38BDF8]">
                        "Real Problems"
                      </span>
                      ,
                    </p>

                    <p className="pl-6 text-white">
                      passion:{" "}
                      <span className="text-[#38BDF8]">
                        "Technology"
                      </span>
                    </p>

                    <p className="text-[#94A3B8]">{"}"}</p>
                  </div>

                  {/* Solution cards */}
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <Globe className="mb-3 text-[#38BDF8]" size={22} />
                      <p className="font-semibold">Websites</p>
                      <p className="mt-1 text-sm text-[#94A3B8]">
                        Modern digital experiences
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <Code2 className="mb-3 text-[#38BDF8]" size={22} />
                      <p className="font-semibold">Web Applications</p>
                      <p className="mt-1 text-sm text-[#94A3B8]">
                        Practical business systems
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <MonitorCog
                        className="mb-3 text-[#38BDF8]"
                        size={22}
                      />
                      <p className="font-semibold">ICT Solutions</p>
                      <p className="mt-1 text-sm text-[#94A3B8]">
                        Technology that works
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0D1A2B] px-5 py-4 shadow-xl">
                  <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                    Mission
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Build. Solve. Improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION SECTION */}
       {/* ABOUT SECTION */}
<section
  id="about"
  className="border-t border-white/10 bg-[#0A1626]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
          About Me
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          I turn ideas and everyday challenges into practical digital
          solutions.
        </h2>

        <div className="mt-7 space-y-5 text-lg leading-8 text-[#94A3B8]">
          <p>
            I'm <span className="font-semibold text-white">Habert Kageni</span>,
            a Web Developer and ICT Solutions Specialist focused on creating
            useful technology for real-world needs.
          </p>

          <p>
            I build modern websites, web applications and business systems
            designed around the people and organizations that use them.
            My goal is not simply to write code, but to understand a problem,
            design a solution and turn it into something practical.
          </p>

          <p>
            From business websites and e-commerce platforms to management
            systems and ICT support, I enjoy using technology to make work
            easier, improve digital presence and create opportunities.
          </p>
        </div>

        <div className="mt-9">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/5 px-6 py-3.5 font-semibold text-[#38BDF8] transition hover:-translate-y-1 hover:bg-[#38BDF8]/10"
          >
            Explore My Work
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-[#38BDF8]/5 blur-2xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-[#0D1A2B] p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
            My Approach
          </p>

          <div className="mt-8 space-y-7">

            <div className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <Code2 size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Understand
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
                  I start by understanding the problem, users and goals
                  behind a project.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <Sparkles size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Design
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
                  I turn requirements into clean, intuitive and modern
                  digital experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <MonitorCog size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Build
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
                  I develop reliable solutions using appropriate modern
                  technologies.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <Globe size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Improve
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
                  I focus on solutions that can grow, adapt and continue
                  delivering value.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SERVICES SECTION */}
<section
  id="services"
  className="border-t border-white/10 bg-[#07111F]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* SECTION HEADER */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
        What I Offer
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Digital solutions built around your needs.
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
        Whether you need a professional online presence, a custom business
        system or practical ICT support, I work to turn your requirements
        into technology that is useful and easy to work with.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* SERVICE 1 */}
      <div className="group rounded-2xl border border-white/10 bg-[#0D1A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-xl hover:shadow-[#38BDF8]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <Globe size={24} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Website Development
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Modern, responsive websites for businesses, organizations,
          professionals and personal brands.
        </p>

        <div className="mt-6 text-sm font-medium text-[#38BDF8]">
          Business Websites · Portfolio · Organization Sites
        </div>
      </div>

      {/* SERVICE 2 */}
      <div className="group rounded-2xl border border-white/10 bg-[#0D1A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-xl hover:shadow-[#38BDF8]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <Code2 size={24} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Web Applications
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Custom web-based applications designed to simplify processes,
          manage information and improve productivity.
        </p>

        <div className="mt-6 text-sm font-medium text-[#38BDF8]">
          Dashboards · Management Systems · Custom Apps
        </div>
      </div>

      {/* SERVICE 3 */}
      <div className="group rounded-2xl border border-white/10 bg-[#0D1A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-xl hover:shadow-[#38BDF8]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <Sparkles size={24} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          E-Commerce Solutions
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Online stores that help businesses showcase products, receive
          orders and build a stronger digital sales presence.
        </p>

        <div className="mt-6 text-sm font-medium text-[#38BDF8]">
          Online Stores · Payments · Product Management
        </div>
      </div>

      {/* SERVICE 4 */}
      <div className="group rounded-2xl border border-white/10 bg-[#0D1A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-xl hover:shadow-[#38BDF8]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <MonitorCog size={24} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Business Management Systems
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Practical systems that help businesses manage orders, sales,
          inventory, customers and daily operations.
        </p>

        <div className="mt-6 text-sm font-medium text-[#38BDF8]">
          POS · Inventory · Orders · Reports
        </div>
      </div>

      {/* SERVICE 5 */}
      <div className="group rounded-2xl border border-white/10 bg-[#0D1A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-xl hover:shadow-[#38BDF8]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <MonitorCog size={24} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          ICT Support & Solutions
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Practical technology support including computer setup,
          troubleshooting, networking and system assistance.
        </p>

        <div className="mt-6 text-sm font-medium text-[#38BDF8]">
          IT Support · Networking · Troubleshooting
        </div>
      </div>

      {/* SERVICE 6 */}
      <div className="group rounded-2xl border border-white/10 bg-[#0D1A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-xl hover:shadow-[#38BDF8]/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <ArrowRight size={24} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Custom Digital Solutions
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Have a problem that doesn't fit into a standard service? Let's
          explore the problem and build a solution around it.
        </p>

        <div className="mt-6 text-sm font-medium text-[#38BDF8]">
          Custom Projects · Automation · Problem Solving
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-14 rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 p-8 text-center">
      <h3 className="text-2xl font-bold">
        Have a project in mind?
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-[#94A3B8]">
        Tell me what you are trying to achieve and we can explore a
        practical digital solution together.
      </p>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3.5 font-semibold text-[#07111F] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38BDF8]/20"
      >
        Start a Project
        <ArrowRight size={18} />
      </a>
    </div>

  </div>
</section>

{/* PROJECTS SECTION */}
<section
  id="projects"
  className="border-t border-white/10 bg-[#0A1626]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* SECTION HEADER */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
          Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Projects built to solve real problems.
        </h2>

        <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
          A selection of digital projects demonstrating how I approach
          different business, organizational and community needs.
        </p>
      </div>

      <a
        href="/projects"
        className="inline-flex items-center gap-2 font-semibold text-[#38BDF8] transition hover:gap-3"
      >
        View All Projects
        <ArrowRight size={18} />
      </a>
    </div>

    {/* PROJECT GRID */}
    <div className="mt-14 grid gap-6 lg:grid-cols-2">

      {/* PROJECT 1 */}
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D1A2B] transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30">

        {/* PROJECT VISUAL */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#10243A] to-[#07111F]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#38BDF8] blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative text-center">
            <Globe
              size={58}
              strokeWidth={1.2}
              className="mx-auto text-[#38BDF8]"
            />

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Community Platform
            </p>
          </div>

          <span className="absolute right-5 top-5 rounded-full border border-[#38BDF8]/20 bg-[#07111F]/80 px-3 py-1 text-xs font-medium text-[#38BDF8]">
            Web Development
          </span>
        </div>

        {/* PROJECT CONTENT */}
        <div className="p-7">
          <h3 className="text-2xl font-bold"><a href="projects/rotary-taveta">
            Rotary Club of Taveta Website
          </a></h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            A professional community-impact platform designed to showcase
            projects, tell impact stories, attract partners and strengthen
            the organization's digital presence.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Vite", "Tailwind CSS", "Responsive Design"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#CBD5E1]"
                >
                  {technology}
                </span>
              )
            )}
          </div>

          <div className="mt-7">
            <a
              href="/projects/rotary-taveta"
              className="inline-flex items-center gap-2 font-semibold text-[#38BDF8] transition hover:gap-3"
            >
              View Case Study
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </article>

      {/* PROJECT 2 */}
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D1A2B] transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30">

        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#17263A] to-[#07111F]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#38BDF8] blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative text-center">
            <MonitorCog
              size={58}
              strokeWidth={1.2}
              className="mx-auto text-[#38BDF8]"
            />

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Business System
            </p>
          </div>

          <span className="absolute right-5 top-5 rounded-full border border-[#38BDF8]/20 bg-[#07111F]/80 px-3 py-1 text-xs font-medium text-[#38BDF8]">
            Web Application
          </span>
        </div>

        <div className="p-7">
          <h3 className="text-2xl font-bold">
            Drop Zone Lounge & Grill System
          </h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            A combined website and business management concept for handling
            table orders, kitchen and bar workflows, payments, stock and
            day-to-day restaurant operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "POS", "Inventory"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#CBD5E1]"
                >
                  {technology}
                </span>
              )
            )}
          </div>

          <div className="mt-7">
            <a
              href="/projects/drop-zone"
              className="inline-flex items-center gap-2 font-semibold text-[#38BDF8] transition hover:gap-3"
            >
              View Case Study
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </article>

      {/* PROJECT 3 */}
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D1A2B] transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30">

        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#10243A] to-[#07111F]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#38BDF8] blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative text-center">
            <Globe
              size={58}
              strokeWidth={1.2}
              className="mx-auto text-[#38BDF8]"
            />

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              E-Commerce
            </p>
          </div>

          <span className="absolute right-5 top-5 rounded-full border border-[#38BDF8]/20 bg-[#07111F]/80 px-3 py-1 text-xs font-medium text-[#38BDF8]">
            Online Store
          </span>
        </div>

        <div className="p-7">
          <h3 className="text-2xl font-bold">
            E-Commerce Store
          </h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            An online shopping platform designed to help a business present
            products professionally, manage inventory and receive customer
            orders digitally.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "Payments"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#CBD5E1]"
                >
                  {technology}
                </span>
              )
            )}
          </div>

          <div className="mt-7">
            <a
              href="/projects/ecommerce"
              className="inline-flex items-center gap-2 font-semibold text-[#38BDF8] transition hover:gap-3"
            >
              View Case Study
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </article>

      {/* PROJECT 4 */}
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D1A2B] transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/30">

        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#17263A] to-[#07111F]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#38BDF8] blur-3xl" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative text-center">
            <Code2
              size={58}
              strokeWidth={1.2}
              className="mx-auto text-[#38BDF8]"
            />

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Custom Application
            </p>
          </div>

          <span className="absolute right-5 top-5 rounded-full border border-[#38BDF8]/20 bg-[#07111F]/80 px-3 py-1 text-xs font-medium text-[#38BDF8]">
            Custom System
          </span>
        </div>

        <div className="p-7">
          <h3 className="text-2xl font-bold">
            Business Management Platform
          </h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            A customizable digital platform concept for helping businesses
            organize operations, manage information and make better use of
            their data.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "REST API"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#CBD5E1]"
                >
                  {technology}
                </span>
              )
            )}
          </div>

          <div className="mt-7">
            <a
              href="/projects/business-management"
              className="inline-flex items-center gap-2 font-semibold text-[#38BDF8] transition hover:gap-3"
            >
              View Case Study
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </article>

    </div>

    {/* BOTTOM CTA */}
    <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#0D1A2B] p-8 text-center md:flex-row md:text-left">
      <div>
        <h3 className="text-2xl font-bold">
          Want to see what I can build for you?
        </h3>

        <p className="mt-2 text-[#94A3B8]">
          Let's turn your idea or business challenge into a practical
          digital solution.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3.5 font-semibold text-[#07111F] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38BDF8]/20"
      >
        Start a Project
        <ArrowRight size={18} />
      </a>
    </div>

  </div>
</section>

{/* SKILLS & CAPABILITIES SECTION */}
<section
  id="skills"
  className="border-t border-white/10 bg-[#07111F]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* HEADER */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
        Skills & Capabilities
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Technology, infrastructure and creativity.
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
        My work combines software development, ICT infrastructure and
        creative digital design to provide practical solutions from
        concept to implementation.
      </p>
    </div>

    {/* SKILL CATEGORIES */}
    <div className="mt-14 grid gap-6 lg:grid-cols-3">

      {/* DEVELOPMENT */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <Code2 size={28} />
        </div>

        <h3 className="mt-7 text-2xl font-bold">
          Web & Software
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Building responsive websites, web applications and digital
          systems designed around real business and organizational needs.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "REST APIs",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#CBD5E1]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ICT & INFRASTRUCTURE */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <MonitorCog size={28} />
        </div>

        <h3 className="mt-7 text-2xl font-bold">
          ICT & Infrastructure
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Supporting the technology behind homes, businesses and
          organizations through practical installation, configuration
          and troubleshooting.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Computer Support",
            "Wi-Fi Installation",
            "Network Setup",
            "Network Troubleshooting",
            "CCTV Installation",
            "CCTV Configuration",
            "System Setup",
            "ICT Support",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#CBD5E1]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CREATIVE DESIGN */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8]">
          <Sparkles size={28} />
        </div>

        <h3 className="mt-7 text-2xl font-bold">
          Graphic & Digital Design
        </h3>

        <p className="mt-3 leading-7 text-[#94A3B8]">
          Creating visual materials that help businesses, organizations
          and individuals communicate their ideas and build a strong
          digital presence.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Graphic Design",
            "Logo Design",
            "Posters",
            "Flyers",
            "Social Media Graphics",
            "Digital Branding",
            "Marketing Materials",
            "UI Design",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#CBD5E1]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* TECHNOLOGY STACK */}
    <div className="mt-16 rounded-3xl border border-white/10 bg-[#0D1A2B] p-8 lg:p-10">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
            Technology Stack
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Tools I use to bring ideas to life.
          </h3>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-5 py-3 font-semibold text-[#07111F] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38BDF8]/20"
        >
          Work With Me
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {[
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Git",
          "GitHub",
          "Vercel",
          "REST APIs",
        ].map((technology) => (
          <div
            key={technology}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-medium text-[#CBD5E1] transition hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5 hover:text-white"
          >
            {technology}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

{/* RESUME / CAREER SECTION */}
<section
  id="resume"
  className="border-t border-white/10 bg-[#0A1626]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* HEADER */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
        My Journey
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Education, experience and continuous growth.
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
        My journey in ICT combines formal education, hands-on technical
        experience, leadership and continuous practical learning.
      </p>
    </div>

    {/* RESUME GRID */}
    <div className="mt-14 grid gap-8 lg:grid-cols-2">

      {/* EXPERIENCE */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
            <MonitorCog size={24} />
          </div>

          <div>
            <p className="text-sm text-[#38BDF8]">
              Practical Experience
            </p>
            <h3 className="text-2xl font-bold">
              ICT Support
            </h3>
          </div>
        </div>

        <div className="mt-8 border-l border-white/10 pl-6">
          <div className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#38BDF8]" />

            <p className="text-sm font-medium text-[#38BDF8]">
              02 Sep 2024 — 22 Nov 2024
            </p>

            <h4 className="mt-2 text-lg font-bold text-white">
              ICT Attachment
            </h4>

            <p className="mt-1 text-sm text-[#94A3B8]">
              County Government of Taita Taveta
            </p>

            <p className="mt-4 leading-7 text-[#94A3B8]">
              Gained practical experience supporting users, computers,
              software and ICT infrastructure in a working organizational
              environment.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#CBD5E1]">
              <li>• Software and operating system installation</li>
              <li>• Revenue Management System support</li>
              <li>• Computer and equipment troubleshooting</li>
              <li>• User support and training</li>
              <li>• Windows and Outlook support</li>
              <li>• Printer and peripheral support</li>
              <li>• Basic networking and faulty cable diagnosis</li>
              <li>• Backup and recovery support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
            <Code2 size={24} />
          </div>

          <div>
            <p className="text-sm text-[#38BDF8]">
              Education
            </p>
            <h3 className="text-2xl font-bold">
              Academic Background
            </h3>
          </div>
        </div>

        <div className="mt-8 space-y-8">

          {/* COLLEGE */}
          <div className="border-l border-[#38BDF8]/30 pl-6">
            <p className="text-sm font-medium text-[#38BDF8]">
              2023 — 2026
            </p>

            <h4 className="mt-2 text-lg font-bold">
              Diploma in Information Communication Technology
            </h4>

            <p className="mt-1 text-sm text-[#94A3B8]">
              Taveta Technical and Vocational College
            </p>
          </div>

          {/* HIGH SCHOOL */}
          <div className="border-l border-white/10 pl-6">
            <p className="text-sm font-medium text-[#38BDF8]">
              Completed 2022
            </p>

            <h4 className="mt-2 text-lg font-bold">
              Secondary Education
            </h4>

            <p className="mt-1 text-sm text-[#94A3B8]">
              St. Mary's High School Lushangonyi
            </p>
          </div>

          {/* PRIMARY */}
          <div className="border-l border-white/10 pl-6">
            <p className="text-sm font-medium text-[#38BDF8]">
              Completed 2018
            </p>

            <h4 className="mt-2 text-lg font-bold">
              Primary Education
            </h4>

            <p className="mt-1 text-sm text-[#94A3B8]">
              Sowene Primary School
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* LEADERSHIP + TRAINING */}
    <div className="mt-8 grid gap-8 lg:grid-cols-2">

      {/* LEADERSHIP */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
            <Sparkles size={24} />
          </div>

          <div>
            <p className="text-sm text-[#38BDF8]">
              Leadership
            </p>
            <h3 className="text-2xl font-bold">
              Beyond Technology
            </h3>
          </div>
        </div>

        <p className="mt-5 leading-7 text-[#94A3B8]">
          Leadership has been an important part of my personal and
          professional development, giving me experience in responsibility,
          teamwork, communication and organizing people around shared goals.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Primary School President",
            "Secondary School President",
            "College Secretary General",
            "Community Leadership",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#CBD5E1]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* TRAINING */}
      <div className="rounded-3xl border border-white/10 bg-[#0D1A2B] p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
            <Download size={24} />
          </div>

          <div>
            <p className="text-sm text-[#38BDF8]">
              Continuous Learning
            </p>
            <h3 className="text-2xl font-bold">
              Training & Development
            </h3>
          </div>
        </div>

        <p className="mt-5 leading-7 text-[#94A3B8]">
          I continue developing my technical and professional skills through
          practical projects, digital training and hands-on learning.
        </p>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="font-semibold">
              Ajira Digital
            </p>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Digital skills training
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="font-semibold">
              Practical Web Development
            </p>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Continuous project-based learning
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="font-semibold">
              ICT Support & Infrastructure
            </p>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Hands-on technical development
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CAREER FOCUS */}
    <div className="mt-8 rounded-3xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 p-8 lg:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
            Career Focus
          </p>

          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Open to ICT, web development and technology opportunities.
          </h3>

          <p className="mt-4 leading-7 text-[#94A3B8]">
            I am interested in opportunities where I can apply my ICT
            knowledge, strengthen my technical experience, contribute to
            real projects and continue growing as a technology professional.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3.5 font-semibold text-[#07111F] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38BDF8]/20"
        >
          Discuss an Opportunity
          <ArrowRight size={18} />
        </a>

      </div>
    </div>

    {/* RESUME BUTTON */}
    <div className="mt-10 text-center">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-[#38BDF8]/30 hover:bg-white/10"
      >
        <Download size={18} />
        Download Resume
      </button>

      <p className="mt-3 text-xs text-[#64748B]">
        Resume PDF will be connected here once the final CV is ready.
      </p>
    </div>

  </div>
</section>

{/* CONTACT / HIRE ME SECTION */}
<section
  id="contact"
  className="border-t border-white/10 bg-[#07111F]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* HEADER */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
        Let's Work Together
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Have a project, opportunity or idea?
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
        Whether you are looking for a web developer, ICT support,
        a custom digital solution or someone to join your team,
        I'd love to hear from you.
      </p>
    </div>

    <div className="mt-14 grid gap-8 lg:grid-cols-5">

      {/* CONTACT INFORMATION */}
      <div className="lg:col-span-2">

        <div className="rounded-3xl border border-white/10 bg-[#0A1626] p-8">

          <h3 className="text-2xl font-bold">
            Get In Touch
          </h3>

          <p className="mt-3 leading-7 text-[#94A3B8]">
            Let's discuss what you need and find a practical way
            to turn your idea into a working solution.
          </p>

          <div className="mt-8 space-y-5">

            {/* EMAIL */}
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#38BDF8]/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B]">
                  Email
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  your.email@example.com
                </p>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+254700000000"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#38BDF8]/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B]">
                  Phone
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  +254 700 000 000
                </p>
              </div>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B]">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Kenya
                </p>
              </div>
            </div>

          </div>

          {/* AVAILABILITY */}
          <div className="mt-8 rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/5 p-5">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-400/30" />

              <p className="font-semibold text-white">
                Available for opportunities
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
              Open to employment opportunities, freelance projects,
              collaborations and technology partnerships.
            </p>
          </div>

        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="lg:col-span-3">

        <div className="rounded-3xl border border-white/10 bg-[#0A1626] p-8 lg:p-10">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
              <MessageSquare size={23} />
            </div>

            <div>
              <p className="text-sm text-[#38BDF8]">
                Start a Conversation
              </p>

              <h3 className="text-2xl font-bold">
                Tell me what you need
              </h3>
            </div>
          </div>

          <form className="mt-8 space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#CBD5E1]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#07111F] px-4 py-3.5 text-white outline-none transition placeholder:text-[#475569] focus:border-[#38BDF8]/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#CBD5E1]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#07111F] px-4 py-3.5 text-white outline-none transition placeholder:text-[#475569] focus:border-[#38BDF8]/50"
                />
              </div>

            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[#CBD5E1]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="+254 7XX XXX XXX"
                className="w-full rounded-xl border border-white/10 bg-[#07111F] px-4 py-3.5 text-white outline-none transition placeholder:text-[#475569] focus:border-[#38BDF8]/50"
              />
            </div>

            {/* TYPE */}
            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium text-[#CBD5E1]"
              >
                What can I help you with?
              </label>

              <select
                id="projectType"
                className="w-full rounded-xl border border-white/10 bg-[#07111F] px-4 py-3.5 text-white outline-none transition focus:border-[#38BDF8]/50"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="website">
                  Website Development
                </option>

                <option value="web-app">
                  Web Application
                </option>

                <option value="ecommerce">
                  E-Commerce Website
                </option>

                <option value="business-system">
                  Business Management System
                </option>

                <option value="ict-support">
                  ICT Support
                </option>

                <option value="network">
                  Wi-Fi / Network Installation
                </option>

                <option value="cctv">
                  CCTV Installation
                </option>

                <option value="graphic-design">
                  Graphic Design
                </option>

                <option value="employment">
                  Employment Opportunity
                </option>

                <option value="partnership">
                  Partnership / Collaboration
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            {/* BUDGET */}
            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-medium text-[#CBD5E1]"
              >
                Budget Range
              </label>

              <select
                id="budget"
                className="w-full rounded-xl border border-white/10 bg-[#07111F] px-4 py-3.5 text-white outline-none transition focus:border-[#38BDF8]/50"
                defaultValue=""
              >
                <option value="" disabled>
                  Select budget range
                </option>

                <option value="under-10k">
                  Below KSh 10,000
                </option>

                <option value="10k-30k">
                  KSh 10,000 – 30,000
                </option>

                <option value="30k-60k">
                  KSh 30,000 – 60,000
                </option>

                <option value="60k-100k">
                  KSh 60,000 – 100,000
                </option>

                <option value="100k-plus">
                  KSh 100,000+
                </option>

                <option value="discuss">
                  Let's discuss
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#CBD5E1]"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell me about your project, opportunity or idea..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#07111F] px-4 py-3.5 text-white outline-none transition placeholder:text-[#475569] focus:border-[#38BDF8]/50"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-4 font-semibold text-[#07111F] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#38BDF8]/20"
            >
              Send Message
              <ArrowRight size={18} />
            </button>

            <p className="text-center text-xs text-[#64748B]">
              I'll get back to you as soon as possible.
            </p>

          </form>
        </div>
      </div>
    </div>

    {/* OPPORTUNITY CARDS */}
    <div className="mt-10 grid gap-5 md:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-[#0A1626] p-6">
        <Briefcase className="text-[#38BDF8]" size={22} />

        <h4 className="mt-4 font-bold">
          Employment
        </h4>

        <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
          Looking for an ICT or technology opportunity where I can
          contribute and continue growing.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0A1626] p-6">
        <Code2 className="text-[#38BDF8]" size={22} />

        <h4 className="mt-4 font-bold">
          Projects
        </h4>

        <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
          Have an idea for a website, application or business system?
          Let's build it.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0A1626] p-6">
        <Users className="text-[#38BDF8]" size={22} />

        <h4 className="mt-4 font-bold">
          Collaboration
        </h4>

        <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
          Open to partnerships, collaborations and opportunities to
          create useful technology solutions.
        </p>
      </div>

    </div>

  </div>
</section>


      </main>

      <Footer />
    </div>
  );
}

export default Home;