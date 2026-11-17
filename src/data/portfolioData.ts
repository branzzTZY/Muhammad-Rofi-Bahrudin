export type CompetencyCategory =
  | 'semua'
  | 'dasar'
  | 'instalasi'
  | 'pengukuran';

export type ProjectCategory =
  | 'semua'
  | 'penerangan'
  | 'panel'
  | 'pengukuran';

export interface CompetencyItem {
  id: string;
  code: string;
  title: string;
  category: Exclude<CompetencyCategory, 'semua'>;
  categoryLabel: string;
  standardRef: string;
  summary: string;
  tools: string;
  stage: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  category: Exclude<ProjectCategory, 'semua'>;
  categoryLabel: string;
  date: string;
  location: string;
  summary: string;
  imageUrl?: string;
  imageAlt?: string;
  hasSchematic?: boolean;
  objective: string;
  specs: {
    label: string;
    value: string;
  }[];
  components: string[];
  testResults: {
    parameter: string;
    target: string;
    measured: string;
    status: string;
  }[];
}

export interface CertificationItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  type: string;
  description: string;
}

export const studentProfile = {
  fullName: 'Muhammad Rofi Bahrudin',
  className: 'X TITL 2',
  majorShort: 'Jurusan Listrik (TITL)',
  majorFull: 'Teknik Instalasi Tenaga Listrik',
  programArea: 'Teknik Ketenagalistrikan',
  schoolName: 'SMKN 1 Sidayu',
  schoolLocation: 'Sidayu, Kabupaten Gresik, Jawa Timur',
  schoolAddress: 'Jl. Raya Wadeng, Kec. Sidayu, Kabupaten Gresik, Jawa Timur 61153',
  academicYear: '2026 / 2027',
  heroImage: '/src/assets/images/hero_student_electrical_1794891154362.jpg',
  heroImageAlt:
    'Muhammad Rofi Bahrudin siswa kelas X TITL 2 SMKN 1 Sidayu memeriksa papan trainer instalasi listrik menggunakan multimeter digital dengan perlengkapan K3 bengkel',
  statement:
    'Siswa kelas X Program Keahlian Teknik Instalasi Tenaga Listrik (TITL) di SMKN 1 Sidayu yang berfokus pada penguasaan dasar ketenagalistrikan, pembacaan gambar teknik, perakitan instalasi penerangan 1 fasa, serta kepatuhan ketat terhadap standar keselamatan kerja K3LH dan PUIL 2011.',
  emailDisplay: 'rofi.bahrudin.titl2@smkn1sidayu.sch.id',
};

export const keyMetrics = [
  {
    label: 'Kelas & Rombongan Belajar',
    value: 'X TITL 2',
    detail: 'Tahun Ajaran 2026/2027',
  },
  {
    label: 'Program Keahlian',
    value: 'Tenaga Listrik',
    detail: 'Teknik Instalasi (TITL)',
  },
  {
    label: 'Modul Praktikum Teruji',
    value: '04 Proyek',
    detail: 'Bengkel Listrik Dasar',
  },
  {
    label: 'Standar Acuan Teknis',
    value: 'PUIL 2011',
    detail: 'SNI 0225 & Prosedur K3LH',
  },
];

export const biodataRows = [
  { label: 'Nama Lengkap', value: 'Muhammad Rofi Bahrudin' },
  { label: 'Kelas / Rombel', value: 'X TITL 2' },
  { label: 'Kompetensi Keahlian', value: 'Teknik Instalasi Tenaga Listrik (TITL)' },
  { label: 'Bidang Keahlian', value: 'Teknologi dan Rekayasa — Ketenagalistrikan' },
  { label: 'Satuan Pendidikan', value: 'SMK Negeri 1 Sidayu, Kab. Gresik' },
  { label: 'Tahun Pelajaran', value: '2026 / 2027 (Fase E Kurikulum Merdeka)' },
];

