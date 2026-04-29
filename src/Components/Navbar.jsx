import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("tentang");
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "About", href: "tentang" },
    { name: "Experience", href: "pengalaman" },
    { name: "Education", href: "pendidikan" },
    { name: "Project", href: "proyek" },
    { name: "Tools", href: "tools" },
    { name: "Skill", href: "skill" },
    { name: "Contact", href: "kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setActiveNavbar(window.scrollY > 80);

      menus.forEach((menu) => {
        const section = document.getElementById(menu.href);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveMenu(menu.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        activeNavbar
          ? "bg-[#031522]/80 backdrop-blur-md border-b border-cyan-400/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <span>Porto</span>
            <span className="text-cyan-400">folio</span>
          </h1>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>

          {/* MENU */}
          <ul
            className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-sm md:text-base font-medium
            absolute md:static top-20 left-0 w-full md:w-auto
            bg-[#071c2f]/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
            px-6 py-6 md:p-0 transition-all duration-300
            ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            {menus.map((menu) => (
              <li key={menu.href}>
                <a
                  href={`#${menu.href}`}
                  onClick={() => {
                    setActiveMenu(menu.href);
                    setIsOpen(false); // close mobile menu
                  }}
                  className={`relative transition-all duration-300 block ${
                    activeMenu === menu.href
                      ? "text-cyan-400 after:w-full"
                      : "text-white/80 hover:text-cyan-400 after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-cyan-400 after:transition-all`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
