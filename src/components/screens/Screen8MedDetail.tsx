import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  ChevronLeft,
  Pill,
  Clock,
  HeartPulse,
  AlertCircle,
  Package,
  AlertTriangle,
  ShieldCheck,
  CalendarCheck,
  Edit3,
} from 'lucide-react';

interface Screen8MedDetailProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen8MedDetail: React.FC<Screen8MedDetailProps> = ({
  onNavigate,
}) => {
  const [tab, setTab] = useState<'ringkasan' | 'jadwal' | 'peringatan'>('ringkasan');

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Header */}
      <div className="w-full px-12 pt-3 pb-3 flex items-center justify-between border-b border-[#E5E7EB]">
        <button
          onClick={() => onNavigate?.('screen-5-home')}
          className="flex items-center gap-2 text-[#0E9F8E] font-heading font-semibold text-[38px] cursor-pointer"
        >
          <ChevronLeft strokeWidth={3} className="w-[48px] h-[48px]" />
          <span>Kembali</span>
        </button>
        <h1 className="font-heading font-bold text-[50px] text-[#1F2A37]">
          Amlodipin 5 mg
        </h1>
        <div className="w-[100px]" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-5 overflow-y-auto space-y-6">
        {/* Top Card: Teal Tint #E6F6F4 with Tablet Illustration & Category Chip */}
        <div className="w-full bg-[#E6F6F4] border-2 border-[#0E9F8E]/30 rounded-[36px] p-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-6">
            {/* Outline Tablet Illustration */}
            <div className="w-[110px] h-[110px] rounded-3xl bg-white border-2 border-[#0E9F8E] flex items-center justify-center text-[#0E9F8E] shadow-sm">
              <Pill strokeWidth={2.8} className="w-[72px] h-[72px]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-heading font-bold text-[52px] text-[#1F2A37] leading-none">
                Amlodipin
              </span>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0E9F8E] text-white font-heading font-semibold text-[30px] w-fit">
                Obat Tekanan Darah
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="font-body text-[30px] text-[#4B5563]">Sisa Stok</span>
            <p className="font-heading font-bold text-[44px] text-[#0E9F8E]">12 tablet</p>
          </div>
        </div>

        {/* Segmented Tabs: Ringkasan | Jadwal | Peringatan (Active Teal) */}
        <div className="w-full h-[110px] p-2 bg-[#F3F4F6] rounded-[28px] flex items-center">
          {[
            { id: 'ringkasan', label: 'Ringkasan' },
            { id: 'jadwal', label: 'Jadwal' },
            { id: 'peringatan', label: 'Peringatan' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`flex-1 h-full rounded-[22px] font-heading font-bold text-[36px] transition-all cursor-pointer ${
                tab === t.id
                  ? 'bg-[#0E9F8E] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#1F2A37]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Info Rows with Outline Icons */}
        <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] p-6 divide-y-2 divide-[#E5E7EB] shadow-sm">
          {/* Row 1: Dosis */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#E6F6F4] text-[#0E9F8E] rounded-2xl">
                <Pill strokeWidth={2.6} className="w-[44px] h-[44px]" />
              </div>
              <span className="font-body text-[36px] text-[#4B5563]">Dosis</span>
            </div>
            <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
              5 mg, 1 tablet
            </span>
          </div>

          {/* Row 2: Aturan Pakai */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#EAF2FE] text-[#2F80ED] rounded-2xl">
                <CalendarCheck strokeWidth={2.6} className="w-[44px] h-[44px]" />
              </div>
              <span className="font-body text-[36px] text-[#4B5563]">Aturan pakai</span>
            </div>
            <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
              Sesudah makan
            </span>
          </div>

          {/* Row 3: Jadwal */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#E6F6F4] text-[#0E9F8E] rounded-2xl">
                <Clock strokeWidth={2.6} className="w-[44px] h-[44px]" />
              </div>
              <span className="font-body text-[36px] text-[#4B5563]">Jadwal</span>
            </div>
            <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
              Setiap hari, 07.00
            </span>
          </div>

          {/* Row 4: Kegunaan */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#E8F5E9] text-[#2E9E5B] rounded-2xl">
                <HeartPulse strokeWidth={2.6} className="w-[44px] h-[44px]" />
              </div>
              <span className="font-body text-[36px] text-[#4B5563]">Kegunaan</span>
            </div>
            <span className="font-heading font-bold text-[38px] text-[#1F2A37] text-right max-w-[500px]">
              Menurunkan tekanan darah
            </span>
          </div>

          {/* Row 5: Efek Samping Umum */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#FEE2E2] text-[#D93838] rounded-2xl">
                <AlertCircle strokeWidth={2.6} className="w-[44px] h-[44px]" />
              </div>
              <span className="font-body text-[36px] text-[#4B5563]">Efek samping umum</span>
            </div>
            <span className="font-heading font-bold text-[38px] text-[#1F2A37] text-right max-w-[500px]">
              Pusing, bengkak kaki
            </span>
          </div>

          {/* Row 6: Stok */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-[#E6F6F4] text-[#0E9F8E] rounded-2xl">
                <Package strokeWidth={2.6} className="w-[44px] h-[44px]" />
              </div>
              <span className="font-body text-[36px] text-[#4B5563]">Stok</span>
            </div>
            <span className="font-heading font-bold text-[40px] text-[#2E9E5B]">
              12 tablet tersisa
            </span>
          </div>
        </div>

        {/* Light Yellow Warning Box */}
        <div className="w-full bg-[#FEF9C3] border-2 border-[#EAB308] rounded-[28px] p-6 flex items-center gap-5">
          <div className="p-3 bg-[#EAB308] text-white rounded-2xl shrink-0">
            <AlertTriangle strokeWidth={2.8} className="w-[48px] h-[48px]" />
          </div>
          <p className="font-body font-semibold text-[36px] text-[#854D0E] leading-snug">
            Jangan berhenti minum tanpa saran dokter.
          </p>
        </div>

        {/* Action Buttons (Height 150px) */}
        <div className="flex flex-col gap-4 pt-2">
          {/* Large Outline Blue Button: Cek Interaksi Obat Ini */}
          <button
            onClick={() => onNavigate?.('screen-9-interaction')}
            className="w-full h-[150px] bg-white hover:bg-[#EAF2FE] active:scale-[0.98] border-[4px] border-[#2F80ED] text-[#2F80ED] font-heading font-bold text-[42px] rounded-[32px] flex items-center justify-center gap-4 transition-all cursor-pointer shadow-sm"
          >
            <ShieldCheck strokeWidth={3} className="w-[50px] h-[50px]" />
            <span>Cek Interaksi Obat Ini</span>
          </button>

          {/* Large Teal Button: Ubah Jadwal */}
          <button
            onClick={() => onNavigate?.('screen-6-add-med')}
            className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[42px] rounded-[32px] flex items-center justify-center gap-4 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer"
          >
            <Edit3 strokeWidth={3} className="w-[50px] h-[50px]" />
            <span>Ubah Jadwal</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation (Obat Active) */}
      <BottomNavigation activeTab="obat" onNavigate={onNavigate} />
    </div>
  );
};
