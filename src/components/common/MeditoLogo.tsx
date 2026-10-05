import React from 'react';

interface MeditoLogoProps {
  size?: number;
  variant?: 'white' | 'teal' | 'gradient';
  showCircle?: boolean;
  className?: string;
}

export const MeditoLogo: React.FC<MeditoLogoProps> = ({
  size = 180,
  variant = 'white',
  showCircle = true,
  className = '',
}) => {
  const strokeColor = variant === 'white' ? '#FFFFFF' : '#0E9F8E';
  const circleBg =
    variant === 'white'
      ? 'rgba(255, 255, 255, 0.15)'
      : 'rgba(14, 159, 142, 0.12)';

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {showCircle && (
        <div
          className="absolute inset-0 rounded-full transition-all duration-300"
          style={{ backgroundColor: circleBg, border: `2px solid ${variant === 'white' ? 'rgba(255,255,255,0.25)' : 'rgba(14,159,142,0.25)'}` }}
        />
      )}
      <svg
        width={size * 0.65}
        height={size * 0.65}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-sm"
      >
        {/* Pill Capsule Outline tilted 45 deg */}
        <rect
          x="22"
          y="28"
          width="56"
          height="32"
          rx="16"
          transform="rotate(-25 50 44)"
          stroke={strokeColor}
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Capsule dividing midline */}
        <line
          x1="50"
          y1="23"
          x2="40"
          y2="66"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1 1"
          opacity="0.6"
        />
        {/* Integrated Checkmark & Heartbeat line */}
        <path
          d="M20 72 L34 72 L42 60 L50 82 L58 64 L65 72 L82 72"
          stroke={variant === 'white' ? '#FFFFFF' : '#2F80ED'}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle Checkmark indicator in upper pill */}
        <path
          d="M42 40 L48 46 L62 32"
          stroke={variant === 'white' ? '#FFFFFF' : '#0E9F8E'}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
