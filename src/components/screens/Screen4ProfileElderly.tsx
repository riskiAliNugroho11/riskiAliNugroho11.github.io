import React, { useState } from 'react';
import { ScreenId, TextSize } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import {
  Calendar,
  Search,
  Check,
  ChevronLeft,
} from 'lucide-react';

interface Screen4ProfileElderlyProps {
  onNavigate?: (screenId: ScreenId) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  elderlyMode: boolean;
  setElderlyMode: (mode: boolean) => void;
}

export const Screen4ProfileElderly: React.FC<Screen4ProfileElderlyProps> = ({
  onNavigate,
  textSize,
  setTextSize,
  elderlyMode,
  setElderlyMode,
}) => {
  const [fullName, setFullName] = useState('Ibu Sari Rahayu');
  const [birthDate, setBirthDate] = useState('12 Mei 1958');
  const [conditions, setConditions] = useState<string[]>([
    'Hipertensi',
    'Diabetes',
  ]);

  const toggleCondition = (cond: string) => {
    if (conditions.includes(cond)) {
      setConditions(conditions.filter((c) => c !== cond));
    } else {
      setConditions([...conditions, cond]);
    }
  };

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      <div className="flex-1 flex flex-col px-16 py-4 overflow-y-auto">
        {/* Step Indicator Header */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate?.('screen-3-auth')}
              className="flex items-center gap-2 text-[#0E9F8E] font-heading font-semibold text-[36px] cursor-pointer"
            >
              <ChevronLeft strokeWidth={3} className="w-[44px] h-[44px]" />
              <span>Kembali</span>
            </button>
            <span className="font-heading font-semibold text-[36px] text-[#4B5563]">
              Langkah 2 dari 3
            </span>
          </div>

          {/* Teal Progress Bar */}
          <div className="w-full h-[12px] bg-[#E5E7EB] rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-[#0E9F8E] rounded-full" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-heading font-bold text-[64px] text-[#1F2A37] mb-8 leading-tight">
          Atur Tampilan Anda
        </h1>

        {/* Form Inputs (Height 150px, Radius 32px) */}
        <div className="flex flex-col gap-5 mb-8">
          {/* Nama Lengkap */}
          <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] rounded-[32px] px-8 flex flex-col justify-center">
            <span className="text-[28px] text-[#4B5563] font-semibold">Nama Lengkap</span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full font-body text-[40px] text-[#1F2A37] font-semibold bg-transparent outline-none leading-none mt-1"
            />
          </div>

          {/* Tanggal Lahir with Calendar Icon */}
          <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] rounded-[32px] px-8 flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <span className="text-[28px] text-[#4B5563] font-semibold">Tanggal Lahir</span>
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full font-body text-[40px] text-[#1F2A37] font-semibold bg-transparent outline-none leading-none mt-1"
              />
            </div>
            <Calendar strokeWidth={2.6} className="w-[52px] h-[52px] text-[#4B5563]" />
          </div>
        </div>

        {/* Kondisi Kesehatan Chips */}
        <div className="flex flex-col gap-4 mb-8">
          <label className="font-heading font-bold text-[40px] text-[#1F2A37]">
            Kondisi kesehatan
          </label>
          <div className="flex flex-wrap gap-4">
            {['Hipertensi', 'Diabetes', 'Jantung', 'Lainnya'].map((cond) => {
              const isSelected = conditions.includes(cond);
              return (
                <button
                  key={cond}
                  onClick={() => toggleCondition(cond)}
                  className={`h-[90px] px-8 rounded-[28px] font-heading font-semibold text-[38px] flex items-center gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0E9F8E] text-white shadow-sm'
                      : 'bg-white border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#9AA3AF]'
                  }`}
                >
                  {isSelected && <Check strokeWidth={3} className="w-[36px] h-[36px]" />}
                  <span>{cond}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ukuran Teks (Aa) Side-by-side cards */}
        <div className="flex flex-col gap-4 mb-8">
          <label className="font-heading font-bold text-[40px] text-[#1F2A37]">
            Ukuran Teks
          </label>
          <div className="grid grid-cols-3 gap-4">
            {/* Normal */}
            <button
              onClick={() => setTextSize('normal')}
              className={`h-[180px] rounded-[32px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                textSize === 'normal'
                  ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]/50 shadow-sm'
                  : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
              }`}
            >
              <span className="font-heading font-bold text-[48px] text-[#1F2A37]">
                Aa
              </span>
              <span className="font-body text-[32px] text-[#4B5563] font-semibold">
                Normal
              </span>
            </button>

            {/* Besar */}
            <button
              onClick={() => setTextSize('large')}
              className={`h-[180px] rounded-[32px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                textSize === 'large'
                  ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]/50 shadow-sm'
                  : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
              }`}
            >
              <span className="font-heading font-bold text-[60px] text-[#1F2A37]">
                Aa
              </span>
              <span className="font-body text-[32px] text-[#4B5563] font-semibold">
                Besar
              </span>
            </button>

            {/* Extra Besar */}
            <button
              onClick={() => setTextSize('xlarge')}
              className={`h-[180px] rounded-[32px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                textSize === 'xlarge'
                  ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]/50 shadow-sm'
                  : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
              }`}
            >
              <span className="font-heading font-bold text-[72px] text-[#1F2A37]">
                Aa
              </span>
              <span className="font-body text-[32px] text-[#4B5563] font-semibold">
                Extra Besar
              </span>
            </button>
          </div>
        </div>

        {/* Toggle Card "Mode Lansia" */}
        <div
          onClick={() => setElderlyMode(!elderlyMode)}
          className={`w-full min-h-[170px] rounded-[32px] p-6 flex items-center justify-between cursor-pointer transition-all mb-8 ${
            elderlyMode
              ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]'
              : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
          }`}
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-[#0E9F8E] text-white rounded-2xl shrink-0">
              <Search strokeWidth={2.8} className="w-[56px] h-[56px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                Mode Lansia
              </span>
              <span className="font-body text-[32px] text-[#4B5563] max-w-[620px]">
                Teks sangat besar, tombol lebih besar, kontras tinggi
              </span>
            </div>
          </div>

          {/* Switch toggle control */}
          <div
            className={`w-[100px] h-[56px] rounded-full p-1.5 transition-colors duration-300 flex items-center ${
              elderlyMode ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
            }`}
          >
            <div
              className={`w-[44px] h-[44px] rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                elderlyMode ? 'translate-x-[44px]' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Large "Lanjut" Button */}
        <button
          onClick={() => onNavigate?.('screen-5-home')}
          className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-4 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer mt-auto mb-2"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};
