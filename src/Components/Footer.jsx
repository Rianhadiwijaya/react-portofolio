const Footer = () => {
  return (
    <footer className="w-full border-t border-cyan-500/20 bg-[#031522] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
              Portofolio
            </span>
          </h1>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/rianhadiwjayaanwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/5 text-white/80 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/rianhadiwijaya__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/5 text-white/80 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              <i className="ri-instagram-fill text-xl"></i>
            </a>

            <a
              href="https://www.facebook.com/jezzy.jezzy.1238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/5 text-white/80 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              <i className="ri-facebook-fill text-xl"></i>
            </a>

            <a
              href="https://www.tiktok.com/@rian__2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/5 text-white/80 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              <i className="ri-tiktok-fill text-xl"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-cyan-500/10 pt-4 text-center text-sm text-white/50">
          © 2025 Rian Hadiwijaya Anwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
