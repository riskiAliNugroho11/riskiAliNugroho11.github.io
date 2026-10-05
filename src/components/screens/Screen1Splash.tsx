import React from 'react';
import { MeditoLogo } from '../common/MeditoLogo';
import { ScreenId } from '../../types/medito';

interface Screen1SplashProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen1Splash: React.FC<Screen1SplashProps> = ({ onNavigate }) => {
  return (
    <div
      onClick={() => onNavigate?.('screen-2-onboarding')}
      className="relative w-[1080px] h-[1920px] bg-gradient-to-b from-[#0E9F8E] to-[#0B6E64] text-white flex flex-col justify-between items-center p-16 select-none overflow-hidden cursor-pointer"
    >
      {/* Background Decorative Circles */}
      <div className="absolute -top-[120px] -right-[120px] w-[540px] h-[540px] rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-[160px] -left-[160px] w-[620px] h-[620px] rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute top-1/3 -left-[100px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />

      {/* Top Header Placeholder spacing */}
      <div className="w-full flex items-center justify-between opacity-80 pt-6">
        <span className="font-heading font-semibold text-[36px] tracking-wide">
          MEDITO SYSTEM
        </span>
        <span className="font-body text-[32px] tracking-wider uppercase px-4 py-1.5 rounded-full bg-white/15">
          v2.4
        </span>
      </div>

      {/* Center Branding Area */}
      <div className="flex flex-col items-center text-center max-w-[880px] z-10 -mt-16">
        {/* Outline Logo */}
        <div className="relative mb-12 animate-pulse">
          <MeditoLogo size={320} variant="white" showCircle={true} />
        </div>

        {/* Brand Name */}
        <h1 className="font-heading font-bold text-[120px] tracking-tight leading-none mb-6 drop-shadow-md">
          MEDITO
        </h1>

        {/* Full App Title */}
        <p className="font-body font-semibold text-[44px] text-white/95 mb-6 tracking-wide">
          Medication Digital Monitoring
        </p>

        {/* Tagline */}
        <p className="font-body italic text-[40px] text-white/90 max-w-[760px] leading-relaxed">
          &ldquo;Tepat Obat, Tepat Dosis, Tepat Waktu&rdquo;
        </p>
      </div>

      {/* Bottom Loading Indicator */}
      <div className="w-full max-w-[760px] flex flex-col items-center gap-6 z-10 pb-8">
        <div className="w-full h-[14px] bg-white/30 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-[#2F80ED] rounded-full shadow-[0_0_12px_#2F80ED] animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        <div className="flex items-center justify-between w-full text-white/85">
          <span className="font-body text-[36px]">Memuat...</span>
          <span className="font-heading text-[32px] font-semibold tracking-wider">
            Sentuh untuk Lanjut &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};
