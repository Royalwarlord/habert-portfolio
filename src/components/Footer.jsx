import { 
  ArrowUp, 
  GitBranch, 
  Mail, 
  MapPin, 
  Phone, 
} from "lucide-react"; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050C16]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <p className="text-xl font-bold tracking-wide text-white">
                HABERT <span className="text-[#38BDF8]">KAGENI</span>
              </p>

              <p className="mt-2 text-sm font-medium text-[#94A3B8]">
                Web Developer & ICT Solutions Specialist
              </p>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#94A3B8]">
              Building practical digital solutions that help businesses,
              organizations and individuals solve real-world problems through
              technology.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B1625] text-[#94A3B8] transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
              >
               <GitBranch size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B1625] text-[#94A3B8] transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
              >
                <GitBranch size={18} />
              </a>

              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B1625] text-[#94A3B8] transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#about" className="block text-[#94A3B8] transition hover:text-[#38BDF8]">
                About Me
              </a>

              <a href="#services" className="block text-[#94A3B8] transition hover:text-[#38BDF8]">
                Services
              </a>

              <a href="#projects" className="block text-[#94A3B8] transition hover:text-[#38BDF8]">
                Projects
              </a>

              <a href="#skills" className="block text-[#94A3B8] transition hover:text-[#38BDF8]">
                Skills
              </a>

              <a href="#resume" className="block text-[#94A3B8] transition hover:text-[#38BDF8]">
                Resume
              </a>

              <a href="#contact" className="block text-[#94A3B8] transition hover:text-[#38BDF8]">
                Hire Me
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#38BDF8]"
                />
                <span className="text-[#94A3B8]">
                  your.email@example.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#38BDF8]"
                />
                <span className="text-[#94A3B8]">
                  +254 700 000 000
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#38BDF8]"
                />
                <span className="text-[#94A3B8]">
                  Kenya
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">

          <p className="text-[#64748B]">
            © {currentYear} Habert Kageni. All rights reserved.
          </p>

          <p className="text-[#64748B]">
            Built with React & Tailwind CSS
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="flex items-center gap-2 text-[#94A3B8] transition hover:text-[#38BDF8]"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;