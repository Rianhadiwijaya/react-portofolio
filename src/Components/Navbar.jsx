import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("tentang");

  const menus = [
    { name: "Tentang", href: "tentang" },
    { name: "Pengalaman", href: "pengalaman" },
    { name: "Pendidikan", href: "pendidikan" },
    { name: "Proyek", href: "proyek" },
    { name: "Tools", href: "tools" },
    { name: "Skill", href: "skill" },
    { name: "Kontak", href: "kontak" },
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
  }, [menus]);

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
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <span>Porto</span>
            <span className="text-cyan-400">folio</span>
          </h1>

          <ul className="flex gap-6 text-sm md:text-base">
            {menus.map((menu) => (
              <li key={menu.href}>
                <a
                  href={`#${menu.href}`}
                  onClick={() => setActiveMenu(menu.href)}
                  className={`relative transition-all duration-300 ${
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