export const educationHistory = [
  {
    period: '2026 — Sekarang',
    institution: 'SMK Negeri 1 Sidayu',
    program: 'Kelas X TITL 2 · Teknik Instalasi Tenaga Listrik',
    notes:
      'Mempelajari Dasar-Dasar Teknik Ketenagalistrikan, pekerjaan dasar elektromekanik, alat ukur listrik, gambar teknik listrik, dan instalasi penerangan 1 fasa.',
  },
  {
    period: '2023 — 2026',
    institution: 'SMP / MTs Sederajat (Kabupaten Gresik)',
    program: 'Pendidikan Menengah Pertama',
    notes:
      'Menyelesaikan pendidikan dasar dengan minat khusus pada bidang fisika terapan, elektronika dasar, dan keterampilan teknis bengkel.',
  },
];

export const competencies: CompetencyItem[] = [
  {
    id: 'comp-gambar',
    code: 'MOD-01',
    title: 'Gambar Teknik & Simbol Listrik',
    category: 'dasar',
    categoryLabel: 'Dasar Kelistrikan',
    standardRef: 'PUIL 2011 · IEC 60617',
    summary:
      'Membaca dan menggambar diagram garis tunggal (single-line diagram), diagram pengawatan, serta penandaan simbol saklar, kotak kontak, dan titik lampu sesuai standar nasional.',
    tools: 'Mistar Skala, Etiket Kertas A4/A3, Simbol PUIL',
    stage: 'Lulus Evaluasi Teori & Gambar',
  },
  {
    id: 'comp-k3lh',
    code: 'MOD-02',
    title: 'Keselamatan Kerja Ketenagalistrikan (K3LH)',
    category: 'pengukuran',
    categoryLabel: 'Alat Ukur & K3',
    standardRef: 'SOP Bengkel · APD Standar',
    summary:
      'Penerapan prosedur Lockout/Tagout (LOTO) dasar, penggunaan alat pelindung diri (kacamata safety, sarung tangan isolasi, sepatu kerja), dan pencegahan bahaya hubung singkat.',
    tools: 'APD Bengkel, Tespen, Isolator Perkakas 1000V',
    stage: 'Sertifikasi Kepatuhan Bengkel',
  },
  {
    id: 'comp-ukur',
    code: 'MOD-03',
    title: 'Penggunaan Alat Ukur & Pengujian Listrik',
    category: 'pengukuran',
    categoryLabel: 'Alat Ukur & K3',
    standardRef: 'CAT III 600V · Akurasi Skala',
    summary:
      'Pengukuran tegangan AC/DC, arus beban, tahanan penghantar, uji kontinuitas rangkaian tanpa tegangan, serta pengujian tahanan isolasi instalasi sebelum diberi suplai.',
    tools: 'Multimeter Digital/Analog, Tang Ampere, Insulation Tester',
    stage: 'Praktikum Terverifikasi',
  },
  {
    id: 'comp-penerangan',
    code: 'MOD-04',
    title: 'Instalasi Penerangan Bangunan 1 Fasa',
    category: 'instalasi',
    categoryLabel: 'Instalasi & Panel',
    standardRef: 'NYA 1.5 mm² · Pipa PVC 20mm',
    summary:
      'Pemasangan jalur pipa PVC, T-Dos/Cross-Dos, penarikan penghantar berkode warna (Fasa, Netral, PE), serta perakitan rangkaian saklar tunggal, seri, dan saklar tukar (hotel).',
    tools: 'Tang Potong, Tang Kupas, Obeng VDE, Bending Spring',
    stage: 'Lulus Uji Nyala Beban',
  },
  {
    id: 'comp-phb',
    code: 'MOD-05',
    title: 'Perakitan Panel Hubung Bagi (PHB) 1 Fasa',
    category: 'instalasi',
    categoryLabel: 'Instalasi & Panel',
    standardRef: 'MCB 6A–10A · ELCB 30mA',
    summary:
      'Penataan rel DIN, pemasangan MCB utama dan cabang, pengaman arus bocor (ELCB), terminal netral dan pembumian (PE), serta perapian kabel menggunakan cable duct.',
    tools: 'Obeng Torsi, Tang Skun, Ferrule Kabel, Rel DIN',
    stage: 'Praktikum Dasar Panel',
  },
  {
    id: 'comp-elektromekanik',
    code: 'MOD-06',
    title: 'Pekerjaan Dasar Elektromekanik',
    category: 'dasar',
    categoryLabel: 'Dasar Kelistrikan',
    standardRef: 'Presisi Pemotongan & Terminasi',
    summary:
      'Pengukuran dimensi panel, pengeboran pelat dudukan, penyambungan kabel puntir ekor babi (pigtail) dengan lasdop, dan terminasi menggunakan skun kabel.',
    tools: 'Gergaji Besi, Penitik, Kikir, Tang Crimping',
    stage: 'Lulus Uji Mekanik',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'proj-phb-1fasa',
    code: 'PRK-X-01',
    title: 'Perakitan Panel Hubung Bagi (PHB) 1 Fasa dengan Proteksi ELCB',
    category: 'panel',
    categoryLabel: 'Panel & Proteksi',
    date: 'Oktober 2026',
    location: 'Bengkel Instalasi Listrik SMKN 1 Sidayu',
    summary:
      'Perakitan panel distribusi daya 1 fasa dilengkapi MCB utama, dua grup cabang penerangan dan kotak kontak, serta proteksi arus sisa ELCB 30mA sesuai kode warna PUIL.',
    imageUrl: '/src/assets/images/project_wiring_panel_1794891155075.jpg',
    imageAlt:
      'Panel Hubung Bagi 1 fasa dengan MCB, ELCB, busbar tembaga, dan penataan kabel rapi berkode warna',
    objective:
      'Merakit papan hubung bagi 1 fasa yang aman, terstruktur dengan sudut kabel 90 derajat, pemisahan jelas antara rel netral (N) dan pembumian (PE), serta berfungsi memutus arus saat terjadi gangguan beban lebih maupun kebocoran arus.',
    specs: [
      { label: 'Tegangan Kerja Nominal', value: '220 V AC · 50 Hz' },
      { label: 'Proteksi Utama', value: 'MCB 10A + ELCB 25A / 30mA' },
      { label: 'Penghantar Panel', value: 'NYA 2.5 mm² (Cokelat, Biru, Kuning-Hijau)' },
      { label: 'Standar Pengawatan', value: 'PUIL 2011 · SNI 0225' },
    ],
    components: [
      'MCB 1 Pole 10A (Grup Utama) & MCB 6A (Grup Penerangan)',
      'ELCB 2 Pole 25A Sensitivitas 30mA',
      'Terminal Blok Kuningan Netral (N) & Grounding (PE)',
      'Kabel NYA 2.5 mm² dengan Ferrule dan Cable Duct PVC',
    ],
    testResults: [
      {
        parameter: 'Uji Kontinuitas Konduktor PE',
        target: '< 0.5 Ω',
        measured: '0.14 Ω',
        status: 'Memenuhi',
      },
      {
        parameter: 'Tahanan Isolasi Fasa–Netral',
        target: '≥ 1.0 MΩ',
        measured: '248 MΩ',
        status: 'Memenuhi',
      },
      {
        parameter: 'Uji Tombol Test Trip ELCB',
        target: 'Trip < 40 ms',
        measured: 'Memutus Seketika',
        status: 'Lulus Uji',
      },
    ],
  },
  {
    id: 'proj-penerangan',
    code: 'PRK-X-02',
    title: 'Instalasi Penerangan 2 Grup & Kotak Kontak Berpembumian',
    category: 'penerangan',
    categoryLabel: 'Instalasi Penerangan',
    date: 'September 2026',
    location: 'Bengkel Instalasi Listrik SMKN 1 Sidayu',
    summary:
      'Pemasangan instalasi penerangan pipa PVC permukaan dengan pengendalian saklar tunggal, saklar seri untuk tiga titik lampu, serta satu kotak kontak berarde.',
    imageUrl: '/src/assets/images/project_lighting_circuit_1794891155108.jpg',
    imageAlt:
      'Papan praktikum instalasi penerangan pipa PVC, kotak sambung, saklar dinding, stop kontak, dan lampu uji menyala',
    objective:
      'Melaksanakan pemasangan komponen instalasi penerangan rumah tinggal sederhana secara presisi, memastikan polaritas fasa selalu terpasang pada saklar (bukan netral), dan memverifikasi penyalaan beban tanpa hubung singkat.',
    specs: [
      { label: 'Tegangan Suplai Uji', value: '220 V AC (Panel Trainer)' },
      { label: 'Ukuran Penghantar', value: 'NYA 1.5 mm² (Lampu) · 2.5 mm² (Stop Kontak)' },
      { label: 'Pelindung Mekanik', value: 'Pipa PVC Conduit 20 mm + Klem' },
      { label: 'Beban Pengujian', value: '3 × Lampu LED 9W + Tes Beban Stop Kontak' },
    ],
    components: [
      'Saklar Tunggal & Kotak Kontak 1 Fasa dengan Terminal Grounding',
      'Kotak Sambung (T-Dos & Cross-Dos) dan Fitting Plafon E27',
      'Kabel NYA 1.5 mm² & 2.5 mm² (Merah/Hitam, Biru, Kuning-Hijau)',
      'Lasdop Pelindung Sambungan Kabel',
    ],
    testResults: [
      {
        parameter: 'Pemeriksaan Polaritas Saklar',
        target: 'Fasa Terputus di Saklar',
        measured: 'Sesuai (Fasa di L1)',
        status: 'Memenuhi',
      },
      {
        parameter: 'Tegangan Terminal Stop Kontak',
        target: '220 V ± 5%',
        measured: '221.4 V AC',
        status: 'Memenuhi',
      },
      {
        parameter: 'Uji Hubung Singkat (Cold Test)',
        target: '∞ / OL Ω',
        measured: 'OL (Tidak Terhubung)',
        status: 'Aman',
      },
    ],
  },
  {
    id: 'proj-pengukuran',
    code: 'PRK-X-03',
    title: 'Pengukuran Parameter Listrik & Uji Tahanan Isolasi Trainer',
    category: 'pengukuran',
    categoryLabel: 'Pengukuran & Uji',
    date: 'September 2026',
    location: 'Lab Pengukuran Listrik SMKN 1 Sidayu',
    summary:
      'Prosedur pengujian kelayakan instalasi listrik sebelum pengoperasian meliputi pengukuran tegangan line, arus beban dengan clamp meter, serta kalibrasi pembacaan multimeter.',
    imageUrl: '/src/assets/images/project_multimeter_test_1794891156177.jpg',
    imageAlt:
      'Multimeter digital dan tang ampere mengukur terminal MCB serta jajaran obeng isolasi VDE di meja bengkel listrik',
    objective:
      'Menguasai pemilihan batas ukur yang tepat pada multimeter digital dan tang ampere (clamp meter) guna memperoleh data pengukuran tegangan, arus, dan kontinuitas yang akurat serta aman bagi teknisi.',
    specs: [
      { label: 'Instrumen Utama', value: 'Digital Multimeter & AC Clamp Meter' },
      { label: 'Kategori Keamanan Alat', value: 'CAT III 600V · Probe Terisolasi' },
      { label: 'Rentang Uji Tegangan', value: '220 V – 240 V AC' },
      { label: 'Standar Perkakas', value: 'Obeng & Tang Berisolasi VDE 1000V' },
    ],
    components: [
      'Multimeter Digital True-RMS (Mode V AC, Ω, Continuity)',
      'Tang Ampere (Clamp Meter) Pengukur Arus Beban AC',
      'Rangkaian Trainer MCB 3 Modul & Terminal Uji',
      'Set Perkakas Tangan Berisolasi VDE 1000V',
    ],
    testResults: [
      {
        parameter: 'Pengukuran Tegangan Sumber',
        target: '210–235 V AC',
        measured: '231.8 V AC',
        status: 'Normal',
      },
      {
        parameter: 'Arus Beban Uji Trainer',
        target: '≤ 16.0 A',
        measured: '14.50 A',
        status: 'Tercatat',
      },
      {
        parameter: 'Kontinuitas Jalur Utama',
        target: 'Buzzer Aktif (< 1 Ω)',
        measured: '0.20 Ω',
        status: 'Normal',
      },
    ],
  },
  {
    id: 'proj-gambar-teknik',
    code: 'PRK-X-04',
    title: 'Gambar Teknik Diagram Garis Tunggal Instalasi Ruang Praktik',
    category: 'penerangan',
    categoryLabel: 'Instalasi Penerangan',
    date: 'Agustus 2026',
    location: 'Studio Gambar Teknik SMKN 1 Sidayu',
    summary:
      'Perencanaan diagram garis tunggal (single-line diagram) pembagian dua grup beban penerangan dan stop kontak lengkap dengan jumlah hantaran kawat per ruas pipa.',
    hasSchematic: true,
    objective:
      'Menyusun dokumen gambar teknik ketenagalistrikan sebelum eksekusi lapangan sehingga kebutuhan material penghantar, rating pengaman MCB, dan tata letak komponen dapat dihitung secara tepat.',
    specs: [
      { label: 'Format Gambar', value: 'Diagram Garis Tunggal (SLD) · Skala 1:50' },
      { label: 'Simbol Acuan', value: 'PUIL 2011 / Standar IEC' },
      { label: 'Jumlah Grup Beban', value: '2 Grup (Penerangan 6A & Daya 10A)' },
      { label: 'Estimasi Daya Total', value: '1.300 VA (1 Fasa)' },
    ],
    components: [
      'Etiket Gambar Teknik Standar Sekolah (A4 Landscape)',
      'Simbol PHB 1 Fasa, MCB 6A & 10A, Saklar Seri, Saklar Tukar',
      'Notasi Penandaan Jumlah Kabel (2×1.5 mm², 3×2.5 mm²)',
      'Daftar Rekapitulasi Daya & Kebutuhan Material (BOM)',
    ],
    testResults: [
      {
        parameter: 'Kesesuaian Simbol PUIL',
        target: '100% Sesuai',
        measured: 'Terverifikasi Instruktur',
        status: 'Lulus',
      },
      {
        parameter: 'Ketepatan Hitung Jumlah Kawat',
        target: '0 Kesalahan Ruas',
        measured: 'Tepat di 6 Ruas Pipa',
        status: 'Lulus',
      },
      {
        parameter: 'Kebersihan & Etiket Gambar',
        target: 'Standar Akademik',
        measured: 'Memenuhi Kriteria',
        status: 'Baik',
      },
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-k3',
    year: '2026',
    title: 'Orientasi Keselamatan, Kesehatan Kerja & Lingkungan Hidup (K3LH) Bengkel Listrik',
    issuer: 'Jurusan TITL — SMKN 1 Sidayu',
    type: 'Kompetensi Dasar Wajib',
    description:
      'Lulus orientasi prosedur keselamatan bengkel tegangan rendah, penggunaan APD wajib, penanganan awal bahaya sengatan listrik, dan tata tertib laboratorium.',
  },
  {
    id: 'cert-ukur',
    year: '2026',
    title: 'Evaluasi Praktikum Dasar Alat Ukur & Pengukuran Rangkaian Listrik',
    issuer: 'Laboratorium Pengukuran Listrik SMKN 1 Sidayu',
    type: 'Uji Praktikum Semester Ganjil',
    description:
      'Menyelesaikan rangkaian uji pengukuran resistansi, tegangan AC/DC, serta pembacaan skala multimeter dengan tingkat kesalahan pengukuran di bawah batas toleransi.',
  },
  {
    id: 'cert-puil',
    year: '2026',
    title: 'Pengenalan Standar PUIL 2011 & Kode Warna Penghantar Instalasi 1 Fasa',
    issuer: 'Program Keahlian Teknik Ketenagalistrikan',
    type: 'Pembekalan Kurikulum Fase E',
    description:
      'Memahami aturan dasar penentuan luas penampang kabel, pengaman arus lebih (MCB), serta pemisahan konduktor fasa, netral, dan pembumian.',
  },
];

export const endorsement = {
  quote:
    'Muhammad Rofi Bahrudin menunjukkan ketelitian yang baik dalam pembacaan diagram pengawatan, kedisiplinan terhadap prosedur K3LH bengkel, serta kerapian penyambungan terminal selama praktikum dasar kelas X TITL 2.',
  author: 'Tim Pengajar Produktif TITL',
  role: 'Program Keahlian Teknik Instalasi Tenaga Listrik',
  organization: 'SMK Negeri 1 Sidayu, Gresik',
};
