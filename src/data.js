import HeroImage from "/assets/hero.jpg";

const Image = {
  HeroImage,
};

export default Image;

/* ================= TOOLS ================= */

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/googlecolab.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Google Colab",
    ket: "Code Editor",
    dad: "1100",
  },
];

/* ================= PROYEK ================= */

import Proyek1 from "/assets/proyek/webgudang_.png";
import Proyek2 from "/assets/proyek/msib_.png";
import Proyek3 from "/assets/proyek/analisis_.png";
import Proyek4 from "/assets/proyek/proyek4.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Web Inventory Gudang",
    desk: "Mengembangkan website inventory gudang untuk pencatatan dan monitoring stok barang masuk serta keluar secara digital.",
    tools: [
      "PHP",
      "MySQL",
      "JavaScript",
      "CSS",
      "HTML",
      "Bootstrap",
      "Visual Studio Code",
    ],
    link: "https://github.com/Rianhadiwijaya/InventoryGudangIT",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Data Science & AI",
    desk: "Mengembangkan dashboard dan forecasting penjualan untuk menghasilkan insight bisnis.",
    tools: ["Python", "Google Colab", "Looker Studio"],
    link: "https://drive.google.com/file/d/1qntxXuW_PdvCA_xzcY07LAgGif_KdXzR/view?usp=sharing",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Analisis Sentimen",
    desk: "Klasifikasi sentimen komentar TikTok terhadap pemain Timnas Indonesia menggunakan metode Naive Bayes.",
    tools: ["Google Colab", "Python", "Apify", "TikTok"],
    link: "https://colab.research.google.com/drive/1rp4pthASKkkOqe2KRwktKSM7gMCHWGTw?usp=sharing",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Web Portfolio",
    desk: "Membangun website portfolio pribadi untuk menampilkan profil, pengalaman, skill, tools, dan proyek yang telah dikerjakan.",
    tools: ["Vite", "React JS", "Tailwind CSS", "HTML", "JavaScript"],
    link: "https://rianhadiwijaya.github.io/react-portofolio/",
    dad: "500",
  },
];
