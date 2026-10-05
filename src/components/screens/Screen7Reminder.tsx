import React from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import {
  Bell,
  CheckCircle,
  Clock,
  UserCheck,
  Pill,
} from 'lucide-react';

interface Screen7ReminderProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen7Reminder: React.FC<Screen7ReminderProps> = ({
  onNavigate,
}) => {
  const handleConfirm = () => {
    alert('Terima kasih! Dosis Amlodipin 5 mg dicatat sebagai Selesai.');
    onNavigate?.('screen-5-home');
  };

  const handleSnooze = () => {
    alert('Pengingat ditunda selama 10 menit.');
    onNavigate?.('screen-5-home');
  };

  const handleSkip = () => {
    if (confirm('Apakah Anda yakin ingin melewati dosis ini? Caregiver akan diberi tahu.')) {
      onNavigate?.('screen-5-home');
    }
  };

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      {/* Top Half: Teal #0E9F8E with curved bottom edge */}
      <div className="relative w-full h-[52%] bg-[#0E9F8E] text-white flex flex-col justify-between items-center px-12 pt-0 pb-16 rounded-b-[80px] shadow-lg">
        {/* Status Bar (Dark mode text for white background) */}
        <div className="w-full">
          <StatusBar dark={true} time="07:00" />
        </div>

        {/* 200px Bell Icon with Subtle Soundwaves */}
        <div className="relative my-auto flex items-center justify-center">
          {/* Sound waves */}
          <div className="absolute w-[300px] h-[300px] rounded-full border-4 border-white/20 animate-ping pointer-events-none" />
          <div className="absolute w-[250px] h-[250px] rounded-full border-2 border-white/40 pointer-events-none" />
          <div className="p-8 rounded-full bg-white/15 backdrop-blur-sm shadow-inner">
            <Bell strokeWidth={2.4} className="w-[180px] h-[180px] text-white" />
          </div>
        </div>

        {/* Time and Title */}
        <div className="flex flex-col items-center text-center gap-2 mb-2">
          <span className="font-heading font-bold text-[160px] text-white leading-none tracking-tight drop-shadow-md">
            07.00
          </span>
          <span className="font-heading font-semibold text-[60px] text-white/95 tracking-wide">
            Waktunya Minum Obat
          </span>
        </div>
      </div>

      {/* Center Floating White Card with 40px radius */}
      <div className="relative -mt-20 z-20 px-12">
        <div className="w-full bg-white border-2 border-[#E5E7EB] rounded-[40px] p-8 flex items-center gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <div className="p-5 bg-[#E6F6F4] text-[#0E9F8E] rounded-[28px] shrink-0 border border-[#0E9F8E]/20">
            <Pill strokeWidth={2.8} className="w-[84px] h-[84px]" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-[64px] text-[#1F2A37] leading-tight">
              Amlodipin 5 mg
            </h2>
            <p className="font-body text-[44px] text-[#4B5563] font-semibold mt-1">
              1 tablet &bull; Sesudah makan
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="flex-1 flex flex-col justify-end px-12 pb-12 gap-5 z-10">
        {/* Very Large Green Button: SUDAH MINUM (Height 190px, Full Width, Text 52px) */}
        <button
          onClick={handleConfirm}
          className="w-full h-[190px] bg-[#2E9E5B] hover:bg-[#25824A] active:scale-[0.98] text-white font-heading font-bold text-[52px] rounded-[36px] flex items-center justify-center gap-5 transition-all shadow-[0_16px_36px_rgba(46,158,91,0.35)] cursor-pointer"
        >
          <CheckCircle strokeWidth={3.4} className="w-[64px] h-[64px]" />
          <span>SUDAH MINUM</span>
        </button>

        {/* Outline Blue Button: Tunda 10 Menit (Height 150px) */}
        <button
          onClick={handleSnooze}
          className="w-full h-[150px] bg-white hover:bg-[#EAF2FE] active:scale-[0.98] border-[4px] border-[#2F80ED] text-[#2F80ED] font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-4 transition-all cursor-pointer"
        >
          <Clock strokeWidth={3} className="w-[50px] h-[50px]" />
          <span>Tunda 10 Menit</span>
        </button>

        {/* Red Text Link: Lewati dosis ini 40px */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handleSkip}
            className="font-heading font-semibold text-[40px] text-[#D93838] hover:underline cursor-pointer py-2"
          >
            Lewati dosis ini
          </button>
        </div>

        {/* Small text: Keluarga akan diberi tahu jika terlewat in gray 34px */}
        <div className="flex items-center justify-center gap-3 text-[#4B5563] pt-2 pb-2">
          <UserCheck strokeWidth={2.4} className="w-[38px] h-[38px] text-[#4B5563]" />
          <span className="font-body text-[34px] font-semibold">
            Keluarga akan diberi tahu jika terlewat
          </span>
        </div>
      </div>
    </div>
  );
};
