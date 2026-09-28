import Navbar from "../components/Navbar";
import {
  Download,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Palette,
  Wifi,
  Camera,
  MonitorCog,
  Database,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const education = [
  {
    period: "2023 — 2026",
    title: "Diploma in Information Communication Technology",
    institution: "Taveta Technical and Vocational College",
    description:
      "Focused on information technology, computer systems, networking, software development, databases, and practical ICT support.",
  },
  {
    period: "Completed 2022",
    title: "Secondary Education",
    institution: "St Mary’s High School Lushangonyi",
    description:
      "Completed secondary school education with an interest in technology, leadership, and practical problem solving.",
  },
  {
    period: "Completed 2018",
    title: "Primary Education",
    institution: "Sowene Primary School",
    description:
      "Completed primary education and developed an early interest in leadership and technology.",
  },
];

const experience = [
  {
    title: "Web Development & ICT Projects",
    type: "Practical Experience",
    description:
      "Developing modern websites, web applications, business systems, and digital platforms using technologies such as React, Vite, Node.js, PostgreSQL, and responsive UI development.",
  },
  {
    title: "Business Systems & POS Concepts",
    type: "Project Experience",
    description:
      "Designing practical technology concepts for businesses, including restaurant POS workflows, order management, inventory monitoring, databases, local networks, and receipt systems.",
  },
  {
    title: "Networking & ICT Support",
    type: "Technical Experience",
    description:
      "Practical experience with computer troubleshooting, software configuration, networking concepts, Wi-Fi setup, Ethernet connectivity, and general ICT support.",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases & Systems",
    items: [
      "PostgreSQL",
      "Database Design",
      "CRUD Systems",
      "Business Systems",
      "API Integration",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    items: [
      "Logo Design",
      "Poster Design",
      "Branding",
      "Digital Graphics",
      "Social Media Design",
    ],
  },
  {
    icon: Wifi,
    title: "Networking",
    items: [
      "Wi-Fi Setup",
      "LAN Networking",
      "Router Configuration",
      "Access Points",
      "Troubleshooting",
    ],
  },
  {
    icon: Camera,
    title: "CCTV & Security",
    items: [
      "CCTV Installation",
      "Camera Setup",
      "DVR/NVR",
      "Remote Viewing",
      "Troubleshooting",
    ],
  },
  {
    icon: MonitorCog,
    title: "ICT Support",
    items: [
      "Computer Support",
      "Software Installation",
      "Hardware Troubleshooting",
      "System Configuration",
    ],
  },
];

const projects = [
  {
    name: "Rotary Club of Taveta",
    description:
      "Professional community-focused website designed to present projects, impact, stories, partnerships, and opportunities for community support.",
  },
  {
    name: "Drop Zone Lounge & Grill",
    description:
      "Restaurant website and POS/business-system concept involving local networking, waitress ordering, kitchen communication, stock monitoring, payments, and receipts.",
  },
  {
    name: "DreamRest Mattress Shop",
    description:
      "E-commerce project involving product management, online shopping workflows, administration, image handling, and database integration.",
  },
  {
    name: "BizLaunch",
    description:
      "Business-oriented web platform concept focused on helping businesses establish and manage their digital presence.",
  },
];

function Resume() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.13),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Curriculum Vitae
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Habert
                <span className="text-sky-400"> Kageni</span>
              </h1>

              <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
                ICT Professional & Web Developer
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                An ICT professional with practical experience in web
                development, graphic design, networking, CCTV systems, and
                technical support. I enjoy turning technology challenges into
                practical and useful solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-slate-700 px-4 py-2">
                  Taveta, Kenya
                </span>
                <span className="rounded-full border border-slate-700 px-4 py-2">
                  Diploma in ICT
                </span>
                <span className="rounded-full border border-slate-700 px-4 py-2">
                  Open to Opportunities
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#resume-content"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  View Resume
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#0A1728] p-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Professional Focus
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Web Development",
                  "ICT Support",
                  "Networking",
                  "CCTV Installation",
                  "Graphic Design",
                  "Business Systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="resume-content">
        {/* Profile */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Profile
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Technology with a practical mindset.
              </h2>
            </div>

            <div className="text-slate-400">
              <p className="leading-8">
                I am an ICT professional interested in building, supporting,
                and improving technology systems that solve real problems. My
                work combines software development with hands-on ICT skills,
                allowing me to approach projects from both a digital and
                technical perspective.
              </p>

              <p className="mt-5 leading-8">
                I am particularly interested in opportunities involving IT
                support, ICT operations, web development, networking,
                technology projects, and digital solutions for businesses and
                organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="border-y border-slate-800/80 bg-[#081524]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                <BriefcaseBusiness size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                  Experience
                </p>
                <h2 className="text-3xl font-bold">Practical Experience</h2>
              </div>
            </div>

            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-[#0A1728] p-7 sm:p-9"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium text-sky-400">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-4xl leading-8 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
              <GraduationCap size={25} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                Education
              </p>
              <h2 className="text-3xl font-bold">Academic Background</h2>
            </div>
          </div>

          <div className="relative space-y-6">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-[#0A1728] p-7 sm:p-9"
              >
                <p className="text-sm font-semibold text-sky-400">
                  {item.period}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <p className="mt-2 font-medium text-slate-300">
                  {item.institution}
                </p>

                <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-y border-slate-800/80 bg-[#081524]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Core Skills
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Technical capabilities
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.title}
                    className="rounded-3xl border border-slate-800 bg-[#0A1728] p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                        <Icon size={23} />
                      </div>

                      <h3 className="font-bold">{skill.title}</h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Projects & Practical Work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-slate-800 bg-[#0A1728] p-7 transition hover:border-sky-400/40"
              >
                <h3 className="text-xl font-bold">{project.name}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="border-y border-slate-800/80 bg-[#081524]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                  <Users size={24} />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-sky-400">
                  Leadership
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Leadership & Personal Development
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  Leadership experiences have helped me develop communication,
                  teamwork, responsibility, organization, and the confidence
                  to work with different people.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Primary School Leadership — President, 2017",
                  "Secondary School Leadership",
                  "College Leadership — Secretary General",
                  "Ajira Digital participation",
                  "Science & Engineering Fair participation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-[#0A1728] px-5 py-4 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 lg:px-20 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Opportunities
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Looking for an ICT professional who is ready to learn, build,
              and solve problems?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
              I am open to employment opportunities, internships, freelance
              projects, collaborations, and practical technology work.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Contact Me
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                onClick={() =>
                  alert(
                    "The downloadable CV will be connected once the final PDF version is ready."
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-8 py-4 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Habert Kageni. All rights reserved.
      </footer>
    </div>
  );
}

export default Resume;