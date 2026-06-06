const Footer = () => {
  return (
    <footer className="w-full border-t border-[#2D5016]/10 bg-[#F7F6F2] text-[#1A1916]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-[#2D5016]">Portofolio</span>
          </h1>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/rianhadiwjayaanwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2D5016]/20 bg-[#EFEDE7] text-[#1A1916]/70 hover:text-[#2D5016] hover:border-[#5A8A2A]/40 hover:bg-[#2D5016]/5 hover:shadow-[0_8px_20px_rgba(45,80,22,0.12)] transition-all duration-300"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/rianhadiwijaya__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2D5016]/20 bg-[#EFEDE7] text-[#1A1916]/70 hover:text-[#2D5016] hover:border-[#5A8A2A]/40 hover:bg-[#2D5016]/5 hover:shadow-[0_8px_20px_rgba(45,80,22,0.12)] transition-all duration-300"
            >
              <i className="ri-instagram-fill text-xl"></i>
            </a>

            <a
              href="https://www.facebook.com/jezzy.jezzy.1238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2D5016]/20 bg-[#EFEDE7] text-[#1A1916]/70 hover:text-[#2D5016] hover:border-[#5A8A2A]/40 hover:bg-[#2D5016]/5 hover:shadow-[0_8px_20px_rgba(45,80,22,0.12)] transition-all duration-300"
            >
              <i className="ri-facebook-fill text-xl"></i>
            </a>

            <a
              href="https://www.tiktok.com/@rian__2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#2D5016]/20 bg-[#EFEDE7] text-[#1A1916]/70 hover:text-[#2D5016] hover:border-[#5A8A2A]/40 hover:bg-[#2D5016]/5 hover:shadow-[0_8px_20px_rgba(45,80,22,0.12)] transition-all duration-300"
            >
              <i className="ri-tiktok-fill text-xl"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-[#2D5016]/10 pt-4 text-center text-sm text-[#1A1916]/60">
          © 2025 Rian Hadiwijaya Anwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
