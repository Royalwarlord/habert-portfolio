import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Code2,
  Palette,
  Wifi,
  ShieldCheck,
  MonitorCog,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Building responsive websites and modern web applications.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    text: "Creating clean visual identities, posters, logos and digital designs.",
  },
  {
    icon: Wifi,
    title: "Networking",
    text: "Wi-Fi setup, network configuration and connectivity solutions.",
  },
  {
    icon: ShieldCheck,
    title: "CCTV Solutions",
    text: "Security camera installation and practical surveillance solutions.",
  },
  {
    icon: MonitorCog,
    title: "ICT Solutions",
    text: "Technology solutions designed around real business and organizational needs.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
          >
            <ArrowLeft size={17} />
            Back Home
          </Link>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              About Me
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology, creativity and
              <span className="block text-sky-400">
                practical solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              I'm Habert Kageni, an ICT professional and aspiring technology
              specialist focused on using technology to solve practical
              problems for individuals, businesses and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-5">

          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-sky-400/20 bg-sky-400/10 text-3xl font-bold text-sky-400">
                HK
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                Habert Kageni
              </h2>

              <p className="mt-2 text-sky-400">
                ICT Professional & Technology Developer
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-sky-400" />
                  Taveta, Kenya
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap size={18} className="text-sky-400" />
                  Diploma in Information Communication Technology
                </div>

                <div className="flex items-center gap-3">
                  <BriefcaseBusiness size={18} className="text-sky-400" />
                  Open to opportunities & projects
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Let's Work Together
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-10 lg:col-span-3">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sky-400">
                My Story
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Building with purpose.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-400">
                <p>
                  My journey in technology has been driven by curiosity,
                  creativity and a desire to understand how technology can
                  make everyday work easier.
                </p>

                <p>
                  I have developed an interest in web development, ICT
                  support, networking, digital design and business technology.
                  These areas allow me to combine technical skills with
                  creative thinking and practical problem solving.
                </p>

                <p>
                  My approach is simple: understand the problem first, then
                  build a solution that is useful, reliable and easy to use.
                  Whether it is a website, business system, network or
                  security solution, the goal is to create technology that
                  serves a real purpose.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-400/10 p-3 text-sky-400">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Education</p>
                  <h3 className="text-xl font-bold">
                    Diploma in Information Communication Technology
                  </h3>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                My ICT training has provided a foundation in computer
                systems, networking, software, databases, web technologies
                and technical support.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sky-400">
                My Approach
              </p>

              <h2 className="text-3xl font-bold">
                Technology should solve problems.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                I believe good technology should not simply look impressive.
                It should make something faster, easier, safer, clearer or
                more accessible. That principle guides the projects I work
                on and the solutions I design.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-white/10 bg-[#0A1625]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A combination of technical and creative skills.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-sky-400/30"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-sky-400/10 p-3 text-sky-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {skill.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Let's Connect
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Have an idea or opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            I'm open to technology projects, collaborations, employment
            opportunities and practical ICT work.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;

