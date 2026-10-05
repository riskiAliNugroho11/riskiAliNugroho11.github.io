import React from 'react';
import { Wifi, Signal, BatteryCharging } from 'lucide-react';

interface StatusBarProps {
  dark?: boolean;
  time?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  dark = false,
  time = '09:41',
}) => {
  const textColor = dark ? 'text-white' : 'text-[#1F2A37]';

  return (
    <div className={`w-full h-[96px] px-12 flex items-center justify-between select-none shrink-0 ${textColor}`}>
      {/* Time */}
      <span className="font-heading font-bold text-[40px] tracking-tight">
        {time}
      </span>

      {/* Dynamic island / speaker aesthetic slot */}
      <div className="w-[280px] h-[36px] bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center gap-3">
        <div className="w-3.5 h-3.5 rounded-full bg-black/40 dark:bg-white/40" />
        <div className="w-16 h-2 rounded-full bg-black/30 dark:bg-white/30" />
      </div>

      {/* Connectivity icons */}
      <div className="flex items-center gap-4">
        <Signal strokeWidth={2.6} className="w-[38px] h-[38px]" />
        <Wifi strokeWidth={2.6} className="w-[38px] h-[38px]" />
        <div className="flex items-center gap-1 font-bold text-[36px]">
          <span>98%</span>
          <BatteryCharging strokeWidth={2.6} className="w-[42px] h-[42px]" />
        </div>
      </div>
    </div>
  );
};
