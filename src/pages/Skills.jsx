import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Database,
  Palette,
  Wifi,
  ShieldCheck,
  MonitorCog,
  Server,
  GitBranch,
  Globe,
  Wrench,
  Layers3,
} from "lucide-react";
import Navbar from "../components/Navbar";

const skillGroups = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building modern and responsive digital experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Responsive Design",
      "REST APIs",
      "UI Development",
    ],
  },
  {
    icon: Database,
    title: "Databases & Systems",
    description: "Designing structured systems for storing and managing information.",
    skills: [
      "PostgreSQL",
      "Database Design",
      "CRUD Systems",
      "Business Systems",
      "Data Management",
      "API Integration",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visual content for businesses and organizations.",
    skills: [
      "Logo Design",
      "Poster Design",
      "Branding",
      "Digital Graphics",
      "Social Media Design",
      "Visual Layout",
    ],
  },
  {
    icon: Wifi,
    title: "Networking",
    description: "Setting up and supporting reliable network infrastructure.",
    skills: [
      "Wi-Fi Setup",
      "LAN Networking",
      "Router Configuration",
      "Access Points",
      "Ethernet Cabling",
      "Network Troubleshooting",
    ],
  },
  {
    icon: ShieldCheck,
    title: "CCTV & Security",
    description: "Supporting practical surveillance and security technology.",
    skills: [
      "CCTV Installation",
      "Camera Setup",
      "DVR/NVR Configuration",
      "Remote Viewing",
      "Camera Positioning",
      "System Troubleshooting",
    ],
  },
  {
    icon: MonitorCog,
    title: "ICT Support",
    description: "Helping users and organizations solve everyday technology problems.",
    skills: [
      "Computer Support",
      "Software Installation",
      "Hardware Troubleshooting",
      "System Configuration",
      "Technical Support",
      "ICT Consultation",
    ],
  },
];

const tools = [
  { icon: Globe, name: "React & Vite", text: "Modern frontend development" },
  { icon: Server, name: "Node.js", text: "Backend and API development" },
  { icon: Database, name: "PostgreSQL", text: "Relational database systems" },
  { icon: GitBranch, name: "Git & GitHub", text: "Version control and collaboration" },
  { icon: Wrench, name: "ICT Tools", text: "System setup and troubleshooting" },
  { icon: Layers3, name: "UI Systems", text: "Interfaces and business workflows" },
];

function Skills() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Skills & Expertise
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Technical skills with a
            <span className="block text-sky-400">
              practical approach.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            My skill set combines software development, databases, networking,
            security, design and ICT support to create practical technology
            solutions.
          </p>
        </div>
      </section>

      {/* Skill Groups */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-20">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-sky-400/30 sm:p-9"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-sky-400/10 p-4 text-sky-400">
                    <Icon size={27} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      {group.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-y border-white/10 bg-[#0A1625]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Tools I work with.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              The technologies and tools below form part of my current
              development and ICT workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="rounded-xl bg-sky-400/10 p-3 text-sky-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {tool.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {tool.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Mindset */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Continuous Learning
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technology keeps changing.
              <span className="block text-sky-400">
                So do I.
              </span>
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-400">
              I'm continuously improving my technical abilities through
              practical projects, experimentation and hands-on problem
              solving. My goal is to turn what I learn into useful solutions
              rather than simply collecting technologies.
            </p>

            <Link
              to="/projects"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:text-sky-300"
            >
              See my practical work
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0A1625] px-6 py-24 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Let's Build
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Have a technical challenge?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Let's discuss your requirements and explore a practical
            technology solution.
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

export default Skills;

