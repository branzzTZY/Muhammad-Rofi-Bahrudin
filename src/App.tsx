import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Mail,
  MapPin,
  Printer,
  School,
} from 'lucide-react';
import { Header } from './components/Header';
import { ProjectModal } from './components/ProjectModal';
import { ResilientImage } from './components/ResilientImage';
import { SingleLineSchematic } from './components/SingleLineSchematic';
import {
  biodataRows,
  certifications,
  competencies,
  educationHistory,
  endorsement,
  keyMetrics,
  projects,
  studentProfile,
  type CompetencyCategory,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';

const competencyFilters: { id: CompetencyCategory; label: string }[] = [
  { id: 'semua', label: 'Semua Modul' },
  { id: 'dasar', label: 'Dasar Kelistrikan' },
  { id: 'instalasi', label: 'Instalasi & Panel' },
  { id: 'pengukuran', label: 'Alat Ukur & K3' },
];

const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: 'semua', label: 'Semua Proyek' },
  { id: 'panel', label: 'Panel & Proteksi' },
  { id: 'penerangan', label: 'Instalasi Penerangan' },
  { id: 'pengukuran', label: 'Pengukuran & Uji' },
];

export default function App() {
  const [activeCompFilter, setActiveCompFilter] =
    useState<CompetencyCategory>('semua');
  const [activeProjFilter, setActiveProjFilter] =
    useState<ProjectCategory>('semua');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact Form State
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Verifikasi Akademik');
  const [messageBody, setMessageBody] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const filteredCompetencies = useMemo(() => {
    if (activeCompFilter === 'semua') return competencies;
    return competencies.filter((item) => item.category === activeCompFilter);
  }, [activeCompFilter]);

  const filteredProjects = useMemo(() => {
    if (activeProjFilter === 'semua') return projects;
    return projects.filter((item) => item.category === activeProjFilter);
  }, [activeProjFilter]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(studentProfile.emailDisplay);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !messageBody.trim()) {
      setFormError('Mohon lengkapi nama pengirim dan isi pesan terlebih dahulu.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setSenderName('');
    setSenderOrg('');
    setInquiryTopic('Verifikasi Akademik');
    setMessageBody('');
    setFormSubmitted(false);
    setFormError('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="beranda" className="pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Formal Student Identity & Value Statement */}
              <div className="lg:col-span-7 flex flex-col justify-center py-2">
                <p className="text-xs sm:text-sm font-medium text-[#1D4ED8] tracking-normal">
                  {studentProfile.fullName}
                  <span className="mx-2 text-slate-300" aria-hidden="true">
                    ·
                  </span>
                  {studentProfile.className}
                  <span className="mx-2 text-slate-300" aria-hidden="true">
                    ·
                  </span>
                  {studentProfile.schoolName}
                </p>

                <h1 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.15rem)] font-bold leading-[1.12] tracking-tight text-slate-900 headline-balance">
                  Portofolio Digital Siswa Teknik Instalasi Tenaga Listrik
                </h1>

                <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-600 max-w-2xl">
                  {studentProfile.statement}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5 no-print">
                  <a
                    href="#praktikum"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
                  >
                    <span>Lihat Laporan Praktikum</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
                  >
                    <Printer className="w-4 h-4 text-slate-600" aria-hidden="true" />
                    <span>Cetak Portofolio</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Matching Height Student Workshop Visual */}
              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[290px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 bg-white">
                  <ResilientImage
                    src={studentProfile.heroImage}
                    alt={studentProfile.heroImageAlt}
                    fallbackTitle={studentProfile.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs font-mono-tech text-slate-200">
                      {studentProfile.className} · {studentProfile.majorShort}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">
                      Praktikum Bengkel Instalasi Tenaga Listrik
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Academic Metrics Strip Below Hero Split */}
            <div className="mt-10 sm:mt-12 bg-white border border-slate-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {keyMetrics.map((metric) => (
                <div key={metric.label} className="p-5 sm:p-6">
                  <p className="text-xs text-slate-500 font-medium">
                    {metric.label}
                  </p>
                  <p className="mt-1.5 font-display text-xl sm:text-2xl font-bold text-slate-900 tabular-nums tracking-tight">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1: PROFIL AKADEMIK & IDENTITAS */}
        <section
          id="profil"
          className="py-16 sm:py-20 bg-white border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1D4ED8] font-mono-tech">
                01. Profil Akademik
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 headline-balance">
                Identitas Siswa & Riwayat Pendidikan
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Ringkasan data akademik resmi siswa Program Keahlian Teknik
                Ketenagalistrikan untuk keperluan dokumentasi sekolah, evaluasi
                bengkel, dan persiapan Praktik Kerja Lapangan (PKL).
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: Formal Biodata Specification Table */}
              <div className="lg:col-span-6">
                <h3 className="text-base font-semibold text-slate-900 pb-3 border-b border-slate-200">
                  Data Pokok Siswa
                </h3>
                <dl className="divide-y divide-slate-200 border-b border-slate-200">
                  {biodataRows.map((row) => (
                    <div
                      key={row.label}
                      className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-sm"
                    >
                      <dt className="sm:col-span-5 text-slate-500">
                        {row.label}
                      </dt>
                      <dd className="sm:col-span-7 font-medium text-slate-900">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Right: Education Timeline & K3 Commitment */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 pb-3 border-b border-slate-200">
                    Jenjang Pendidikan
                  </h3>
                  <div className="divide-y divide-slate-200 border-b border-slate-200">
                    {educationHistory.map((edu) => (
                      <div key={edu.period} className="py-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="text-sm font-semibold text-slate-900">
                            {edu.institution}
                          </h4>
                          <span className="text-xs font-mono-tech text-slate-500">
                            {edu.period}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-medium text-[#1D4ED8]">
                          {edu.program}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {edu.notes}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-[#F8FAFC] border border-slate-200 rounded-xl">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Prinsip Kerja Bengkel Ketenagalistrikan
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Setiap pekerjaan instalasi dan pengujian selalu diawali
                    dengan pemeriksaan diagram pengawatan, verifikasi kondisi
                    tanpa tegangan menggunakan alat ukur terkalibrasi, serta
                    penggunaan Alat Pelindung Diri (APD) lengkap sebelum
                    menghubungkan suplai daya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: KOMPETENSI TEKNIS & KURIKULUM */}
        <section
          id="kompetensi"
          className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-medium text-[#1D4ED8] font-mono-tech">
                  02. Kompetensi Dasar Kejuruan
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 headline-balance">
                  Penguasaan Materi & Keterampilan Kelas X TITL 2
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  Cakupan kompetensi teknik ketenagalistrikan dasar yang telah
                  dipelajari melalui teori kelas dan praktik langsung di bengkel
                  SMKN 1 Sidayu.
                </p>
              </div>

              {/* Interactive Filter Segmented Control */}
              <div
                role="tablist"
                aria-label="Filter kategori kompetensi"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg self-start no-print"
              >
                {competencyFilters.map((tab) => {
                  const isActive = activeCompFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCompFilter(tab.id)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                        isActive
                          ? 'bg-[#1D4ED8] text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Competencies Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompetencies.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tech">
                      <span className="text-[#1D4ED8] font-medium">
                        {item.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.standardRef}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 space-y-1.5 text-xs">
                    <p className="text-slate-500">
                      <span className="font-medium text-slate-700">
                        Perangkat:
                      </span>{' '}
                      {item.tools}
                    </p>
                    <p className="text-slate-500">
                      <span className="font-medium text-slate-700">
                        Capaian:
                      </span>{' '}
                      {item.stage}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PORTOFOLIO PROYEK & LAPORAN PRAKTIKUM */}
        <section
          id="praktikum"
          className="py-16 sm:py-20 bg-white border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-medium text-[#1D4ED8] font-mono-tech">
                  03. Dokumentasi Praktikum
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 headline-balance">
                  Proyek Bengkel & Laporan Pengujian
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  Pilih modul praktikum untuk melihat spesifikasi komponen,
                  parameter uji, serta hasil pengukuran verifikasi bengkel.
                </p>
              </div>

              {/* Interactive Project Filter */}
              <div
                role="tablist"
                aria-label="Filter proyek praktikum"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F8FAFC] border border-slate-200 rounded-lg self-start no-print"
              >
                {projectFilters.map((tab) => {
                  const isActive = activeProjFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveProjFilter(tab.id)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                        isActive
                          ? 'bg-[#1D4ED8] text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Editorial Project Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-slate-300"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Buka detail laporan ${project.title}`}
                      className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1D4ED8]"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                        {project.hasSchematic ? (
                          <SingleLineSchematic compact />
                        ) : project.imageUrl ? (
                          <ResilientImage
                            src={project.imageUrl}
                            alt={project.imageAlt ?? project.title}
                            fallbackTitle={project.title}
                            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                          />
                        ) : null}
                      </div>
                    </button>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono-tech">
                        <span className="text-[#1D4ED8] font-medium">
                          {project.code}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.date}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug headline-balance">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 truncate">
                      {project.location}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] py-1.5 px-2 -mr-2 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    >
                      <span>Buka Laporan</span>
                      <FileText className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: SERTIFIKASI, K3LH & EVALUASI PENGAJAR */}
        <section
          id="sertifikasi"
          className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1D4ED8] font-mono-tech">
                04. Sertifikasi & Evaluasi
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 headline-balance">
                Pembekalan K3LH & Catatan Instruktur
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left: Structured Certifications List */}
              <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200 bg-white px-6 rounded-xl border">
                {certifications.map((cert) => (
                  <div key={cert.id} className="py-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono-tech">
                      <span>{cert.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cert.type}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cert.issuer}</span>
                    </div>
                    <h3 className="mt-2 font-display text-base sm:text-lg font-semibold text-slate-900">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right: Attributable Instructor Evaluation Card */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
                <p className="text-xs font-medium text-[#1D4ED8] font-mono-tech">
                  Catatan Evaluasi Bengkel
                </p>
                <blockquote className="mt-4 text-base leading-relaxed text-slate-800">
                  “{endorsement.quote}”
                </blockquote>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">
                    {endorsement.author}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {endorsement.role}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {endorsement.organization}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: KONTAK RESMI & VERIFIKASI SEKOLAH */}
        <section
          id="kontak"
          className="py-16 sm:py-20 bg-white border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: Official School & Student Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <p className="text-xs font-medium text-[#1D4ED8] font-mono-tech">
                    05. Kontak Resmi
                  </p>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 headline-balance">
                    Korespondensi & Verifikasi Akademik
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    Terbuka untuk verifikasi dokumen portofolio oleh guru
                    pembimbing, wali kelas X TITL 2, maupun pihak industri mitra
                    SMKN 1 Sidayu.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-200 text-sm">
                  <div className="flex items-start gap-3">
                    <School
                      className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-900">
                        {studentProfile.schoolName}
                      </p>
                      <p className="text-slate-600">
                        Program Keahlian {studentProfile.majorFull}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-slate-600">{studentProfile.schoolAddress}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail
                      className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="font-mono-tech text-xs sm:text-sm text-slate-900 break-all">
                        {studentProfile.emailDisplay}
                      </p>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-[#1D4ED8] hover:text-[#1E40AF] py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Alamat email disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Salin alamat email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Formal Contact Form */}
              <div className="lg:col-span-7 no-print">
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8">
                  {formSubmitted ? (
                    <div className="py-6 space-y-4">
                      <h3 className="font-display text-lg font-semibold text-slate-900">
                        Pesan Korespondensi Tercatat
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Terima kasih, <span className="font-medium text-slate-900">{senderName}</span>
                        {senderOrg ? ` (${senderOrg})` : ''}. Pesan Anda terkait{' '}
                        <span className="font-medium text-slate-900">{inquiryTopic}</span> telah
                        tersimpan dalam log korespondensi portofolio siswa.
                      </p>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
                      >
                        Kirim Pesan Lainnya
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="sender-name"
                            className="block text-sm font-medium text-slate-800 mb-1.5"
                          >
                            Nama Pengirim
                          </label>
                          <input
                            id="sender-name"
                            type="text"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="Nama lengkap Bapak/Ibu"
                            required
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="sender-org"
                            className="block text-sm font-medium text-slate-800 mb-1.5"
                          >
                            Instansi / Sekolah
                          </label>
                          <input
                            id="sender-org"
                            type="text"
                            value={senderOrg}
                            onChange={(e) => setSenderOrg(e.target.value)}
                            placeholder="Contoh: SMKN 1 Sidayu / Mitra DUDI"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-topic"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          Keperluan Korespondensi
                        </label>
                        <select
                          id="inquiry-topic"
                          value={inquiryTopic}
                          onChange={(e) => setInquiryTopic(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                        >
                          <option value="Verifikasi Akademik">
                            Verifikasi Akademik & Nilai Praktikum
                          </option>
                          <option value="Informasi Prakerin / PKL">
                            Persiapan Prakerin / PKL Industri
                          </option>
                          <option value="Kegiatan Kejuruan">
                            Kegiatan Ekstrakurikuler & Lomba Kompetensi
                          </option>
                          <option value="Lainnya">Korespondensi Formal Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message-body"
                          className="block text-sm font-medium text-slate-800 mb-1.5"
                        >
                          Isi Pesan
                        </label>
                        <textarea
                          id="message-body"
                          rows={4}
                          value={messageBody}
                          onChange={(e) => setMessageBody(e.target.value)}
                          placeholder="Tuliskan pesan atau keterangan resmi Anda..."
                          required
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                        />
                      </div>

                      {formError && (
                        <p role="alert" className="text-sm text-red-700 font-medium">
                          {formError}
                        </p>
                      )}

                      <div className="flex items-center justify-between gap-4 pt-1">
                        <p className="text-xs text-slate-500">
                          Ditujukan kepada Muhammad Rofi Bahrudin (X TITL 2)
                        </p>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
                        >
                          Kirim Pesan
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#F8FAFC] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Muhammad Rofi Bahrudin
            <span className="mx-2 text-slate-300" aria-hidden="true">
              ·
            </span>
            Kelas X TITL 2
            <span className="mx-2 text-slate-300" aria-hidden="true">
              ·
            </span>
            Jurusan Teknik Instalasi Tenaga Listrik, SMKN 1 Sidayu
          </p>

          <div className="flex items-center gap-5">
            <a href="#beranda" className="hover:text-slate-800 transition-colors">
              Atas
            </a>
            <a href="#profil" className="hover:text-slate-800 transition-colors">
              Profil
            </a>
            <a href="#praktikum" className="hover:text-slate-800 transition-colors">
              Praktikum
            </a>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX / TECHNICAL REPORT MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
