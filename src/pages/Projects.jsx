import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  MonitorSmartphone,
  Network,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Drop Zone Lounge & Grill",
    category: "Web Development + ICT System",
    status: "Concept / In Development",
    description:
      "A proposed digital solution combining a modern restaurant website with a POS and business-management system covering orders, payments, stock and reporting.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "POS",
      "Networking",
    ],
    route: "/projects/drop-zone",
    featured: true,
  },

  {
    title: "Rotary Club of Taveta",
    category: "Community Website",
    status: "In Development",
    description:
      "A professional community-impact website concept designed to present projects, impact stories, partnerships and opportunities to support community service.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
    tags: [
      "React",
      "Tailwind CSS",
      "SEO",
      "Community",
    ],
    route: "/projects/rotary-taveta",
    featured: true,
  },

  {
    title: "DreamRest Mattress Shop",
    category: "E-Commerce",
    status: "Development Project",
    description:
      "An e-commerce concept for presenting mattress products online with product management, customer ordering and administrative functionality.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    tags: [
      "React",
      "Express",
      "PostgreSQL",
      "Cloudinary",
    ],
    route: "#",
    featured: false,
  },

  {
    title: "BizLaunch",
    category: "Business Platform",
    status: "Development Project",
    description:
      "A business-oriented web platform concept designed around digital product presentation, enquiries and online business visibility.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Business",
    ],
    route: "#",
    featured: false,
  },

  {
    title: "Boutique ÉLAN",
    category: "E-Commerce",
    status: "Development Project",
    description:
      "A modern fashion e-commerce concept focused on product discovery, shopping experience, checkout and store administration.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    tags: [
      "React",
      "E-Commerce",
      "Payments",
      "Admin",
    ],
    route: "#",
    featured: false,
  },

  {
    title: "Drop Zone Business System",
    category: "ICT Solutions",
    status: "Concept",
    description:
      "A practical restaurant technology concept exploring local-network POS deployment, kitchen communication, payment recording, stock control and business reporting.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    tags: [
      "POS",
      "Networking",
      "Database",
      "ICT Support",
    ],
    route: "/projects/drop-zone",
    featured: false,
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    text: "Responsive websites and web applications designed around real business and community needs.",
  },
  {
    icon: MonitorSmartphone,
    title: "Business Systems",
    text: "Interfaces and workflows for POS, e-commerce, administration and business operations.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    text: "Structured data solutions for products, orders, customers, inventory and reporting.",
  },
  {
    icon: Network,
    title: "ICT & Networking",
    text: "Practical technology concepts connecting devices, systems and users in business environments.",
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.06),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-7">
              <Sparkles size={16} />
              Selected Projects
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-7">
              Building digital
              <span className="block text-cyan-300">
                solutions that matter.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              A collection of web development, business-system and ICT
              solution projects — from professional websites to practical
              technology concepts for real-world environments.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
              Featured Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Projects & Case Studies
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-7">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured
            />
          ))}
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="border-y border-white/5 bg-[#0a1726]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="max-w-3xl mb-12">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
              More Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Other Projects
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Additional projects and concepts demonstrating different areas
              of web development, e-commerce and ICT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            What I Build
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            More than websites.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            My projects explore how software, databases, networking and
            practical ICT solutions can work together to solve problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl border border-white/10 bg-[#0a1726] hover:border-cyan-400/30 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                  <Icon
                    size={23}
                    className="text-cyan-300"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0b1929] to-[#07111f] p-8 md:p-14">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Have a project in mind?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's turn an idea into a practical digital solution.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              From websites and e-commerce platforms to business systems and
              ICT solutions, the goal is to build technology that serves a
              real purpose.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-[#07111f] font-semibold hover:bg-cyan-300 transition"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project, featured = false }) {
  const content = (
    <>
      <div
        className={`relative overflow-hidden ${
          featured ? "h-[360px]" : "h-[250px]"
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />

        <div className="absolute top-5 left-5">
          <span className="px-3 py-1.5 rounded-full bg-[#07111f]/85 backdrop-blur border border-white/10 text-xs text-slate-200">
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between gap-4 mb-3">
          <p className="text-cyan-300 text-sm font-medium">
            {project.category}
          </p>

          {project.route !== "#" && (
            <ArrowUpRight
              size={20}
              className="text-slate-500 group-hover:text-cyan-300 transition"
            />
          )}
        </div>

        <h3
          className={`font-bold mb-4 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.route === "#") {
    return (
      <div
        className={`group rounded-3xl overflow-hidden border border-white/10 bg-[#07111f] ${
          featured ? "" : "hover:border-cyan-400/20"
        } transition`}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={project.route}
      className="group block rounded-3xl overflow-hidden border border-white/10 bg-[#07111f] hover:border-cyan-400/30 transition"
    >
      {content}
    </Link>
  );
}

