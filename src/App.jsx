import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  const hardSkills = [
    "Web Development",
    "Data Science",
    "Administrasi",
    "Pengelolaan Arsip",
    "Pengelolaan Data",
  ];

  const softSkills = [
    "Problem Solving",
    "Beradaptasi",
    "Kepemimpinan",
    "Komunikasi",
    "Kolaborasi",
  ];

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-black overflow-x-hidden">
      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20"
      >
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <p className="uppercase tracking-[0.25em] text-[#2D5016]/80 text-sm font-semibold mb-6">
              Portfolio
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-black">Hello, I'am </span>
              <span className="text-[#2D5016]/80 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                Rian Hadiwijaya Anwar
              </span>
            </h1>

            <h2 className="text-1xl sm:text-2xl md:text-3xl text-black/90 mb-6">
              Web Development, IT Support, Data Science
              <br className="hidden sm:block" /> and Administration.
            </h2>

            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://drive.google.com/file/d/1Oc1pb-7Xhj7tGVKCSUvq0p3-arc-xdgs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl borderborder-[#5A8A2A]/30 bg-[#2D5016]/20 text-[#2D5016] hover:bg-[#2D5016]/30 hover:shadow-[0_0_30px_rgba(45,80,22,0.35)] transition-all duration-300"
              >
                Download CV <i className="ri-download-line ri-lg ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            className="text-center max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D5016] mb-3">
              About Me
            </h2>
            <p className="text-base leading-8 text-black/60">
              A brief introduction to my background, experience, and the field I
              work in within the tech industry.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-4xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] backdrop-blur-md shadow-[0_10px_30px_rgba(26,25,22,0.08)]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="absolute -top-20 left-10 w-56 h-56 bg-[#5A8A2A]/15 blur-[90px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#2D5016]/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-6">
                  <div className="absolute inset-0 scale-110 rounded-[28px] bg-[#2D5016]/8 blur-2xl"></div>
                  <img
                    src={DataImage.HeroImage}
                    alt="Rian Hadiwijaya Anwar"
                    className="relative w-55 sm:w-60 md:w-65 rounded-[28px] object-cover border border-[rgba(26,25,22,0.12)] shadow-[0_12px_35px_rgba(26,25,22,0.08)]"
                    loading="lazy"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2D5016]/20 bg-[#2D5016]/5 text-[#5A8A2A] text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#5A8A2A]"></span>
                  Web Development, IT Support, Data Science & Administrative
                  Assistant
                </div>

                <h3 className="text-2xl sm:text-3xl text-black mb-2">
                  Rian Hadiwijaya Anwar
                </h3>

                <p className="text-black/60 leading-7 max-w-sm">
                  I am a Bachelor of Science graduate in Information Technology
                  from Bosowa University, specializing in web development, data
                  analysis, and enhancing modern digital experiences.
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] p-4">
                    <p className="text-sm text-[#5A8A2A] font-medium mb-1">
                      Main Focus
                    </p>
                    <h4 className="text-black">
                      Web Development, IT Support & Data Science
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] p-4">
                    <p className="text-sm text-[#5A8A2A] font-medium mb-1">
                      Experience
                    </p>
                    <h4 className="text-black">
                      PT Baoshuo Taman Industry Investment Group, Ministry of
                      Finance & MSIB
                    </h4>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-8 text-black/75 mb-8">
                  Hello, I'm{" "}
                  <span className="text-[#5A8A2A] font-semibold">
                    Rian Hadiwijaya Anwar
                  </span>
                  , a Bachelor of Science in Information Technology graduate
                  from Bosowa University who is interested in Web Development,
                  IT Support and Data Science. I have participated in a program{" "}
                  <span className="text-[#5A8A2A] font-medium">
                    IT Support - PT Baoshuo Taman Industry Investment Group,
                  </span>{" "}
                  <span className="text-[#5A8A2A] font-medium">
                    Ministry of Finance
                  </span>{" "}
                  and participate in an independent study{" "}
                  <span className="text-[#5A8A2A] font-medium">
                    MSIB Data Science & AI
                  </span>
                  , which helped me become familiar with data analysis, web
                  development, and teamwork.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="rounded-2xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] p-5 text-center shadow-[0_8px_24px_rgba(26,25,22,0.06)] hover:border-[#2D5016]/25 hover:shadow-[0_12px_32px_rgba(45,80,22,0.10)] transition-all duration-300">
                    <h4 className="text-3xl sm:text-4xl font-bold text-black">
                      2<span className="text-[#5A8A2A]">+</span>
                    </h4>
                    <p className="text-black/60 mt-2">Internship Experience</p>
                  </div>

                  <div className="rounded-2xl border border-[#2D5016]/10 bg-[#FAFAF7] p-5 text-center hover:border-[#2D5016]/20 hover:bg-[#2D5016]/5 transition-all duration-300">
                    <h4 className="text-3xl sm:text-4xl font-bold text-black">
                      8<span className="text-[#5A8A2A]">+</span>
                    </h4>
                    <p className="text-black/60 mt-2">Month of Experience</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML",
                    "CSS",
                    "Javascript",
                    "React JS",
                    "Tailwind CSS",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-[#2D5016]/15 bg-[#2D5016]/5 text-[#5A8A2A] text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PENGALAMAN */}
          <div id="pengalaman" className="mt-20 sm:mt-24">
            <div
              className="text-center max-w-2xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="text-[#5A8A2A] text-sm font-semibold mb-3">
                Karier
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Experience
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7]/90 backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(26,25,22,0.08)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#5A8A2A]/80"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-black">
                    IT Support — PT Baoshuo Taman Industry Invesment Group
                  </h3>
                  <span className="w-fit rounded-full border border-[#2D5016]/15 bg-[#2D5016]/10 px-4 py-2 text-sm font-semibold text-[#5A8A2A]">
                    Des 2025 - Present
                  </span>
                </div>

                <ul className="space-y-3 text-black/65 leading-7 list-disc pl-5">
                  <li>
                    Installation, configuration, and maintenance of hardware and
                    software.
                  </li>
                  <li>
                    Structured management and inventory tracking of IT assets.
                  </li>
                  <li>Troubleshooting networks, systems, and devices.</li>
                  <li>
                    Development of an IT inventory website for monitoring and
                    asset management.
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#2D5016]/10 bg-[#FAFAF7]/90 backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(45,80,22,0.08)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#5A8A2A]/70"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-black">
                    Administrative Assistant — Ministry of Finance
                  </h3>
                  <span className="w-fit rounded-full border border-[#2D5016]/15 bg-[#2D5016]/10 px-4 py-2 text-sm font-semibold text-[#5A8A2A]">
                    Apr 2025 - Jun 2025
                  </span>
                </div>

                <ul className="space-y-3 text-black/65 leading-7 list-disc pl-5">
                  <li>
                    Tax administration services for annual tax returns, EFIN,
                    and NPWP.
                  </li>
                  <li>
                    Support for monitoring STP recording and the distribution of
                    letters.
                  </li>
                  <li>
                    Ensuring data accuracy, security, and procedural compliance.
                  </li>
                  <li>
                    Supporting the improvement of public service effectiveness.
                  </li>
                  <li>
                    Management of digital records and taxpayer data entry.
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#2D5016]/10 bg-[#FAFAF7]/95 backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(45,80,22,0.08)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#5A8A2A]/70"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-black">
                    MSIB Data Science & AI — Startup Campus
                  </h3>
                  <span className="w-fit rounded-full border border-[#2D5016]/15 bg-[#EFEDE7] px-4 py-2 text-sm font-semibold text-[#2D5016]">
                    Feb 2024 - Jun 2024
                  </span>
                </div>

                <ul className="space-y-3 text-black/65 leading-7 list-disc pl-5">
                  <li>
                    Mastering SQL, Python, and statistical thinking for business
                    applications.
                  </li>
                  <li>
                    Proficient in data preprocessing, feature engineering, and
                    EDA.
                  </li>
                  <li>Implementing machine learning and data visualization.</li>
                  <li>
                    Understanding the concept of Artificial Intelligence and its
                    applications in various industries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PENDIDIKAN */}
          <div id="pendidikan" className="mt-20 sm:mt-24">
            <div
              className="text-center max-w-2xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <p className="text-[#5A8A2A] text-sm font-semibold mb-3">
                Education
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Education History
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#5A8A2A]/30 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_36px_rgba(45,80,22,0.12)] transition-all duration-300">
                <div className="absolute -top-16 right-0 w-44 h-44 bg-[#5A8A2A]/10 blur-[80px] rounded-full"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl border border-[#2D5016]/20 bg-[#2D5016]/10 flex items-center justify-center text-[#5A8A2A] mb-5">
                    <i className="ri-school-line ri-xl"></i>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">
                    Sidrap State High School No. 2
                  </h3>

                  <span className="inline-block rounded-full border border-[#2D5016]/15 bg-[#EFEDE7] px-4 py-1 text-sm font-semibold text-[#2D5016] mb-4">
                    Mathematics and Natural Sciences
                  </span>

                  <p className="text-black/65 leading-7">
                    Pursuing a high school education by building a foundation of
                    knowledge, discipline, and learning skills that serve as the
                    basis for continuing on to college.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#5A8A2A]/30 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_36px_rgba(45,80,22,0.12)] transition-all duration-300">
                <div className="absolute -top-16 right-0 w-44 h-44 bg-[#5A8A2A]/10 blur-[80px] rounded-full"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl border border-[#2D5016]/20 bg-[#2D5016]/10 flex items-center justify-center text-[#5A8A2A] mb-5">
                    <i className="ri-graduation-cap-line ri-xl"></i>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">
                    BOSOWA UNIVERSITY
                  </h3>

                  <span className="inline-block rounded-full border border-[#2D5016]/15 bg-[#EFEDE7] px-4 py-1 text-sm font-semibold text-[#2D5016] mb-4">
                    Bachelor of Science in Information Technology
                  </span>

                  <p className="text-black/65 leading-7">
                    Pursuing a Bachelor’s degree in Information Technology with
                    a focus on IT support, web development, programming, data
                    analysis, and the application of information technology to
                    address digital needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYEK */}
      <section id="proyek" className="scroll-mt-24 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#5A8A2A] text-sm font-semibold mb-3">
              Portfolio Project
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold mb-3">My Project</h1>

            <p className="text-base leading-8 text-black/55">
              Here are some projects I’ve created and developed.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.slice(0, 4).map((proyek) => (
              <div
                key={proyek.id}
                className="h-full flex flex-col p-5 bg-[#FAFAF7]/95 border border-[#2D5016]/10 rounded-3xl backdrop-blur-sm hover:border-[#5A8A2A]/25 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_25px_rgba(45,80,22,0.10)] transition-all duration-300"
              >
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  className="rounded-2xl w-full h-52 object-cover border border-cyan-400/10"
                  loading="lazy"
                />

                <div className="flex flex-col flex-1">
                  <h1 className="text-2xl font-bold my-4 text-black">
                    {proyek.nama}
                  </h1>

                  <p className="text-base leading-7 mb-5 text-black/65 flex-1">
                    {proyek.desk}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1.5 px-3 border border-[#2D5016]/15 bg-[#EFEDE7] rounded-full text-sm font-medium text-[#2D5016]"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={proyek.link || "#"}
                      target={proyek.link ? "_blank" : "_self"}
                      rel={proyek.link ? "noopener noreferrer" : undefined}
                      className={`className="bg-[#EFEDE7] px-4 py-3 rounded-2xl block text-center border border-[#2D5016]/15 text-[#1A1916] transition-all duration-300 hover:bg-[#2D5016]/5 hover:border-[#2D5016]/25"
                      ${
                        proyek.link
                          ? "hover:bg-[#2D5016]/5 hover:shadow-[0_12px_25px_rgba(45,80,22,0.10)]"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {proyek.link ? "View Project" : "Coming Soon"}
                      <i className="ri-external-link-line ri-lg ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
              Tools I Use
            </h2>

            <p className="text-base leading-8 text-black/60">
              Here are some tools I commonly use for building websites or for
              data science.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-4 p-4 border border-[#2D5016]/10 rounded-2xl bg-[#FAFAF7]/95 backdrop-blur-sm hover:bg-[#2D5016]/5 hover:border-[#5A8A2A]/25 hover:shadow-[0_12px_25px_rgba(45,80,22,0.10)] transition-all duration-300 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 h-14 object-contain bg-[#EFEDE7] p-2 rounded-xl border border-[#2D5016]/10 group-hover:scale-105 group-hover:border-[#5A8A2A]/25 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-black">{tool.nama}</h4>
                  <p className="text-black/50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDSKILL & SOFTSKILL */}
      <section id="skill" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            className="text-center max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p className="text-[#5A8A2A] text-sm font-semibold mb-3">Ability</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Hard Skills & Soft Skills
            </h2>
            <p className="text-base leading-8 text-black/60">
              A collection of technical and interpersonal skills that I use to
              support my work, projects, and team collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="relative overflow-hidden rounded-3xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#5A8A2A]/30 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_36px_rgba(45,80,22,0.12)] transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="absolute -top-20 right-0 w-56 h-56 bg-[#5A8A2A]/10 blur-[90px] rounded-full pointer-events-none"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl border border-[#2D5016]/20 bg-[#EFEDE7] flex items-center justify-center text-[#2D5016] mb-5">
                  <i className="ri-code-s-slash-line ri-2x"></i>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  Hard Skills
                </h3>

                <p className="text-black/60 leading-7 mb-6">
                  The technical skills I have mastered in the fields of web
                  development, data, administration, and information management.
                </p>

                <div className="flex flex-wrap gap-3">
                  {hardSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-[#2D5016]/15 bg-[#EFEDE7] text-[#2D5016] text-sm font-medium hover:bg-[#E8E5DC] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-3xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#5A8A2A]/30 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_36px_rgba(45,80,22,0.12)] transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <div className="absolute -top-20 right-0 w-56 h-56 bg-[#5A8A2A]/10 blur-[90px] rounded-full pointer-events-none"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl border border-[#2D5016]/20 bg-[#EFEDE7] flex items-center justify-center text-[#2D5016] mb-5 transition-all duration-300 hover:bg-[#2D5016]/10">
                  <i className="ri-team-line ri-2x"></i>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  Soft Skills
                </h3>

                <p className="text-black/60 leading-7 mb-6">
                  Interpersonal skills that help me work effectively, adapt, and
                  collaborate in the workplace.
                </p>

                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-[#2D5016]/15 bg-[#EFEDE7] text-[#2D5016] text-sm font-medium hover:bg-[#E8E5DC] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="scroll-mt-24 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#5A8A2A] text-sm font-semibold mb-3">Kontak</p>
            <h1 className="text-3xl sm:text-4xl mb-3 font-bold">Contact Me</h1>

            <p className="text-base leading-8 text-black/55">
              Please contact me via WhatsApp or email, or check my location .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285240600870"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-[#2D5016]/10 bg-[#FAFAF7] backdrop-blur-md p-6 sm:p-8 text-center shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#5A8A2A]/30 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_30px_rgba(45,80,22,0.12)] transition-all duration-300"
            >
              <div className="absolute -top-16 right-0 w-44 h-44 bg-[#5A8A2A]/10 blur-[80px] rounded-full"></div>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl border border-[#2D5016]/20 bg-[#EFEDE7] flex items-center justify-center text-[#2D5016] mb-5">
                  <i className="ri-whatsapp-line ri-2x"></i>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>

                <p className="text-black/60 mb-4">
                  Contact me directly via WhatsApp.
                </p>

                <p className="text-[#5A8A2A] font-semibold">
                  +62 852-4060-0870
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rianbcc89@gmail.com"
              className="relative overflow-hidden rounded-3xl border border-[#2D5016]/10 bg-[#FAFAF7] backdrop-blur-md p-6 sm:p-8 text-center shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#5A8A2A]/30 hover:bg-[#2D5016]/5 hover:shadow-[0_12px_30px_rgba(45,80,22,0.12)] transition-all duration-300"
            >
              <div className="absolute -top-16 right-0 w-44 h-44 bg-[#5A8A2A]/10 blur-[80px] rounded-full"></div>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl border border-[#2D5016]/20 bg-[#EFEDE7] flex items-center justify-center text-[#2D5016] mb-5 transition-all duration-300 hover:bg-[#2D5016]/10 hover:border-[#5A8A2A]/30">
                  <i className="ri-mail-line ri-2x"></i>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">Email</h3>

                <p className="text-black/60 mb-4">
                  Send a message or contact us via email.
                </p>

                <p className="text-[#5A8A2A] font-semibold break-all">
                  rianbcc89@gmail.com
                </p>
              </div>
            </a>

            {/* Lokasi */}
            <a
              href="https://www.google.com/maps/place/Jl.+Sukaria+Raya+No.48,+Tamamaung,+Kec.+Panakkukang,+Kota+Makassar,+Sulawesi+Selatan+90231/@-5.1444806,119.441583,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee2cbb4e6b493:0x321fd4d5dd8aba8e!8m2!3d-5.1444859!4d119.4441579!16s%2Fg%2F11sn7nrd5s?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-[rgba(26,25,22,0.12)] bg-[#FAFAF7] p-6 sm:p-8 text-center shadow-[0_10px_30px_rgba(26,25,22,0.08)] hover:border-[#2D5016]/25 hover:bg-[#EFEDE7] transition-all duration-300"
            >
              <div className="absolute -top-16 right-0 w-44 h-44 bg-[#5A8A2A]/10 blur-[80px] rounded-full"></div>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl border border-[#2D5016]/20 bg-[#EFEDE7] flex items-center justify-center text-[#2D5016] mb-5 transition-all duration-300 hover:bg-[#2D5016]/10 hover:border-[#5A8A2A]/30">
                  <i className="ri-map-pin-line ri-2x"></i>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">Lokasi</h3>

                <p className="text-black/60 mb-4">Lokasi saya saat ini.</p>

                <p className="text-[#5A8A2A] font-semibold">
                  Makassar, South Sulawesi, Indonesia
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
