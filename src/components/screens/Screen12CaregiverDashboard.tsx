import React from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  ChevronDown,
  CheckCircle,
  Clock,
  XCircle,
  Bell,
  Phone,
  Send,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';

interface Screen12CaregiverDashboardProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen12CaregiverDashboard: React.FC<Screen12CaregiverDashboardProps> = ({
  onNavigate,
}) => {
  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-4 overflow-y-auto space-y-6">
        {/* Header: Memantau Ibu Sari with patient dropdown and avatar */}
        <div className="flex items-center justify-between pt-2 pb-2 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-4">
            <div className="w-[90px] h-[90px] rounded-full border-4 border-[#0E9F8E] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Ibu Sari"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-[30px] text-[#4B5563]">
                Memantau Pasien:
              </span>
              <button className="flex items-center gap-2 font-heading font-bold text-[48px] text-[#1F2A37] hover:text-[#0E9F8E] cursor-pointer">
                <span>Ibu Sari</span>
                <ChevronDown strokeWidth={3} className="w-[38px] h-[38px] text-[#0E9F8E]" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E6F6F4] text-[#0E9F8E] font-heading font-bold text-[30px]">
            <span>Mode Caregiver</span>
          </div>
        </div>

        {/* Card: Hari Ini with 3 Large Numbers with Icons */}
        <div className="w-full bg-white border-2 border-[#E5E7EB] rounded-[36px] p-7 shadow-sm">
          <h2 className="font-heading font-bold text-[40px] text-[#1F2A37] mb-5">
            Hari Ini &bull; Senin, 5 Okt
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {/* 2 Selesai (Green #2E9E5B) */}
            <div className="bg-[#E8F5E9] border-2 border-[#2E9E5B]/40 rounded-[28px] p-5 flex flex-col items-center justify-center gap-2">
              <CheckCircle strokeWidth={3} className="w-[52px] h-[52px] text-[#2E9E5B]" />
              <span className="font-heading font-bold text-[60px] text-[#2E9E5B] leading-none">
                2
              </span>
              <span className="font-heading font-bold text-[32px] text-[#2E9E5B]">
                ✔ Selesai
              </span>
            </div>

            {/* 1 Proses (Gray #9AA3AF) */}
            <div className="bg-[#F3F4F6] border-2 border-[#9AA3AF]/40 rounded-[28px] p-5 flex flex-col items-center justify-center gap-2">
              <Clock strokeWidth={3} className="w-[52px] h-[52px] text-[#9AA3AF]" />
              <span className="font-heading font-bold text-[60px] text-[#4B5563] leading-none">
                1
              </span>
              <span className="font-heading font-bold text-[32px] text-[#4B5563]">
                ⏱ Proses
              </span>
            </div>

            {/* 0 Terlewat (Red #D93838) */}
            <div className="bg-[#FEE2E2] border-2 border-[#D93838]/40 rounded-[28px] p-5 flex flex-col items-center justify-center gap-2">
              <XCircle strokeWidth={3} className="w-[52px] h-[52px] text-[#D93838]" />
              <span className="font-heading font-bold text-[60px] text-[#D93838] leading-none">
                0
              </span>
              <span className="font-heading font-bold text-[32px] text-[#D93838]">
                ❗ Terlewat
              </span>
            </div>
          </div>
        </div>

        {/* Card: Kepatuhan 7 Hari with Teal Line Chart & Number 85% */}
        <div className="w-full bg-[#E6F6F4] border-2 border-[#0E9F8E]/30 rounded-[36px] p-7 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[32px] text-[#0B6E64]">
                Kepatuhan 7 Hari Terakhir
              </span>
              <span className="font-heading font-bold text-[72px] text-[#0E9F8E] leading-none">
                85%
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#2E9E5B] font-heading font-bold text-[32px]">
              <TrendingUp strokeWidth={2.8} className="w-[36px] h-[36px]" />
              <span>Sangat Baik</span>
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="w-full h-[150px] relative pt-2">
            <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="caregiverGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0E9F8E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0E9F8E" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Area */}
              <path
                d="M 20 80 Q 90 20 160 50 T 300 30 T 440 40 L 480 20 L 480 120 L 20 120 Z"
                fill="url(#caregiverGradient)"
              />
              {/* Stroke */}
              <path
                d="M 20 80 Q 90 20 160 50 T 300 30 T 440 40 L 480 20"
                fill="none"
                stroke="#0E9F8E"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Data points */}
              <circle cx="20" cy="80" r="7" fill="#0E9F8E" />
              <circle cx="160" cy="50" r="7" fill="#0E9F8E" />
              <circle cx="300" cy="30" r="7" fill="#0E9F8E" />
              <circle cx="440" cy="40" r="7" fill="#0E9F8E" />
              <circle cx="480" cy="20" r="9" fill="#2E9E5B" stroke="#FFFFFF" strokeWidth="3" />
            </svg>
            <div className="flex justify-between text-[#4B5563] font-heading font-semibold text-[26px] pt-1">
              <span>Sen</span>
              <span>Sel</span>
              <span>Rab</span>
              <span>Kam</span>
              <span>Jum</span>
              <span>Sab</span>
              <span>Min</span>
            </div>
          </div>
        </div>

        {/* Section: Peringatan Terbaru */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-bold text-[42px] text-[#1F2A37]">
            Peringatan Terbaru
          </h3>

          {/* Alert Card 1: Red Border with Bell Icon + 2 Buttons (Height 130px) */}
          <div className="w-full bg-white border-[4px] border-[#D93838] rounded-[36px] p-7 flex flex-col gap-5 shadow-md">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-[#FEE2E2] text-[#D93838] rounded-2xl shrink-0 mt-1">
                <Bell strokeWidth={3} className="w-[50px] h-[50px]" />
              </div>
              <p className="font-heading font-bold text-[38px] text-[#1F2A37] leading-snug">
                Ibu Sari belum minum Amlodipin 07.00 (terlambat 45 menit)
              </p>
            </div>

            {/* Side-by-side action buttons: Telepon (Teal) & Kirim Pengingat (Outline Blue), Height 130px */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => alert('Menghubungi Ibu Sari via panggilan telepon...')}
                className="h-[130px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-95 text-white font-heading font-bold text-[38px] rounded-[28px] flex items-center justify-center gap-3 transition-all cursor-pointer shadow-md"
              >
                <Phone strokeWidth={3} className="w-[42px] h-[42px]" />
                <span>Telepon</span>
              </button>

              <button
                onClick={() => alert('Notifikasi pengingat mendesak telah dikirim ke HP Ibu Sari!')}
                className="h-[130px] bg-white hover:bg-[#EAF2FE] active:scale-95 border-[3px] border-[#2F80ED] text-[#2F80ED] font-heading font-bold text-[36px] rounded-[28px] flex items-center justify-center gap-3 transition-all cursor-pointer shadow-sm"
              >
                <Send strokeWidth={3} className="w-[40px] h-[40px]" />
                <span>Kirim Pengingat</span>
              </button>
            </div>
          </div>

          {/* Alert Card 2: Pink Border with Triangle Icon */}
          <div
            onClick={() => onNavigate?.('screen-9-interaction')}
            className="w-full bg-[#FFF1F2] border-2 border-[#FDA4AF] rounded-[32px] p-6 flex items-center justify-between cursor-pointer hover:bg-[#FFE4E6] transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#E11D48] text-white rounded-2xl">
                <AlertTriangle strokeWidth={2.8} className="w-[44px] h-[44px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[36px] text-[#9F1239]">
                  Peringatan interaksi obat terdeteksi
                </span>
                <span className="font-body text-[30px] text-[#881337]">
                  Amlodipin &bull; Simvastatin memerlukan perhatian dokter
                </span>
              </div>
            </div>
            <span className="font-heading font-bold text-[32px] text-[#E11D48]">
              Periksa &rarr;
            </span>
          </div>
        </div>
      </div>

      {/* Caregiver 4-Tab Bottom Navigation: Pantau (active), Pasien, Notifikasi, Akun */}
      <BottomNavigation type="caregiver" activeTab="pantau" onNavigate={onNavigate} />
    </div>
  );
};
