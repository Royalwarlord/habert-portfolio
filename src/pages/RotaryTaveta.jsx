import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";

function RotaryTaveta() {
  const features = [
    "Professional responsive website",
    "Organization and About information",
    "Community projects showcase",
    "Impact and community statistics",
    "Events and activities section",
    "Stories and community updates",
    "Partner and sponsor opportunities",
    "Mobile-friendly navigation",
    "SEO-ready page structure",
  ];

  const technologies = [
    "React",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Lucide React",
    "React Helmet",
    "Vercel",
  ];

  return (
    <div className="min-h-screen bg-[#07111F] text-[#F8FAFC]">
      {/* TOP NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111F]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#94A3B8] transition hover:text-[#38BDF8]"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <a
            href="https://rotary-taveta.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-[#38BDF8]/30 px-4 py-2 text-sm font-semibold text-[#38BDF8] transition hover:bg-[#38BDF8]/10 sm:flex"
          >
            View Live Website
            <ExternalLink size={16} />
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* TEXT */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-4 py-2 text-sm font-medium text-[#38BDF8]">
                  <Globe size={16} />
                  Web Development Project
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Rotary Club of Taveta
                  <span className="mt-2 block text-[#38BDF8]">
                    Website
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#94A3B8]">
                  A professional community-impact website designed to present
                  the Rotary Club of Taveta's work, projects, impact and
                  opportunities for partnerships in a clear and engaging
                  digital experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://rotary-taveta.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3 font-semibold text-[#07111F] transition hover:scale-[1.02]"
                  >
                    Visit Live Website
                    <ExternalLink size={18} />
                  </a>

                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
                  >
                    Explore Case Study
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1625] shadow-2xl shadow-black/30">
                <img
                  src="/images/rotary-homepage.png"
                  alt="Rotary Club of Taveta website homepage"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                  Project Overview
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Turning community work into a professional digital presence.
                </h2>
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg leading-8 text-[#94A3B8]">
                  The project focused on creating a modern online presence for
                  the Rotary Club of Taveta. The website was designed to help
                  visitors understand the organization, discover its community
                  projects, see its impact and find ways to support or partner
                  with the club.
                </p>

                <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
                  The design combines strong visual storytelling, clear
                  navigation, structured content and calls to action to make
                  the organization's work easier to discover and understand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE / SOLUTION */}
        <section className="border-b border-white/10 bg-[#0B1625]/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#07111F] p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <Monitor className="text-[#38BDF8]" size={22} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                  The Challenge
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  Communicating impact clearly online
                </h2>

                <p className="mt-5 leading-7 text-[#94A3B8]">
                  Community organizations need more than a basic information
                  page. Their website should communicate who they are, what
                  they do, the communities they serve and how other people or
                  organizations can get involved.
                </p>
              </div>

              <div className="rounded-2xl border border-[#38BDF8]/20 bg-[#07111F] p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10">
                  <Code2 className="text-[#38BDF8]" size={22} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                  The Solution
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  A modern community-impact platform
                </h2>

                <p className="mt-5 leading-7 text-[#94A3B8]">
                  I developed a structured website experience that combines
                  organization information, project stories, impact statistics,
                  events and partnership opportunities in one professional
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                Key Features
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Built around communication, trust and community impact.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0B1625] p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#38BDF8]"
                  />

                  <span className="text-sm leading-6 text-[#CBD5E1]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="border-b border-white/10 bg-[#0B1625]/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                  Technology
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Modern tools for a fast and maintainable website.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-[#94A3B8]">
                  The project was built using a modern React-based frontend
                  architecture with reusable components, responsive layouts
                  and production deployment.
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-[#07111F] px-4 py-3 text-sm font-medium text-[#CBD5E1]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROLE */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                My Role
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                From concept to deployed website.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
                I worked on the website structure, user interface, responsive
                frontend development, project presentation, navigation,
                content organization, SEO setup and deployment.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "UI/UX implementation",
                  "Frontend development",
                  "Responsive design",
                  "Content structure",
                  "SEO implementation",
                  "Production deployment",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0B1625] p-4"
                  >
                    <CheckCircle2 size={18} className="text-[#38BDF8]" />
                    <span className="text-sm text-[#CBD5E1]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="border-b border-white/10 bg-[#0B1625]/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#38BDF8]">
                Project Outcome
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                A professional digital home for community impact.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
                The completed platform gives the Rotary Club of Taveta a
                structured way to present its identity, projects, stories,
                impact and opportunities for engagement through a modern web
                experience.
              </p>

              <a
                href="https://rotary-taveta.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3 font-semibold text-[#07111F] transition hover:scale-[1.02]"
              >
                Explore the Live Project
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="rounded-2xl border border-[#38BDF8]/20 bg-[#0B1625] p-8 text-center sm:p-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Have a digital project in mind?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#94A3B8]">
                I build practical websites, web applications and technology
                solutions designed around real-world needs.
              </p>

              <Link
                to="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-3 font-semibold text-[#07111F] transition hover:scale-[1.02]"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RotaryTaveta;