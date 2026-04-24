import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active
          ? "bg-[#031522]/80 backdrop-blur-md border-b border-cyan-400/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
              <span className="text-white">Porto</span>
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                folio
              </span>
            </h1>
          </div>

          {/* Menu */}
          <ul
            className={`flex items-center gap-4 sm:gap-6 md:gap-8 text-sm md:text-base font-medium
            md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0
            transition-all duration-300
            ${
              active
                ? "top-0 bg-[#071c2f]/70 backdrop-blur-md md:bg-transparent px-6 py-4 md:p-0 rounded-b-2xl border border-cyan-400/10 md:border-0"
                : "top-0 bg-transparent"
            }`}
          >
            <li>
              <a
                href="#tentang"
                className="relative text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-cyan-400 after:shadow-[0_0_10px_rgba(34,211,238,0.9)]"
              >
                Tentang
              </a>
            </li>

            <li>
              <a
                href="#tools"
                className="relative text-white/85 hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_rgba(34,211,238,0.9)] after:transition-all after:duration-300 hover:after:w-full"
              >
                Tools
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                className="relative text-white/85 hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_rgba(34,211,238,0.9)] after:transition-all after:duration-300 hover:after:w-full"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#pendidikan"
                className="relative text-white/85 hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_rgba(34,211,238,0.9)] after:transition-all after:duration-300 hover:after:w-full"
              >
                Pendidikan
              </a>
            </li>

            <li>
              <a
                href="#kontak"
                className="relative text-white/85 hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_rgba(34,211,238,0.9)] after:transition-all after:duration-300 hover:after:w-full"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
