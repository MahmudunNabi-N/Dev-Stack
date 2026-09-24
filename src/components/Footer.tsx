import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-300 px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

        {/*MOBILEVIEW */}
        <div className="flex flex-col items-center text-center lg:hidden">

          {/* Logo */}
          <img
            src={Logo}
            alt="Dev Stack"
            className="h-auto w-30"
          />

          {/* Description */}
          <p className="mt-5 max-w-70 text-sm leading-6 text-slate-400">
            Curated tools, technologies, and resources for
            developers building modern software.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-3 text-sm">
            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-pink-500"
            >
              GitHub
            </a>

            <span className="text-slate-300">•</span>

            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-pink-500"
            >
              Twitter
            </a>

            <span className="text-slate-300">•</span>

            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-pink-500"
            >
              LinkedIn
            </a>
          </div>
        </div>


        {/*  DESKTOP VIEW */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-auto w-31.25"
            />

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm">
              <a
                href="#"
                className="font-medium text-slate-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="#"
                className="font-medium text-slate-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="#"
                className="font-medium text-slate-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>


          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-slate-900"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-slate-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  Terms
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-slate-900"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* BOTTOM FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5 text-[11px] text-slate-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;