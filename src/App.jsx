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
    <div className="min-h-screen bg-[#031522] text-white overflow-x-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.10),_transparent_30%),radial-gradient(circle_at_center,_rgba(0,180,255,0.08),_transparent_35%),linear-gradient(to_bottom,_#031522,_#020f1a)]" />

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20"
      >
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <p className="uppercase tracking-[0.25em] text-cyan-300/80 text-sm font-semibold mb-6">
              Portfolio
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Halo, saya </span>
              <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                Rian Hadiwijaya Anwar
              </span>
            </h1>

            <h2 className="text-1xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-6">
              IT Support, Web Development, Administrasi
              <br className="hidden sm:block" /> dan Data Science.
            </h2>

            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://drive.google.com/file/d/1qfHob2zSkXq1g5jMfvPDcXDfTZoT5Zpt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl border border-cyan-400/30 bg-cyan-500/20 text-white font-semibold hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
              >
                Download CV <i className="ri-download-line ri-lg ml-1"></i>
              </a>

              <a
                href="#tentang"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:border-cyan-400/30 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-300"
              >
                Tentang Saya <i className="ri-arrow-down-line ri-lg ml-1"></i>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Tentang Saya
            </h2>
            <p className="text-base leading-8 text-white/60">
              Perkenalan singkat mengenai latar belakang, pengalaman, dan bidang
              yang saya tekuni di dunia teknologi.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-4xl border border-cyan-400/10 bg-white/3 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="absolute -top-20 left-10 w-56 h-56 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-6">
                  <div className="absolute inset-0 scale-110 rounded-[28px] bg-cyan-400/10 blur-2xl"></div>
                  <img
                    src={DataImage.HeroImage}
                    alt="Rian Hadiwijaya Anwar"
                    className="relative w-55 sm:w-60 md:w-65 rounded-[28px] object-cover border border-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.12)]"
                    loading="lazy"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Web Development • Data Science
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Rian Hadiwijaya Anwar
                </h3>

                <p className="text-white/60 leading-7 max-w-sm">
                  Lulusan S1 Teknologi Informasi yang berfokus pada pengembangan
                  web, analisis data, dan penguatan pengalaman digital modern.
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl border border-cyan-400/10 bg-[#071c2f]/60 p-4">
                    <p className="text-sm text-cyan-300 font-medium mb-1">
                      Fokus Utama
                    </p>
                    <h4 className="text-white font-semibold">
                      Web Development & Data Science
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/10 bg-[#071c2f]/60 p-4">
                    <p className="text-sm text-cyan-300 font-medium mb-1">
                      Pengalaman
                    </p>
                    <h4 className="text-white font-semibold">
                      MSIB & Magang Kementerian Keuangan
                    </h4>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-8 text-white/75 mb-8">
                  Hai, perkenalkan saya{" "}
                  <span className="text-cyan-300 font-semibold">
                    Rian Hadiwijaya Anwar
                  </span>
                  , lulusan S1 Teknologi Informasi Universitas Bosowa yang
                  tertarik pada Web Development dan Data Science. Saya pernah
                  mengikuti program{" "}
                  <span className="text-cyan-300 font-medium">
                    MSIB Data Science & AI
                  </span>{" "}
                  serta magang di{" "}
                  <span className="text-cyan-300 font-medium">
                    Kementerian Keuangan
                  </span>
                  , yang membuat saya terbiasa dengan analisis data,
                  pengembangan web, dan kerja tim.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="rounded-2xl border border-cyan-400/10 bg-[#071c2f]/60 p-5 text-center hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300">
                    <h4 className="text-3xl sm:text-4xl font-bold text-white">
                      2<span className="text-cyan-400">+</span>
                    </h4>
                    <p className="text-white/60 mt-2">Pengalaman Magang</p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/10 bg-[#071c2f]/60 p-5 text-center hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300">
                    <h4 className="text-3xl sm:text-4xl font-bold text-white">
                      8<span className="text-cyan-400">+</span>
                    </h4>
                    <p className="text-white/60 mt-2">Bulan Pengalaman</p>
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
                      className="px-4 py-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-cyan-200 text-sm"
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
              <p className="text-cyan-300 text-sm font-semibold mb-3">Karier</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Pengalaman
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400/70"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-white">
                    IT Support — PT Baoshuo Taman Industry Invesment Group
                  </h3>
                  <span className="w-fit rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300">
                    Des 2025 - Saat Ini
                  </span>
                </div>

                <ul className="space-y-3 text-white/65 leading-7 list-disc pl-5">
                  <li>
                    Instalasi, konfigurasi, dan maintenance hardware & software.
                  </li>
                  <li>Pengelolaan dan pendataan aset IT secara terstruktur.</li>
                  <li>
                    Troubleshooting jaringan, sistem, dan perangkat kerja.
                  </li>
                  <li>
                    Pengembangan website inventory IT untuk monitoring dan
                    manajemen aset.
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400/70"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-white">
                    Asistant Administrasi — Kementerian Keuangan
                  </h3>
                  <span className="w-fit rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    Apr 2025 - Jun 2025
                  </span>
                </div>

                <ul className="space-y-3 text-white/65 leading-7 list-disc pl-5">
                  <li>
                    Layanan administrasi perpajakan SPT Tahunan, EFIN, NPWP.
                  </li>
                  <li>
                    Dukungan pengawasan pencatatan STP dan distribusi surat.
                  </li>
                  <li>
                    Menjaga akurasi data, keamanan, dan kepatuhan prosedur.
                  </li>
                  <li>Mendukung peningkatan efektivitas layanan publik.</li>
                  <li>Pengelolaan arsip digital dan input data wajib pajak.</li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400/70"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-white">
                    Data Science & AI MSIB — Startup Campus
                  </h3>
                  <span className="w-fit rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    Apr 2024 - Jun 2024
                  </span>
                </div>

                <ul className="space-y-3 text-white/65 leading-7 list-disc pl-5">
                  <li>
                    Menguasai SQL, Python, dan statistical thinking untuk
                    aplikasi bisnis.
                  </li>
                  <li>
                    Terampil dalam data preprocessing, feature engineering, dan
                    EDA.
                  </li>
                  <li>
                    Mengimplementasikan machine learning dan data visualization.
                  </li>
                  <li>
                    Memahami konsep Artificial Intelligence dan aplikasinya di
                    berbagai industri.
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
              <p className="text-cyan-300 text-sm font-semibold mb-3">
                Pendidikan
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Riwayat Pendidikan
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300">
                <div className="absolute -top-16 right-0 w-44 h-44 bg-cyan-400/10 blur-[80px] rounded-full"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                    <i className="ri-school-line ri-xl"></i>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    SMA NEGERI 2 SIDRAP
                  </h3>

                  <span className="inline-block rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300 mb-4">
                    Matematika Dan Ilmu Pengetahuan Alam
                  </span>

                  <p className="text-white/65 leading-7">
                    Menempuh pendidikan tingkat Sekolah Menengah Atas dengan
                    membangun dasar pengetahuan, kedisiplinan, dan kemampuan
                    belajar yang menjadi fondasi untuk melanjutkan pendidikan ke
                    jenjang kuliah.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300">
                <div className="absolute -top-16 right-0 w-44 h-44 bg-cyan-400/10 blur-[80px] rounded-full"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                    <i className="ri-graduation-cap-line ri-xl"></i>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    UNIVERSITAS BOSOWA
                  </h3>

                  <span className="inline-block rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300 mb-4">
                    S1 Teknologi Informasi
                  </span>

                  <p className="text-white/65 leading-7">
                    Menempuh pendidikan S1 Teknologi Informasi dengan fokus pada
                    pengembangan web, pemrograman, analisis data, serta
                    pemanfaatan teknologi informasi untuk menyelesaikan
                    kebutuhan digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYEK */}
      <section id="proyek" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Proyek Saya</h1>

            <p className="text-base leading-8 text-white/55">
              Berikut ini beberapa proyek yang telah saya buat.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="h-full flex flex-col p-5 bg-white/3 border border-cyan-400/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/20 hover:bg-cyan-400/3 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-300"
              >
                <img
                  src={proyek.gambar}
                  alt="Proyek Image"
                  className="rounded-2xl w-full h-52 object-cover border border-cyan-400/10"
                  loading="lazy"
                />

                <div className="flex flex-col flex-1">
                  <h1 className="text-2xl font-bold my-4 text-white">
                    {proyek.nama}
                  </h1>

                  <p className="text-base leading-7 mb-5 text-white/65 flex-1">
                    {proyek.desk}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1.5 px-3 border border-cyan-400/15 bg-cyan-400/5 rounded-full text-sm font-medium text-cyan-200"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="#"
                      className="bg-cyan-500/20 px-4 py-3 rounded-2xl block text-center border border-cyan-400/20 text-white hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-300"
                    >
                      Lihat Website
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Tools Yang Saya Pakai
            </h2>

            <p className="text-base leading-8 text-white/60">
              Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
              website ataupun Data Science.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-4 p-4 border border-cyan-400/10 rounded-2xl bg-white/3 backdrop-blur-sm hover:bg-cyan-400/5 hover:border-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-300 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 h-14 object-contain bg-[#0b1e2c] p-2 rounded-xl border border-cyan-400/10 group-hover:scale-105 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-white">{tool.nama}</h4>
                  <p className="text-white/50">{tool.ket}</p>
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
            <p className="text-cyan-300 text-sm font-semibold mb-3">
              Kemampuan
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Hard Skill & Soft Skill
            </h2>
            <p className="text-base leading-8 text-white/60">
              Kumpulan kemampuan teknis dan kemampuan interpersonal yang saya
              gunakan untuk mendukung pekerjaan, proyek, serta kolaborasi tim.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="absolute -top-20 right-0 w-56 h-56 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                  <i className="ri-code-s-slash-line ri-2x"></i>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Hard Skill
                </h3>

                <p className="text-white/60 leading-7 mb-6">
                  Kemampuan teknis yang saya kuasai dalam bidang pengembangan
                  web, data, administrasi, dan pengelolaan informasi.
                </p>

                <div className="flex flex-wrap gap-3">
                  {hardSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-cyan-200 text-sm font-medium hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <div className="absolute -top-20 right-0 w-56 h-56 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                  <i className="ri-team-line ri-2x"></i>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Soft Skill
                </h3>

                <p className="text-white/60 leading-7 mb-6">
                  Kemampuan interpersonal yang membantu saya bekerja secara
                  efektif, beradaptasi, dan berkolaborasi dalam lingkungan
                  kerja.
                </p>

                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-cyan-200 text-sm font-medium hover:bg-cyan-400/10 transition-all duration-300"
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
            <p className="text-cyan-300 text-sm font-semibold mb-3">Kontak</p>
            <h1 className="text-3xl sm:text-4xl mb-3 font-bold">
              Hubungi Saya
            </h1>

            <p className="text-base leading-8 text-white/55">
              Silakan hubungi saya melalui WhatsApp, Email, atau lihat lokasi
              saya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285240600870"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              <div className="absolute -top-16 right-0 w-44 h-44 bg-cyan-400/10 blur-[80px] rounded-full"></div>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                  <i className="ri-whatsapp-line ri-2x"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>

                <p className="text-white/60 mb-4">
                  Hubungi saya langsung melalui WhatsApp.
                </p>

                <p className="text-cyan-300 font-semibold">+62 852-4060-0870</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rianbcc89@gmail.com"
              className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              <div className="absolute -top-16 right-0 w-44 h-44 bg-cyan-400/10 blur-[80px] rounded-full"></div>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                  <i className="ri-mail-line ri-2x"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Email</h3>

                <p className="text-white/60 mb-4">
                  Kirim pesan atau kerja sama melalui email.
                </p>

                <p className="text-cyan-300 font-semibold break-all">
                  rianbcc89@gmail.com
                </p>
              </div>
            </a>

            {/* Lokasi */}
            <a
              href="https://maps.app.goo.gl/z7S6nYo2NWxLVXoW6"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.18)] hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              <div className="absolute -top-16 right-0 w-44 h-44 bg-cyan-400/10 blur-[80px] rounded-full"></div>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-5">
                  <i className="ri-map-pin-line ri-2x"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Lokasi</h3>

                <p className="text-white/60 mb-4">Lokasi saya saat ini.</p>

                <p className="text-cyan-300 font-semibold">
                  Morowali, Sulawesi Tengah, Indonesia
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
