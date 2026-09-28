import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  LayoutDashboard,
  MonitorSmartphone,
  Network,
  Package,
  Printer,
  Receipt,
  Server,
  ShoppingCart,
  Smartphone,
  Wifi,
  UtensilsCrossed,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const dummyImages = {
  hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85",
  restaurant:
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
  interior:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
  pos: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
};

const technologies = [
  {
    icon: Code2,
    title: "React",
    description: "Modern responsive interfaces for the website and POS screens.",
  },
  {
    icon: Server,
    title: "Node.js",
    description: "Backend services for orders, users, products and business operations.",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description: "Structured storage for products, orders, payments and inventory.",
  },
  {
    icon: Network,
    title: "Local Network",
    description: "Designed to support reliable communication between POS devices.",
  },
  {
    icon: MonitorSmartphone,
    title: "POS Interface",
    description: "Touch-friendly screens for waitresses, bar and counter staff.",
  },
  {
    icon: Printer,
    title: "Printing",
    description: "Designed for receipts and kitchen or bar order printing.",
  },
];

const skills = [
  "Web Development",
  "UI/UX Design",
  "Database Design",
  "POS System Design",
  "Restaurant Workflow",
  "Networking",
  "Inventory Management",
  "Payment Recording",
  "Business Reporting",
  "ICT System Deployment",
];

const workflow = [
  {
    number: "01",
    icon: Smartphone,
    title: "Order Taken",
    text: "A waitress or staff member enters the customer's order using a phone, tablet or POS terminal.",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Order Sent",
    text: "The order moves through the local network to the appropriate kitchen or bar station.",
  },
  {
    number: "03",
    icon: UtensilsCrossed,
    title: "Preparation",
    text: "Kitchen and bar staff receive the relevant items and begin preparation.",
  },
  {
    number: "04",
    icon: Receipt,
    title: "Payment",
    text: "The completed order can be recorded against cash, M-Pesa or card payment.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Reporting",
    text: "Sales, products and stock information become available to management.",
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Table & Room Orders",
    text: "Create orders and associate them with tables, rooms or customers.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Bar Flow",
    text: "Separate food and drink items so they reach the right preparation area.",
  },
  {
    icon: CreditCard,
    title: "Payment Recording",
    text: "Record cash, M-Pesa and card transactions against completed orders.",
  },
  {
    icon: Package,
    title: "Stock Monitoring",
    text: "Track products and monitor stock movement as sales are recorded.",
  },
  {
    icon: BarChart3,
    title: "Sales Reports",
    text: "Provide management with useful daily and period-based business information.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled Access",
    text: "Different staff roles can be designed around the responsibilities of each user.",
  },
];

