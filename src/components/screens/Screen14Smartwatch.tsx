import React from 'react';
import { ScreenId } from '../../types/medito';
import {
  Heart,
  BatteryCharging,
  Check,
  Clock,
  Smartphone,
  Pill,
  Wifi,
} from 'lucide-react';

interface Screen14SmartwatchProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen14Smartwatch: React.FC<Screen14SmartwatchProps> = ({
  onNavigate,
}) => {
  const handleConfirm = () => {
    alert('Dosis dikonfirmasi lewat Smartwatch! Data tersinkron ke aplikasi HP.');
    onNavigate?.('screen-5-home');
  };

  const handleSnooze = () => {
    alert('Alarm smartwatch ditunda 10 menit.');
  };

  return (
    <div className="relative w-[1080px] h-[1080px] bg-[#0B0F19] text-white flex flex-col items-center justify-between p-16 select-none overflow-hidden font-body rounded-[160px] shadow-2xl border-[16px] border-[#1E293B]">
      {/* Outer Watch Bezel Dial Accents */}
      <div className="absolute inset-4 rounded-full border-[3px] border-[#0E9F8E]/20 pointer-events-none" />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0E9F8E]" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0E9F8E]/40" />

      {/* Top Watch Bar: Digital Clock, Heart Rate, Battery */}
      <div className="w-full flex items-center justify-between px-8 pt-4 z-10">
        <div className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full">
          <Heart strokeWidth={2.8} className="w-[38px] h-[38px] text-[#EF4444] animate-pulse" />
          <span className="font-heading font-bold text-[34px] text-white">72 bpm</span>
        </div>

        <span className="font-heading font-bold text-[56px] text-[#0E9F8E] tracking-tight">
          07.02
        </span>

        <div className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full">
          <BatteryCharging strokeWidth={2.6} className="w-[36px] h-[36px] text-[#2E9E5B]" />
          <span className="font-heading font-bold text-[32px] text-white">88%</span>
        </div>
      </div>

      {/* Center Alert Body: Vibration Pulse & Medication Card */}
      <div className="flex flex-col items-center text-center max-w-[840px] z-10 my-auto">
        {/* Subtle Haptic Wave Ring */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="absolute w-[160px] h-[160px] rounded-full border-4 border-[#0E9F8E]/30 animate-ping pointer-events-none" />
          <div className="p-5 rounded-full bg-[#0E9F8E]/20 border-2 border-[#0E9F8E]">
            <Pill strokeWidth={2.6} className="w-[72px] h-[72px] text-[#0E9F8E]" />
          </div>
        </div>

        <span className="font-heading font-bold text-[36px] text-[#2F80ED] tracking-wide mb-1">
          07.00 &bull; Waktunya Minum
        </span>

        <h2 className="font-heading font-bold text-[60px] text-white leading-tight mb-2">
          Amlodipin 5 mg
        </h2>

        <p className="font-body text-[38px] text-slate-300 font-semibold">
          1 tablet &bull; Sesudah sarapan
        </p>
      </div>

      {/* Bottom Controls: Giant Green Button + Circular Snooze */}
      <div className="w-full flex items-center justify-center gap-6 px-4 pb-4 z-10">
        {/* Snooze 10m Button */}
        <button
          onClick={handleSnooze}
          className="h-[140px] px-8 rounded-[36px] bg-[#1E293B] hover:bg-[#334155] active:scale-95 border-2 border-[#475569] flex items-center justify-center gap-3 text-white font-heading font-bold text-[36px] cursor-pointer transition-all"
        >
          <Clock strokeWidth={3} className="w-[44px] h-[44px] text-[#9AA3AF]" />
          <span>Tunda 10m</span>
        </button>

        {/* Giant Green High-Contrast Confirm Button */}
        <button
          onClick={handleConfirm}
          className="flex-1 h-[140px] rounded-[36px] bg-[#2E9E5B] hover:bg-[#25824A] active:scale-95 text-white font-heading font-bold text-[44px] flex items-center justify-center gap-4 cursor-pointer transition-all shadow-[0_12px_28px_rgba(46,158,91,0.4)]"
        >
          <Check strokeWidth={3.8} className="w-[52px] h-[52px]" />
          <span>SUDAH MINUM</span>
        </button>
      </div>

      {/* Sync Status Badge */}
      <div className="flex items-center justify-center gap-2 text-slate-400 text-[26px] z-10 pb-1">
        <Smartphone strokeWidth={2.2} className="w-[28px] h-[28px] text-[#0E9F8E]" />
        <span>Sinkron dengan HP Ibu Sari</span>
      </div>
    </div>
  );
};
