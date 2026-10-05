import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { AlertTriangle, Info, ArrowRight } from 'lucide-react';

interface Screen2OnboardingProps {
  onNavigate?: (screenId: ScreenId) => void;
  slideIndex?: number;
}

export const Screen2Onboarding: React.FC<Screen2OnboardingProps> = ({
  onNavigate,
  slideIndex = 0,
}) => {
  const [currentSlide, setCurrentSlide] = useState(slideIndex);

  const slides = [
    {
      id: 1,
      heading: 'Jangan Lupa Minum Obat',
      description:
        'Pengingat pintar dan konfirmasi minum obat agar pengobatan Anda tepat waktu.',
      showInfoCard: true,
      infoText: '45,3% pasien penyakit kronis di Indonesia tidak patuh minum obat',
      buttonText: 'Lanjut',
      // SVG Illustration 1: Elderly person holding smartphone and weekly pill organizer
      renderIllustration: () => (
        <svg viewBox="0 0 500 420" className="w-full h-full max-h-[480px]">
          {/* Organic Teal Shape Background */}
          <path
            d="M 60 210 C 50 100, 150 40, 260 50 C 370 60, 450 140, 440 250 C 430 360, 330 400, 230 390 C 130 380, 70 320, 60 210 Z"
            fill="#E6F6F4"
          />
          {/* Elderly character */}
          <circle cx="210" cy="150" r="55" fill="#FFE0B2" stroke="#1F2A37" strokeWidth="6" />
          {/* Hair gray */}
          <path d="M 160 140 C 160 90, 260 90, 260 140 C 250 120, 170 120, 160 140 Z" fill="#CFD8DC" />
          {/* Glasses */}
          <circle cx="192" cy="150" r="14" fill="none" stroke="#0E9F8E" strokeWidth="5" />
          <circle cx="228" cy="150" r="14" fill="none" stroke="#0E9F8E" strokeWidth="5" />
          <line x1="206" y1="150" x2="214" y2="150" stroke="#0E9F8E" strokeWidth="5" />
          {/* Smile */}
          <path d="M 198 178 Q 210 190 222 178" fill="none" stroke="#1F2A37" strokeWidth="5" strokeLinecap="round" />
          {/* Body / Clothes Teal Tint */}
          <path d="M 130 290 Q 210 220 290 290 L 280 370 L 140 370 Z" fill="#0E9F8E" opacity="0.9" />
          {/* Holding Smartphone */}
          <rect x="290" y="180" width="70" height="130" rx="14" fill="#1F2A37" stroke="#2F80ED" strokeWidth="4" />
          <rect x="298" y="196" width="54" height="98" rx="8" fill="#FFFFFF" />
          <circle cx="325" cy="225" r="14" fill="#0E9F8E" />
          <path d="M 319 225 L 323 229 L 331 221" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          {/* Weekly Pill Organizer Card */}
          <g transform="translate(90, 240)">
            <rect width="130" height="70" rx="14" fill="#FFFFFF" stroke="#0B6E64" strokeWidth="5" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
            <line x1="43" y1="0" x2="43" y2="70" stroke="#E5E7EB" strokeWidth="3" />
            <line x1="86" y1="0" x2="86" y2="70" stroke="#E5E7EB" strokeWidth="3" />
            <circle cx="22" cy="35" r="10" fill="#0E9F8E" />
            <circle cx="65" cy="35" r="10" fill="#2F80ED" />
            <circle cx="108" cy="35" r="10" fill="#2E9E5B" />
          </g>
          {/* Floating pill accents */}
          <rect x="380" y="110" width="40" height="18" rx="9" fill="#2E9E5B" transform="rotate(35 380 110)" />
          <rect x="90" y="110" width="36" height="16" rx="8" fill="#2F80ED" transform="rotate(-25 90 110)" />
        </svg>
      ),
    },
    {
      id: 2,
      heading: 'Keluarga Ikut Memantau',
      description:
        'Caregiver dapat memantau kepatuhan minum obat Anda dari jarak jauh.',
      showInfoCard: false,
      infoText: '',
      buttonText: 'Lanjut',
      // SVG Illustration 2: Family looking at phone together
      renderIllustration: () => (
        <svg viewBox="0 0 500 420" className="w-full h-full max-h-[480px]">
          {/* Organic Teal Shape */}
          <path
            d="M 70 200 C 60 90, 160 30, 270 40 C 380 50, 460 130, 450 240 C 440 350, 340 410, 240 400 C 140 390, 80 310, 70 200 Z"
            fill="#E6F6F4"
          />
          {/* Person 1 (Caregiver/Child) */}
          <circle cx="180" cy="160" r="48" fill="#FFE0B2" stroke="#1F2A37" strokeWidth="5" />
          <path d="M 140 145 C 140 100, 220 100, 220 145 Z" fill="#2F80ED" />
          <path d="M 120 280 Q 180 230 240 280 L 230 360 L 130 360 Z" fill="#2F80ED" opacity="0.85" />
          {/* Person 2 (Elderly Parent) */}
          <circle cx="310" cy="170" r="50" fill="#FFE0B2" stroke="#1F2A37" strokeWidth="5" />
          <path d="M 265 155 C 265 110, 355 110, 355 155 Z" fill="#CFD8DC" />
          {/* Glasses */}
          <circle cx="295" cy="170" r="12" fill="none" stroke="#0E9F8E" strokeWidth="4" />
          <circle cx="325" cy="170" r="12" fill="none" stroke="#0E9F8E" strokeWidth="4" />
          <line x1="307" y1="170" x2="313" y2="170" stroke="#0E9F8E" strokeWidth="4" />
          <path d="M 250 290 Q 310 240 370 290 L 360 370 L 260 370 Z" fill="#0E9F8E" opacity="0.85" />
          {/* Center Phone with Heart & Live Checkmark */}
          <rect x="220" y="210" width="80" height="140" rx="16" fill="#1F2A37" stroke="#FFFFFF" strokeWidth="6" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.15))" />
          <rect x="228" y="226" width="64" height="108" rx="10" fill="#E6F6F4" />
          <circle cx="260" cy="260" r="18" fill="#2E9E5B" />
          <path d="M 252 260 L 257 265 L 268 254" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <path d="M 260 290 Q 252 282 248 288 Q 244 294 260 306 Q 276 294 272 288 Q 268 282 260 290 Z" fill="#D93838" />
        </svg>
      ),
    },
    {
      id: 3,
      heading: 'Cegah Interaksi Obat Berbahaya',
      description:
        'Deteksi dini interaksi antar-obat sebelum membahayakan.',
      showInfoCard: false,
      infoText: '',
      buttonText: 'Mulai',
      // SVG Illustration 3: Pill icon with warning triangle & shield
      renderIllustration: () => (
        <svg viewBox="0 0 500 420" className="w-full h-full max-h-[480px]">
          {/* Organic Shape */}
          <path
            d="M 60 210 C 50 100, 150 40, 260 50 C 370 60, 450 140, 440 250 C 430 360, 330 400, 230 390 C 130 380, 70 320, 60 210 Z"
            fill="#E6F6F4"
          />
          {/* Central Protective Shield */}
          <path
            d="M 250 80 Q 350 90 360 180 C 360 270 250 350 250 350 C 250 350 140 270 140 180 Q 150 90 250 80 Z"
            fill="#FFFFFF"
            stroke="#0E9F8E"
            strokeWidth="10"
            filter="drop-shadow(0 12px 28px rgba(14,159,142,0.18))"
          />
          {/* Two Pills Approaching */}
          {/* Pill 1: Blue */}
          <rect x="180" y="160" width="70" height="34" rx="17" fill="#2F80ED" transform="rotate(-30 180 160)" stroke="#1F2A37" strokeWidth="4" />
          {/* Pill 2: Teal */}
          <rect x="250" y="140" width="70" height="34" rx="17" fill="#0E9F8E" transform="rotate(30 250 140)" stroke="#1F2A37" strokeWidth="4" />
          {/* Warning Triangle Floating */}
          <g transform="translate(205, 205)">
            <polygon points="45,10 85,80 5,80" fill="#D93838" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="45" y1="35" x2="45" y2="55" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="45" cy="68" r="4.5" fill="#FFFFFF" />
          </g>
          {/* Safe Checkmark Shield Base */}
          <circle cx="250" cy="315" r="22" fill="#2E9E5B" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M 241 315 L 247 321 L 259 309" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const slide = slides[currentSlide];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNavigate?.('screen-3-auth');
    }
  };

  const handleSkip = () => {
    onNavigate?.('screen-3-auth');
  };

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      {/* Status Bar */}
      <StatusBar />

      {/* Top 55%: Illustration Area */}
      <div className="w-full h-[55%] flex items-center justify-center px-12 relative">
        {slide.renderIllustration()}
      </div>

      {/* Bottom 45%: Content, Dots, and Buttons */}
      <div className="flex-1 flex flex-col justify-between px-16 pb-16 pt-4">
        {/* Texts */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="font-heading font-bold text-[68px] text-[#1F2A37] leading-[1.2] max-w-[920px]">
            {slide.heading}
          </h2>
          <p className="font-body text-[42px] text-[#4B5563] leading-[1.5] max-w-[880px]">
            {slide.description}
          </p>

          {/* Info Card on Slide 1 */}
          {slide.showInfoCard && (
            <div className="w-full max-w-[880px] bg-[#EAF2FE] border-2 border-[#2F80ED] rounded-[32px] p-8 flex items-center gap-6 text-left shadow-sm mt-2">
              <div className="p-3 bg-[#2F80ED] text-white rounded-2xl shrink-0">
                <Info strokeWidth={2.8} className="w-[48px] h-[48px]" />
              </div>
              <p className="font-body font-semibold text-[38px] text-[#1F2A37] leading-snug">
                {slide.infoText}
              </p>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col items-center gap-10 w-full mt-auto">
          {/* 3-Dot Indicator */}
          <div className="flex items-center gap-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-[72px] h-[22px] bg-[#0E9F8E]'
                    : 'w-[22px] h-[22px] bg-[#E5E7EB] hover:bg-[#9AA3AF]'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Large Primary Button (Min height 150px, radius 32px) */}
          <button
            onClick={handleNext}
            className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-4 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer"
          >
            <span>{slide.buttonText}</span>
            <ArrowRight strokeWidth={3} className="w-[44px] h-[44px]" />
          </button>

          {/* Lewati Link */}
          <button
            onClick={handleSkip}
            className="font-heading font-semibold text-[40px] text-[#2F80ED] hover:underline cursor-pointer py-2"
          >
            Lewati
          </button>
        </div>
      </div>
    </div>
  );
};
