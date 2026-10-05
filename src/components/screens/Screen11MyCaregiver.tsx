import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  ChevronLeft,
  Link,
  Copy,
  Lock,
  Plus,
  UserCheck,
  Check,
} from 'lucide-react';

interface Screen11MyCaregiverProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen11MyCaregiver: React.FC<Screen11MyCaregiverProps> = ({
  onNavigate,
}) => {
  const [budiNotify, setBudiNotify] = useState(true);
  const [budiHistory, setBudiHistory] = useState(true);
  const [rinaNotify, setRinaNotify] = useState(true);
  const [rinaHistory, setRinaHistory] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText('MED-4821');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          Caregiver Saya
        </h1>
        <div className="w-[100px]" />
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-5 overflow-y-auto space-y-6">
        {/* Intro text */}
        <p className="font-body text-[38px] text-[#4B5563] leading-relaxed">
          Anda yang mengatur siapa yang boleh memantau.
        </p>

        {/* Caregiver Card 1: Budi (Anak) */}
        <div className="w-full bg-white border-2 border-[#E5E7EB] rounded-[32px] p-7 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center justify-between border-b-2 border-[#F3F4F6] pb-5">
            <div className="flex items-center gap-5">
              <div className="w-[90px] h-[90px] rounded-full border-2 border-[#2F80ED] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Budi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                  Budi (Anak)
                </span>
                <span className="font-body text-[30px] text-[#4B5563]">
                  Keluarga inti &bull; Terhubung sejak Jan 2026
                </span>
              </div>
            </div>
            {/* Blue Chip: Keluarga */}
            <span className="px-5 py-2 rounded-full bg-[#EAF2FE] text-[#2F80ED] font-heading font-bold text-[30px] border border-[#2F80ED]/30">
              Keluarga
            </span>
          </div>

          {/* Toggle 1: Terima notifikasi jika terlewat */}
          <div
            onClick={() => setBudiNotify(!budiNotify)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-body text-[34px] text-[#1F2A37] font-semibold">
              Terima notifikasi jika terlewat
            </span>
            <div
              className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                budiNotify ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
              }`}
            >
              <div
                className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                  budiNotify ? 'translate-x-[36px]' : 'translate-x-0'
                }`}
              />
            </div>
          </div>

          {/* Toggle 2: Lihat riwayat minum */}
          <div
            onClick={() => setBudiHistory(!budiHistory)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-body text-[34px] text-[#1F2A37] font-semibold">
              Lihat riwayat minum
            </span>
            <div
              className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                budiHistory ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
              }`}
            >
              <div
                className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                  budiHistory ? 'translate-x-[36px]' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Caregiver Card 2: dr. Rina */}
        <div className="w-full bg-white border-2 border-[#E5E7EB] rounded-[32px] p-7 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center justify-between border-b-2 border-[#F3F4F6] pb-5">
            <div className="flex items-center gap-5">
              <div className="w-[90px] h-[90px] rounded-full border-2 border-[#0E9F8E] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80"
                  alt="dr. Rina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                  dr. Rina
                </span>
                <span className="font-body text-[30px] text-[#4B5563]">
                  Dokter Spesialis Jantung &bull; RS Harapan
                </span>
              </div>
            </div>
            {/* Teal Chip: Tenaga Kesehatan */}
            <span className="px-5 py-2 rounded-full bg-[#E6F6F4] text-[#0E9F8E] font-heading font-bold text-[30px] border border-[#0E9F8E]/30">
              Tenaga Kesehatan
            </span>
          </div>

          {/* Toggle 1 */}
          <div
            onClick={() => setRinaNotify(!rinaNotify)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-body text-[34px] text-[#1F2A37] font-semibold">
              Terima notifikasi jika terlewat
            </span>
            <div
              className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                rinaNotify ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
              }`}
            >
              <div
                className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                  rinaNotify ? 'translate-x-[36px]' : 'translate-x-0'
                }`}
              />
            </div>
          </div>

          {/* Toggle 2 */}
          <div
            onClick={() => setRinaHistory(!rinaHistory)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-body text-[34px] text-[#1F2A37] font-semibold">
              Lihat riwayat minum
            </span>
            <div
              className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                rinaHistory ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
              }`}
            >
              <div
                className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                  rinaHistory ? 'translate-x-[36px]' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Teal Tinted #E6F6F4 Invitation Card with Link Icon */}
        <div className="w-full bg-[#E6F6F4] border-2 border-[#0E9F8E]/40 rounded-[32px] p-7 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-[#0E9F8E] text-white rounded-2xl">
              <Link strokeWidth={2.8} className="w-[48px] h-[48px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[32px] text-[#0B6E64]">
                Kode undangan Anda
              </span>
              <span className="font-heading font-bold text-[54px] text-[#1F2A37] tracking-wider">
                MED-4821
              </span>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="h-[96px] px-8 bg-white hover:bg-[#CCEBE6] border-2 border-[#0E9F8E] text-[#0E9F8E] font-heading font-bold text-[34px] rounded-2xl flex items-center gap-3 cursor-pointer shadow-sm transition-all"
          >
            {copied ? (
              <>
                <Check strokeWidth={3} className="w-[36px] h-[36px] text-[#2E9E5B]" />
                <span className="text-[#2E9E5B]">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy strokeWidth={2.8} className="w-[36px] h-[36px]" />
                <span>Salin</span>
              </>
            )}
          </button>
        </div>

        {/* Large Teal Button: + Undang Caregiver (Height 150px) */}
        <button
          onClick={() => alert('Membuka tautan undangan WhatsApp atau SMS untuk Caregiver!')}
          className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-4 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer"
        >
          <Plus strokeWidth={3.2} className="w-[50px] h-[50px]" />
          <span>+ Undang Caregiver</span>
        </button>

        {/* Small Info with Lock Icon */}
        <div className="flex items-center justify-center gap-3 text-[#4B5563] pt-2 pb-4">
          <Lock strokeWidth={2.4} className="w-[36px] h-[36px] text-[#4B5563]" />
          <span className="font-body text-[32px] font-semibold text-center">
            Data Anda dienkripsi. Anda bisa mencabut akses kapan saja.
          </span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="pasien" onNavigate={onNavigate} />
    </div>
  );
};
