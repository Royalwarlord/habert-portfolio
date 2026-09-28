import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Globe,
  Code2,
  Palette,
  Wifi,
  ShieldCheck,
  MonitorCog,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites and web applications.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Professional branding, posters, logos and digital designs.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Installation",
    description: "Reliable network setup for homes, offices and businesses.",
  },
  {
    icon: ShieldCheck,
    title: "CCTV Installation",
    description: "Security camera solutions for homes and businesses.",
  },
  {
    icon: MonitorCog,
    title: "ICT Solutions",
    description: "Practical technology solutions for everyday business needs.",
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">

      {/* Navigation */}
      <header className="border-b border-white/10 bg-[#07111F]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-cyan-400"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>

          <div className="text-sm font-semibold tracking-wide text-cyan-400">
            HABERT KAGENI
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Let's Work Together
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Have a project in mind?
            <span className="block text-cyan-400">
              Let's build it together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you need a website, business system, graphic design,
            networking or another ICT solution, I'd be happy to discuss
            your idea and find a practical way forward.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Contact Details
            </p>

            <h2 className="text-3xl font-bold">
              Let's start a conversation.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Tell me what you're working on, what problem you're trying to
              solve, or what you'd like to build.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="mt-1 font-medium text-gray-200">
                    your.email@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone / WhatsApp</p>
                  <p className="mt-1 font-medium text-gray-200">
                    +254 7XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="mt-1 font-medium text-gray-200">
                    Taveta, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Globe size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="mt-1 font-medium text-gray-200">
                    Projects & collaborations
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
              <div className="flex gap-3">
                <MessageCircle className="mt-1 shrink-0 text-cyan-400" size={20} />

                <div>
                  <h3 className="font-semibold">
                    Prefer a quick conversation?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    WhatsApp is ideal for discussing project ideas,
                    requirements and quick questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-3">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Send a Message
            </p>

            <h2 className="text-3xl font-bold">
              Tell me about your project.
            </h2>

            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks! Your message form is ready. We will connect it to a real email service next."
                );
              }}
            >
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0D1A2B] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0D1A2B] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Service
                </label>

                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-[#0D1A2B] px-4 py-3.5 text-gray-300 outline-none transition focus:border-cyan-400"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Wi-Fi Installation</option>
                  <option>CCTV Installation</option>
                  <option>ICT Solutions</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me about your project or what you need help with..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0D1A2B] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-[#07111F] transition hover:bg-cyan-300"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-center text-xs text-gray-500">
                This form is currently a front-end demo. We'll connect it to
                your real email/WhatsApp workflow later.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 bg-[#0A1625]">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              What I Can Help With
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Technology solutions built around your needs.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to turn an idea into something real?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Let's discuss your requirements and work toward a solution
            that is practical, professional and built to grow.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            View My Projects
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Contact;