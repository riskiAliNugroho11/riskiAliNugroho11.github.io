import React from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  Bell,
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

interface Screen5PatientHomeProps {
  onNavigate?: (screenId: ScreenId) => void;
  elderlyMode?: boolean;
}

export const Screen5PatientHome: React.FC<Screen5PatientHomeProps> = ({
  onNavigate,
  elderlyMode = false,
}) => {
  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body relative">
      <StatusBar />

      {/* Main Scrollable Area */}
      <div className="flex-1 flex flex-col px-12 py-4 overflow-y-auto space-y-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between pt-2 pb-2">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="w-[100px] h-[100px] rounded-full border-4 border-[#0E9F8E] overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Bu Sari"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Greeting */}
            <div className="flex flex-col">
              <span className="font-body text-[32px] text-[#4B5563] font-semibold">
                Selamat pagi,
              </span>
              <h1 className="font-heading font-semibold text-[56px] text-[#1F2A37] leading-tight">
                Bu Sari
              </h1>
            </div>
          </div>

          {/* Bell Icon with Red Badge */}
          <button
            onClick={() => onNavigate?.('screen-7-reminder')}
            className="relative p-4 rounded-full bg-[#E6F6F4] text-[#0E9F8E] hover:bg-[#0E9F8E] hover:text-white transition-colors cursor-pointer"
            aria-label="Notifikasi Pengingat"
          >
            <Bell strokeWidth={2.8} className="w-[52px] h-[52px]" />
            <div className="absolute top-2 right-2 w-[22px] h-[22px] rounded-full bg-[#D93838] border-2 border-white" />
          </button>
        </div>

        {/* Warning Banner: Pink background, triangle icon */}
        <div
          onClick={() => onNavigate?.('screen-9-interaction')}
          className="w-full bg-[#FEE2E2] border-2 border-[#D93838] rounded-[32px] p-6 flex items-center justify-between cursor-pointer hover:bg-[#FED7D7] transition-all shadow-sm"
        >
          <div className="flex items-center gap-5">
            <div className="p-3 bg-[#D93838] text-white rounded-2xl">
              <AlertTriangle strokeWidth={2.8} className="w-[48px] h-[48px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[38px] text-[#991B1B]">
                1 peringatan interaksi obat
              </span>
              <span className="font-body text-[30px] text-[#7F1D1D]">
                Amlodipin berinteraksi dengan Simvastatin
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-heading font-bold text-[34px] text-[#D93838]">
            <span>Lihat</span>
            <ChevronRight strokeWidth={3} className="w-[38px] h-[38px]" />
          </div>
        </div>

        {/* Card: Kepatuhan Minggu Ini */}
        <div className="w-full bg-[#E6F6F4] border-2 border-[#0E9F8E]/30 rounded-[36px] p-8 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-2 max-w-[540px]">
            <div className="flex items-center gap-3 text-[#0B6E64]">
              <TrendingUp strokeWidth={2.6} className="w-[40px] h-[40px]" />
              <span className="font-heading font-bold text-[36px]">
                Kepatuhan Minggu Ini
              </span>
            </div>
            <h2 className="font-heading font-bold text-[52px] text-[#1F2A37] leading-tight">
              Pertahankan, Anda hebat!
            </h2>
            <p className="font-body text-[32px] text-[#4B5563]">
              6 dari 7 dosis berhasil diminum tepat waktu.
            </p>
          </div>

          {/* 85% Teal Progress Circle */}
          <div className="relative w-[180px] h-[180px] flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="48"
                stroke="#CCEBE6"
                strokeWidth="14"
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                stroke="#0E9F8E"
                strokeWidth="14"
                strokeDasharray={2 * Math.PI * 48}
                strokeDashoffset={2 * Math.PI * 48 * (1 - 0.85)}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-heading font-bold text-[44px] text-[#0E9F8E] leading-none">
                85%
              </span>
            </div>
          </div>
        </div>

        {/* Section: Jadwal Hari Ini */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-[48px] text-[#1F2A37]">
              Jadwal Hari Ini
            </h3>
            <span className="font-body text-[32px] text-[#4B5563] font-semibold">
              Senin, 5 Okt
            </span>
          </div>

          {/* Pill Card 1: 07.00 - Amlodipin (Done) */}
          <div
            onClick={() => onNavigate?.('screen-8-med-detail')}
            className="w-full bg-white border-2 border-[#E5E7EB] hover:border-[#0E9F8E] rounded-[32px] p-7 flex items-center justify-between shadow-sm cursor-pointer transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-[100px] h-[100px] rounded-2xl bg-[#E6F6F4] text-[#0E9F8E] flex flex-col items-center justify-center font-heading font-bold">
                <span className="text-[34px] leading-none">07.00</span>
                <span className="text-[22px] text-[#0B6E64]">PAGI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[42px] text-[#1F2A37]">
                  Amlodipin 5 mg
                </span>
                <span className="font-body text-[34px] text-[#4B5563]">
                  1 tablet sesudah makan
                </span>
              </div>
            </div>
            {/* Green Chip: ✔ Selesai */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8F5E9] text-[#2E9E5B] border border-[#2E9E5B]/30 font-heading font-bold text-[32px]">
              <CheckCircle strokeWidth={3} className="w-[36px] h-[36px]" />
              <span>Selesai</span>
            </div>
          </div>

          {/* Pill Card 2: 13.00 - Metformin (Process + Sudah Minum button) */}
          <div className="w-full bg-white border-2 border-[#0E9F8E] rounded-[32px] p-7 flex flex-col gap-5 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-[100px] h-[100px] rounded-2xl bg-[#EAF2FE] text-[#2F80ED] flex flex-col items-center justify-center font-heading font-bold">
                  <span className="text-[34px] leading-none">13.00</span>
                  <span className="text-[22px] text-[#2F80ED]">SIANG</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[42px] text-[#1F2A37]">
                    Metformin 500 mg
                  </span>
                  <span className="font-body text-[34px] text-[#4B5563]">
                    1 tablet bersama makan
                  </span>
                </div>
              </div>
              {/* Gray Chip: ⏱ Proses */}
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F3F4F6] text-[#4B5563] border border-[#9AA3AF] font-heading font-bold text-[32px]">
                <Clock strokeWidth={3} className="w-[36px] h-[36px] text-[#9AA3AF]" />
                <span>Proses</span>
              </div>
            </div>

            {/* Large Green "Sudah Minum" Action Button */}
            <button
              onClick={() => onNavigate?.('screen-7-reminder')}
              className="w-full h-[110px] bg-[#2E9E5B] hover:bg-[#25824A] active:scale-[0.98] text-white font-heading font-bold text-[40px] rounded-[24px] flex items-center justify-center gap-4 transition-all shadow-md cursor-pointer"
            >
              <CheckCircle strokeWidth={3} className="w-[44px] h-[44px]" />
              <span>Sudah Minum Sekarang</span>
            </button>
          </div>

          {/* Pill Card 3: 19.00 - Simvastatin (Missed) */}
          <div
            onClick={() => onNavigate?.('screen-8-med-detail')}
            className="w-full bg-white border-2 border-[#E5E7EB] hover:border-[#D93838] rounded-[32px] p-7 flex items-center justify-between shadow-sm cursor-pointer transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-[100px] h-[100px] rounded-2xl bg-[#FEE2E2] text-[#D93838] flex flex-col items-center justify-center font-heading font-bold">
                <span className="text-[34px] leading-none">19.00</span>
                <span className="text-[22px] text-[#D93838]">MALAM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[42px] text-[#1F2A37]">
                  Simvastatin 20 mg
                </span>
                <span className="font-body text-[34px] text-[#4B5563]">
                  1 tablet malam hari
                </span>
              </div>
            </div>
            {/* Red Chip: ❗ Terlewat */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FEE2E2] text-[#D93838] border border-[#D93838]/40 font-heading font-bold text-[32px]">
              <XCircle strokeWidth={3} className="w-[36px] h-[36px]" />
              <span>Terlewat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Circular Teal Button: + Tambah Obat */}
      <button
        onClick={() => onNavigate?.('screen-6-add-med')}
        className="absolute bottom-[230px] right-12 h-[120px] px-8 bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-95 text-white font-heading font-bold text-[36px] rounded-full flex items-center gap-4 shadow-[0_12px_28px_rgba(14,159,142,0.38)] cursor-pointer z-40 transition-transform"
        aria-label="Tambah Obat"
      >
        <Plus strokeWidth={3.2} className="w-[48px] h-[48px]" />
        <span>Tambah Obat</span>
      </button>

      {/* Bottom Navigation (5 tabs) */}
      <BottomNavigation activeTab="beranda" onNavigate={onNavigate} />
    </div>
  );
};
