import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-500 text-[13px]">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start mb-10">
          <Logo className="h-10 w-auto" />
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between gap-10 md:gap-20">
          {/* Column Links */}
          <div className="flex flex-wrap items-start gap-10 md:gap-[50px]">
            <div>
              <p className="text-slate-100 font-semibold">Product</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Affiliate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-slate-100 font-semibold">Resources</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Company
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Community
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Careers
                    <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                      We’re hiring!
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-slate-100 font-semibold">Legal</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-indigo-600 transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
            <p className="max-w-60">
              Making every customer feel valued—no matter the size of your
              audience.
            </p>
            <div className="flex items-center gap-4 mt-3">
              {/* Social Icons */}
              {/* Keep your existing SVG links here */}
            </div>
            <p className="mt-3 text-center">
              {" "}
              © 2025{" "}
              <a href="https://www.linkedin.com/in/thisismasud/">foodly</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