export default function DropZone() {
  return (
    <main className="bg-[#07111f] text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[720px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={dummyImages.hero}
            alt="Dummy restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#07111f]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/85 to-[#07111f]/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition mb-10"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-7">
              <span className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium">
                Concept Project
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm">
                Web Development
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm">
                POS System
              </span>
            </div>

            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              Case Study • Hospitality Technology
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-7">
              Drop Zone
              <span className="block text-cyan-300">
                Lounge & Grill
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl leading-relaxed mb-9">
              A proposed digital solution combining a modern restaurant
              website with a practical POS and business-management system.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-[#07111f] font-semibold hover:bg-cyan-300 transition"
              >
                Explore the Concept
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#technology"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Technology Stack
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07111f] to-transparent" />
      </section>

      {/* PROJECT META */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/10 bg-[#0b1929]/95 backdrop-blur">
          <div className="p-7 border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-slate-500 text-sm mb-2">Project Type</p>
            <p className="font-semibold text-lg">
              Website + Business System
            </p>
          </div>

          <div className="p-7 border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-slate-500 text-sm mb-2">Location</p>
            <p className="font-semibold text-lg">
              Taveta, Kenya
            </p>
          </div>

          <div className="p-7">
            <p className="text-slate-500 text-sm mb-2">Status</p>
            <p className="font-semibold text-lg text-cyan-300">
              Concept / In Development
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Project Overview
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-7">
              Turning a hospitality business into a connected digital
              experience.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Drop Zone Lounge & Grill is presented in this portfolio as a
              concept project exploring how web development, POS technology,
              databases and networking can work together to support a modern
              hospitality business.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              The proposed solution goes beyond a restaurant website. It
              considers the operational side of the business — from taking
              orders and sending them to the kitchen or bar, to recording
              payments, monitoring stock and generating useful business
              reports.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src={dummyImages.restaurant}
                alt="Dummy restaurant project visual"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-5 md:-left-8 bg-[#0b1929] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
                <Zap className="text-cyan-300" size={22} />
              </div>

              <p className="font-semibold mb-2">
                One connected ecosystem
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                Website, POS, network, database and business reporting working
                toward one practical solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-[#0a1726] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              The Challenge
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More than just an online presence.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              A hospitality business needs digital tools that support both its
              customers and its internal operations. This concept therefore
              looks at the complete journey from customer order to management
              reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Create a professional online presence",
              "Make ordering easier for staff",
              "Send orders to kitchen and bar",
              "Record different payment methods",
              "Monitor products and stock",
              "Give management useful sales information",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl border border-white/10 bg-[#07111f]"
              >
                <CheckCircle2
                  className="text-cyan-300 mb-4"
                  size={24}
                />
                <p className="text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE */}
      <section id="solution" className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src={dummyImages.food}
                alt="Dummy food website visual"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-7">
              <Globe2 className="text-cyan-300" size={28} />
            </div>

            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Part One
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-7">
              A website built to represent the brand.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The proposed website would give Drop Zone Lounge & Grill a
              professional digital identity where customers can discover the
              venue, explore its menu, view events, see the atmosphere and
              find contact and location information.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Responsive design",
                "Digital menu",
                "Photo gallery",
                "Events & promotions",
                "Contact information",
                "Social media integration",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-cyan-300 shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POS */}
      <section className="bg-[#0a1726] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mx-auto mb-7">
              <LayoutDashboard
                className="text-cyan-300"
                size={28}
              />
            </div>

            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Part Two
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A restaurant POS concept designed around the workflow.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              The proposed POS system would connect front-of-house staff,
              kitchen, bar and management through a shared local system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group p-7 rounded-2xl border border-white/10 bg-[#07111f] hover:border-cyan-400/30 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                    <Icon
                      size={23}
                      className="text-cyan-300"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POS VISUAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              System Interface Concept
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-7">
              Designed for the people using the system every day.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The interface would be designed around speed and simplicity.
              Staff should be able to select products, identify a table or
              room, send an order and update payment information without
              navigating unnecessarily complicated screens.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Users,
                  title: "Staff-friendly",
                  text: "Simple screens for waitresses, bar attendants and counter staff.",
                },
                {
                  icon: Wifi,
                  title: "Local operation",
                  text: "Designed to work over the restaurant's own local network.",
                },
                {
                  icon: ShieldCheck,
                  title: "Controlled access",
                  text: "Different permissions can be assigned to different staff roles.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                      <Icon
                        size={20}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={dummyImages.pos}
                alt="Dummy POS payment terminal visual"
                className="w-full h-[480px] object-cover"
              />
            </div>

            <div className="absolute top-5 left-5 right-5 bg-[#07111f]/90 backdrop-blur border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-400">
                  POS Dashboard Concept
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300">
                  DEMO
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-slate-500">Orders</p>
                  <p className="font-bold text-xl">24</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-slate-500">Tables</p>
                  <p className="font-bold text-xl">18</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-slate-500">Stock</p>
                  <p className="font-bold text-xl">92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-[#0a1726] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              System Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From customer order to management insight.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              The concept follows the actual movement of information through
              the business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative p-6 rounded-2xl bg-[#07111f] border border-white/10"
                >
                  <span className="text-cyan-300/60 text-sm font-bold">
                    {step.number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center my-5">
                    <Icon
                      size={21}
                      className="text-cyan-300"
                    />
                  </div>

                  <h3 className="font-semibold text-lg mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Technical Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A practical local-network approach.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            The concept can be designed around a local server inside the
            business, allowing POS devices to communicate over Ethernet or
            Wi-Fi.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0a1726] p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-5 items-center">
            <div className="space-y-5">
              <ArchitectureCard
                icon={Smartphone}
                title="Waitress POS"
                text="Tables, rooms and customer orders"
              />

              <ArchitectureCard
                icon={MonitorSmartphone}
                title="Counter / Bar"
                text="Products, payments and sales"
              />
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/5 p-8 text-center">
                  <Server
                    size={42}
                    className="mx-auto text-cyan-300 mb-5"
                  />

                  <h3 className="text-xl font-bold mb-2">
                    Local POS Server
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Central application and database serving the restaurant
                    network.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <ArchitectureCard
                icon={UtensilsCrossed}
                title="Kitchen"
                text="Food preparation and order status"
              />

              <ArchitectureCard
                icon={Printer}
                title="Receipt Printer"
                text="Customer and kitchen printing"
              />
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Ethernet",
                "Wi-Fi",
                "Local Server",
                "PostgreSQL",
                "POS Devices",
                "Printers",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="bg-[#0a1726] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Technology
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The technical foundation.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              The proposed architecture combines familiar web technologies
              with infrastructure suitable for a physical hospitality
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.title}
                  className="p-7 rounded-2xl border border-white/10 bg-[#07111f]"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">
                    <Icon
                      size={23}
                      className="text-cyan-300"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {tech.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Skills Demonstrated
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One project. Multiple ICT disciplines.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              This case study demonstrates how a web developer can think
              beyond individual pages and consider the technology, people and
              workflow behind a real business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#0a1726]"
              >
                <CheckCircle2
                  size={18}
                  className="text-cyan-300 shrink-0"
                />
                <span className="text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#0a1726] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                Visual Direction
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Dummy project visuals
              </h2>
            </div>

            <p className="text-slate-500 text-sm max-w-md">
              Placeholder imagery is being used while the actual Drop Zone
              project materials are still in development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src={dummyImages.interior}
                alt="Dummy restaurant interior"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src={dummyImages.food}
                alt="Dummy restaurant food"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0b1929] to-[#07111f] p-8 md:p-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              Concept / In Development
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the idea into a real solution.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              This portfolio case study currently represents the proposed
              direction for the Drop Zone Lounge & Grill digital solution.
              Actual photographs, screenshots, deployment details and
              measurable business results can be added as development
              progresses.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-[#07111f] font-semibold hover:bg-cyan-300 transition"
              >
                View More Projects
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition"
              >
                Discuss a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <p className="text-slate-600 text-sm text-center">
            Drop Zone Lounge & Grill • Concept Case Study
          </p>
        </div>
      </section>
    </main>
  );
}

function ArchitectureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#07111f] p-5 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
        <Icon
          size={20}
          className="text-cyan-300"
        />
      </div>

      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-slate-500">{text}</p>
      </div>
    </div>
  );
}