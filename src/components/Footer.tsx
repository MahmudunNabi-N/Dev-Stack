const Footer = () => {
    return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-1 pb-11 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:py-20">

        {/* Main Footer */}
        <div className="grid grid-cols-4">

          {/* Brand */}
          <div className="max-w-85">
            <div className="flex items-center gap-2">
              <div className="flex h-5.25 w-5.25 items-center justify-center rounded-[5px] bg-linear-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </div>

              <h2 className="text-[17px] font-bold tracking-[-0.3px]">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-3.5 max-w-81.25 text-[11px] leading-[1.6] text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5">
              <a
                href="#"
                className="text-[12px] text-slate-700 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] text-slate-700 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[11px] text-slate-700 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col">
            <h3 className="mb-3.5 text-[11px] font-semibold text-gray-900">
              PRODUCT
            </h3>

            <a
              href="#"
              className="mb-2.75 text-[11px] text-slate-500 transition hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              className="mb-2.75 text-[11px] text-slate-500 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-[11px] text-slate-500 transition hover:text-pink-500"
            >
              Projects
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h3 className="mb-3.5 text-[13px] font-semibold text-gray-900">
              COMPANY
            </h3>

            <a
              href="#"
              className="mb-2.75 text-[13px] text-slate-500 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="mb-2.75 text-[13px] text-slate-500 transition hover:text-pink-500"
            >
              Contact
            </a>

            <a
              href="#"
              className="text-[13px] text-slate-500 transition hover:text-pink-500"
            >
              Careers
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h3 className="mb-3.5 text-[11px] font-semibold text-gray-900">
              LEGAL
            </h3>

            <a
              href="#"
              className="mb-2.75 text-[11px] text-slate-500 transition hover:text-pink-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[11px] text-slate-500 transition hover:text-pink-500"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-[20px] flex items-center justify-between border-t border-gray-100 pt-6.75">
          <p className="text-[14px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5.5">
            <a
              href="#"
              className="text-[10px] text-slate-400 transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-slate-400 transition hover:text-pink-500"
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