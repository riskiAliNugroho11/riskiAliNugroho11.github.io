import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  Search,
  X,
  AlertTriangle,
  CheckCircle,
  Share2,
  ChevronRight,
  ShieldAlert,
  Info,
} from 'lucide-react';

interface Screen9DrugInteractionProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen9DrugInteraction: React.FC<Screen9DrugInteractionProps> = ({
  onNavigate,
}) => {
  const [selectedMeds, setSelectedMeds] = useState([
    'Amlodipin 5 mg',
    'Simvastatin 20 mg',
    'Metformin 500 mg',
  ]);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const removeMed = (med: string) => {
    setSelectedMeds(selectedMeds.filter((m) => m !== med));
  };

  const addMed = () => {
    const newMed = prompt('Tambah obat untuk dicek (misal: Aspirin 80 mg):', 'Aspirin 80 mg');
    if (newMed && !selectedMeds.includes(newMed)) {
      setSelectedMeds([...selectedMeds, newMed]);
    }
  };

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-4 overflow-y-auto space-y-6">
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-2 pt-2">
          <h1 className="font-heading font-bold text-[64px] text-[#1F2A37] leading-tight">
            Cek Interaksi Obat
          </h1>
          <p className="font-body text-[42px] text-[#4B5563]">
            Pilih obat yang Anda minum
          </p>
        </div>

        {/* Large Search Field with Magnifier */}
        <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] focus-within:border-[#0E9F8E] rounded-[32px] px-8 flex items-center gap-6 shadow-sm">
          <Search strokeWidth={2.8} className="w-[52px] h-[52px] text-[#4B5563]" />
          <input
            type="text"
            placeholder="Ketik nama obat untuk ditambahkan..."
            className="w-full font-body text-[38px] text-[#1F2A37] font-semibold bg-transparent outline-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter') addMed();
            }}
          />
        </div>

        {/* Selected Medication Chips with X buttons */}
        <div className="flex flex-wrap gap-3">
          {selectedMeds.map((med) => (
            <div
              key={med}
              className="h-[96px] px-6 rounded-[28px] bg-[#E6F6F4] border-2 border-[#0E9F8E] text-[#0B6E64] font-heading font-bold text-[36px] flex items-center gap-4 shadow-sm"
            >
              <span>{med}</span>
              <button
                onClick={() => removeMed(med)}
                className="w-9 h-9 rounded-full bg-white text-[#0B6E64] hover:bg-[#D93838] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X strokeWidth={3} className="w-6 h-6" />
              </button>
            </div>
          ))}
          <button
            onClick={addMed}
            className="h-[96px] px-6 rounded-[28px] border-2 border-dashed border-[#2F80ED] text-[#2F80ED] hover:bg-[#EAF2FE] font-heading font-semibold text-[34px] flex items-center gap-2 cursor-pointer"
          >
            + Tambah Obat
          </button>
        </div>

        {/* Large Teal Button: Periksa Interaksi (Height 150px) */}
        <button
          onClick={() => alert('Analisis interaksi obat OpenFDA telah diperbarui!')}
          className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-4 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer"
        >
          <ShieldAlert strokeWidth={3} className="w-[52px] h-[52px]" />
          <span>Periksa Interaksi</span>
        </button>

        {/* Results Section Title */}
        <div className="flex items-center justify-between pt-2">
          <h2 className="font-heading font-bold text-[44px] text-[#1F2A37]">
            Hasil Analisis ({selectedMeds.length} Obat)
          </h2>
          <span className="font-heading font-semibold text-[30px] px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0E9F8E]">
            2 Pasangan Dicek
          </span>
        </div>

        {/* Card 1: 4px Red Border #D93838 with Red Warning Icon */}
        <div className="w-full bg-white border-[4px] border-[#D93838] rounded-[36px] p-8 flex flex-col gap-5 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-[#FEE2E2] text-[#D93838] rounded-2xl">
                <AlertTriangle strokeWidth={3} className="w-[52px] h-[52px]" />
              </div>
              <h3 className="font-heading font-bold text-[46px] text-[#1F2A37]">
                Amlodipin + Simvastatin
              </h3>
            </div>
            {/* Red Chip: ❗ Perlu Perhatian */}
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#FEE2E2] text-[#D93838] font-heading font-bold text-[32px] border border-[#D93838]/40">
              <span>❗ Perlu Perhatian</span>
            </div>
          </div>

          <p className="font-body text-[36px] text-[#4B5563] leading-relaxed">
            Dapat menurunkan efektivitas obat atau berisiko membahayakan kadar otot (miopati) akibat peningkatan kadar simvastatin hingga 77%.
          </p>

          <div className="flex justify-end pt-1">
            <button
              onClick={() => setShowDetailModal(true)}
              className="h-[96px] px-8 bg-[#D93838] hover:bg-[#B91C1C] active:scale-95 text-white font-heading font-bold text-[34px] rounded-2xl flex items-center gap-3 cursor-pointer shadow-sm transition-all"
            >
              <span>Lihat Saran</span>
              <ChevronRight strokeWidth={3} className="w-[36px] h-[36px]" />
            </button>
          </div>
        </div>

        {/* Card 2: Green Border #2E9E5B with Checkmark Icon */}
        <div className="w-full bg-white border-[4px] border-[#2E9E5B] rounded-[36px] p-8 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-[#E8F5E9] text-[#2E9E5B] rounded-2xl">
                <CheckCircle strokeWidth={3} className="w-[52px] h-[52px]" />
              </div>
              <h3 className="font-heading font-bold text-[46px] text-[#1F2A37]">
                Amlodipin + Metformin
              </h3>
            </div>
            {/* Green Chip: ✔ Tidak ada interaksi berbahaya */}
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#E8F5E9] text-[#2E9E5B] font-heading font-bold text-[30px] border border-[#2E9E5B]/40">
              <span>✔ Tidak ada interaksi berbahaya</span>
            </div>
          </div>

          <p className="font-body text-[36px] text-[#4B5563] leading-relaxed">
            Kombinasi obat ini aman dan umum diresepkan untuk pasien dengan hipertensi komorbid diabetes tipe 2.
          </p>
        </div>

        {/* OpenFDA Citation Text */}
        <div className="flex items-center gap-3 text-[#4B5563] py-2">
          <Info strokeWidth={2.4} className="w-[40px] h-[40px] text-[#2F80ED] shrink-0" />
          <span className="font-body text-[32px] leading-snug">
            Sumber data: OpenFDA. Konsultasikan dengan dokter atau apoteker.
          </span>
        </div>

        {/* Outline Blue Button: Bagikan ke Tenaga Kesehatan */}
        <button
          onClick={() => alert('Laporan interaksi telah dibagikan ke dr. Rina!')}
          className="w-full h-[150px] bg-white hover:bg-[#EAF2FE] active:scale-[0.98] border-[4px] border-[#2F80ED] text-[#2F80ED] font-heading font-bold text-[42px] rounded-[32px] flex items-center justify-center gap-4 transition-all cursor-pointer shadow-sm mb-4"
        >
          <Share2 strokeWidth={3} className="w-[50px] h-[50px]" />
          <span>Bagikan ke Tenaga Kesehatan</span>
        </button>
      </div>

      {/* Detail Modal for "Lihat Saran" */}
      {showDetailModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-12">
          <div className="w-full bg-white rounded-[40px] p-10 flex flex-col gap-6 shadow-2xl border-4 border-[#D93838]">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4 text-[#D93838]">
                <AlertTriangle strokeWidth={3} className="w-[56px] h-[56px]" />
                <h3 className="font-heading font-bold text-[48px]">
                  Rekomendasi Klinis
                </h3>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-3 rounded-full hover:bg-gray-100 text-gray-700"
              >
                <X strokeWidth={3} className="w-[44px] h-[44px]" />
              </button>
            </div>
            <p className="font-body text-[36px] text-[#1F2A37] leading-relaxed">
              <strong>Saran untuk Dokter / Apoteker:</strong>
              <br />
              1. Batasi dosis Simvastatin maksimal 20 mg sehari jika bersama Amlodipin.
              <br />
              2. Alternatif: Ganti ke Atorvastatin atau Rosuvastatin yang tidak berinteraksi signifikan via CYP3A4.
              <br />
              3. Beritahu pasien jika mengalami nyeri atau kelemahan otot mendadak.
            </p>
            <button
              onClick={() => setShowDetailModal(false)}
              className="w-full h-[130px] bg-[#0E9F8E] text-white font-heading font-bold text-[40px] rounded-[28px] mt-2 cursor-pointer"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="cek-interaksi" onNavigate={onNavigate} />
    </div>
  );
};
