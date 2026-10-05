import React, { useState } from 'react';
import {
  Palette,
  Type,
  Maximize2,
  CheckCircle,
  Accessibility,
  Copy,
  Check,
  X,
} from 'lucide-react';

interface DesignSystemInspectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemInspector: React.FC<DesignSystemInspectorProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const colors = [
    { name: 'Primary Teal', hex: '#0E9F8E', role: 'Main brand, CTAs, active tabs', dark: true },
    { name: 'Dark Teal', hex: '#0B6E64', role: 'Gradient base, pressed state', dark: true },
    { name: 'Teal Tint', hex: '#E6F6F4', role: 'Surfaces, chips, organic cards', dark: false },
    { name: 'Accent Blue', hex: '#2F80ED', role: 'Secondary actions, insights, links', dark: true },
    { name: 'Blue Tint', hex: '#EAF2FE', role: 'Information containers, alerts', dark: false },
    { name: 'Text Primary', hex: '#1F2A37', role: 'Headings, high-contrast labels', dark: true },
    { name: 'Text Secondary', hex: '#4B5563', role: 'Descriptions, subheadings', dark: true },
    { name: 'Border Gray', hex: '#E5E7EB', role: 'Hairline dividers, inputs', dark: false },
    { name: 'Status Green (Done)', hex: '#2E9E5B', role: 'Confirmed doses, safe combos', dark: true },
    { name: 'Status Gray (Process)', hex: '#9AA3AF', role: 'Pending doses, neutral', dark: true },
    { name: 'Status Red (Missed)', hex: '#D93838', role: 'Missed doses, drug interactions', dark: true },
  ];

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col text-slate-100 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#0E9F8E]/20 text-[#0E9F8E] border border-[#0E9F8E]/30">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-white">
                MEDITO Design System Specifications
              </h2>
              <p className="text-xs text-slate-400">
                Elderly-friendly healthcare design standards & 1080x1920 design tokens
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto py-6 space-y-8 pr-2">
          {/* Section 1: Color Palette */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#0E9F8E]" />
              <span>Palet Warna Resmi (WCAG AA Compliant)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {colors.map((c) => (
                <div
                  key={c.hex}
                  onClick={() => copyHex(c.hex)}
                  className="p-3 rounded-2xl border border-slate-800 bg-slate-800/60 hover:bg-slate-800 flex items-center justify-between cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl shadow-inner border border-white/20 shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white group-hover:text-[#0E9F8E] transition-colors">
                        {c.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {c.hex}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-500 group-hover:text-slate-300">
                    {copiedHex === c.hex ? (
                      <Check className="w-4 h-4 text-[#2E9E5B]" />
                    ) : (
                      <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Typographic Hierarchy */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Type className="w-4 h-4 text-[#2F80ED]" />
              <span>Hirarki Tipografi (1080x1920 Native Grid)</span>
            </h3>
            <div className="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-slate-700/50 pb-3">
                <span className="text-xs text-slate-400">Heading 1 (Splash / Alerts)</span>
                <span className="font-heading font-bold text-lg text-white">Poppins Bold 120px / 160px</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-slate-700/50 pb-3">
                <span className="text-xs text-slate-400">Heading 2 (Page Titles)</span>
                <span className="font-heading font-bold text-base text-white">Poppins Bold 64px / 68px</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-slate-700/50 pb-3">
                <span className="text-xs text-slate-400">Card Titles & Greeting</span>
                <span className="font-heading font-semibold text-sm text-white">Poppins SemiBold 56px</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-slate-700/50 pb-3">
                <span className="text-xs text-slate-400">Primary Body (Elderly Safe)</span>
                <span className="font-body text-sm text-white">Open Sans Regular 44px (Min 40px)</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-slate-400">Secondary Metadata</span>
                <span className="font-body text-xs text-slate-300">Open Sans Regular 32px – 36px</span>
              </div>
            </div>
          </div>

          {/* Section 3: Elderly Accessibility & Touch Guidelines */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-[#2E9E5B]" />
              <span>Standar Aksesibilitas Lansia & Ergonomi Sentuh</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2E9E5B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Target Sentuh &ge; 150px Height</h4>
                  <p className="text-[12px] text-slate-300 leading-relaxed">
                    Seluruh tombol aksi utama (Lanjut, Sudah Minum, Simpan) berdimensi minimum 150px dengan radius 32px–40px agar ramah tangan tremor.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2E9E5B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Tidak Mengandalkan Warna Saja</h4>
                  <p className="text-[12px] text-slate-300 leading-relaxed">
                    Setiap indikator status memadukan warna + ikon outline tebal + teks eksplisit (&apos;✔ Selesai&apos;, &apos;⏱ Proses&apos;, &apos;❗ Terlewat&apos;).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2E9E5B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Mode Lansia Dinamis</h4>
                  <p className="text-[12px] text-slate-300 leading-relaxed">
                    Dilengkapi pengaturan ukuran teks (Normal, Besar, Extra Besar) dan kontras tinggi langsung di aplikasi.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2E9E5B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Integrasi OpenFDA & Caregiver</h4>
                  <p className="text-[12px] text-slate-300 leading-relaxed">
                    Memantau interaksi antar-obat secara ilmiah dan memberikan akses pantau keluarga secara aman terenkripsi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#0E9F8E] hover:bg-[#0B6E64] text-white font-semibold text-sm cursor-pointer transition-colors"
          >
            Tutup Spesifikasi
          </button>
        </div>
      </div>
    </div>
  );
};
