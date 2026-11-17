import { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';
import { SingleLineSchematic } from './SingleLineSchematic';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-5 bg-white/95 backdrop-blur-xs border-b border-slate-200">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono-tech">
              <span>{project.code}</span>
              <span aria-hidden="true">·</span>
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.date}</span>
            </div>
            <h3
              id="modal-project-title"
              className="mt-1.5 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight headline-balance"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail praktikum"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Media Container */}
          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
            {project.hasSchematic ? (
              <SingleLineSchematic />
            ) : project.imageUrl ? (
              <ResilientImage
                src={project.imageUrl}
                alt={project.imageAlt ?? project.title}
                fallbackTitle={project.title}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          {/* Location & Objective */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-sm font-semibold text-slate-900">
                Tujuan & Ringkasan Pekerjaan
              </h4>
              <p className="text-[15px] leading-relaxed text-slate-600">
                {project.objective}
              </p>
              <p className="text-xs text-slate-500 pt-1">
                Lokasi Pelaksanaan: {project.location}
              </p>
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">
                Spesifikasi Teknis
              </h4>
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                {project.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="py-2.5 flex items-baseline justify-between gap-4 text-sm"
                  >
                    <dt className="text-slate-500">{spec.label}</dt>
                    <dd className="font-medium text-slate-900 text-right font-mono-tech text-xs sm:text-sm">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Components */}
          <div className="pt-2 border-t border-slate-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Komponen & Peralatan Utama
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.components.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-700 py-2 px-3.5 bg-slate-50 rounded-lg border border-slate-200/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Verification Test Table */}
          <div className="pt-2 border-t border-slate-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Hasil Pengujian & Verifikasi Bengkel
            </h4>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs font-medium">
                    <th className="py-3 px-4">Parameter Uji</th>
                    <th className="py-3 px-4">Standar Target</th>
                    <th className="py-3 px-4">Hasil Terukur</th>
                    <th className="py-3 px-4">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {project.testResults.map((row) => (
                    <tr key={row.parameter}>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        {row.parameter}
                      </td>
                      <td className="py-3 px-4 font-mono-tech text-xs text-slate-600">
                        {row.target}
                      </td>
                      <td className="py-3 px-4 font-mono-tech text-xs font-medium text-slate-900">
                        {row.measured}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{row.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
