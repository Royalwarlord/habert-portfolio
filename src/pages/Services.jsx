import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Palette,
  Wifi,
  ShieldCheck,
  MonitorCog,
  Database,
  Smartphone,
  Network,
  Settings,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed to help individuals, businesses and organizations establish a strong digital presence.",
    features: [
      "Business websites",
      "Portfolio websites",
      "E-commerce platforms",
      "Web applications",
      "Responsive design",
      "Website maintenance",
    ],
  },
  {
    icon: Palette,
    number: "02",
    title: "Graphic Design",
    description:
      "Clean and professional visual designs that help businesses and organizations communicate their identity and ideas effectively.",
    features: [
      "Logo design",
      "Business branding",
      "Posters & flyers",
      "Social media graphics",
      "Marketing materials",
      "Event designs",
    ],
  },
  {
    icon: Wifi,
    number: "03",
    title: "Wi-Fi & Networking",
    description:
      "Reliable connectivity solutions for homes, offices, businesses and organizations, with a focus on coverage, performance and practical network setup.",
    features: [
      "Wi-Fi installation",
      "Router configuration",
      "Network setup",
      "LAN installation",
      "Access point setup",
      "Network troubleshooting",
    ],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "CCTV Installation",
    description:
      "Practical security camera solutions designed to improve visibility and security for homes, businesses and institutions.",
    features: [
      "CCTV installation",
      "Camera positioning",
      "DVR/NVR setup",
      "Remote viewing setup",
      "System configuration",
      "Troubleshooting",
    ],
  },
  {
    icon: MonitorCog,
    number: "05",
    title: "ICT Solutions",
    description:
      "Technology solutions that address real operational challenges and help organizations make better use of their digital infrastructure.",
    features: [
      "Computer support",
      "System setup",
      "Technical troubleshooting",
      "Business systems",
      "Database solutions",
      "ICT consultation",
    ],
  },
];

const capabilities = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Interfaces designed to work smoothly across phones, tablets and computers.",
  },
  {
    icon: Database,
    title: "Database Systems",
    text: "Structured data solutions for applications, businesses and organizations.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    text: "Connectivity solutions built around practical network requirements.",
  },
  {
    icon: Settings,
    title: "Technical Support",
    text: "Hands-on troubleshooting and technology support when problems arise.",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Services
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology solutions
              <span className="block text-sky-400">
                built around real needs.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              From websites and digital design to networking, security and
              ICT systems, I provide practical technology services designed
              to solve problems and create opportunities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-20">
        <div className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-sky-400/30"
              >
                <div className="grid lg:grid-cols-12">

                  {/* Number / Icon */}
                  <div className="flex items-start gap-5 p-7 sm:p-9 lg:col-span-4 lg:p-10">
                    <div className="shrink-0 rounded-2xl bg-sky-400/10 p-4 text-sky-400 transition group-hover:bg-sky-400 group-hover:text-slate-950">
                      <Icon size={28} />
                    </div>

                    <div>
                      <p className="text-sm font-bold tracking-widest text-slate-600">
                        {service.number}
                      </p>

                      <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-t border-white/10 p-7 sm:p-9 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
                    <p className="leading-7 text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="border-t border-white/10 p-7 sm:p-9 lg:col-span-3 lg:border-l lg:border-t-0 lg:p-10">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      What I Provide
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-sky-400"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-white/10 bg-[#0A1625]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Additional Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              More than individual services.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Technology projects often require several areas to work
              together. My approach combines development, infrastructure,
              design and technical support where necessary.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-sky-400/30"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-sky-400/10 p-3 text-sky-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            How I Work
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            From idea to solution.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-4">
          {[
            ["01", "Understand", "Learn about your needs, goals and challenges."],
            ["02", "Plan", "Define the right technology and approach."],
            ["03", "Build", "Develop, configure or implement the solution."],
            ["04", "Support", "Test, improve and provide ongoing support."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="text-sm font-bold text-sky-400">
                {number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0A1625] px-6 py-24 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Have a Project?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Whether you already know exactly what you need or you're still
            figuring it out, let's have a conversation.
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

export default Services;

