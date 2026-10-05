import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  scale?: number;
  showBezel?: boolean;
  isSmartwatch?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  scale = 0.38,
  showBezel = true,
  isSmartwatch = false,
}) => {
  const width = isSmartwatch ? 1080 : 1080;
  const height = isSmartwatch ? 1080 : 1920;

  const containerWidth = width * scale;
  const containerHeight = height * scale;

  if (isSmartwatch) {
    return (
      <div
        className="relative flex items-center justify-center transition-all duration-300"
        style={{ width: containerWidth + (showBezel ? 60 * scale : 0), height: containerHeight + (showBezel ? 60 * scale : 0) }}
      >
        {/* Watch Straps */}
        {showBezel && (
          <>
            <div
              className="absolute -top-16 w-1/2 h-24 bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-2xl shadow-lg border-x-2 border-slate-700 pointer-events-none"
              style={{ width: containerWidth * 0.55 }}
            />
            <div
              className="absolute -bottom-16 w-1/2 h-24 bg-gradient-to-t from-slate-800 to-slate-900 rounded-b-2xl shadow-lg border-x-2 border-slate-700 pointer-events-none"
              style={{ width: containerWidth * 0.55 }}
            />
          </>
        )}

        {/* Watch Chassis */}
        <div
          className={`relative rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.6)] ${
            showBezel ? 'p-4 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 border-4 border-slate-600' : ''
          }`}
          style={{ width: containerWidth, height: containerHeight }}
        >
          {/* Scaled Canvas Container */}
          <div
            className="w-full h-full overflow-hidden rounded-full relative"
            style={{ width: containerWidth, height: containerHeight }}
          >
            <div
              className="origin-top-left"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: `scale(${scale})`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-300"
      style={{
        width: showBezel ? containerWidth + 36 * scale : containerWidth,
        height: showBezel ? containerHeight + 36 * scale : containerHeight,
      }}
    >
      {/* Smartphone Chassis */}
      <div
        className={`relative transition-all duration-300 ${
          showBezel
            ? 'p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-black rounded-[54px] shadow-[0_30px_90px_rgba(0,0,0,0.7)] border-[4px] border-slate-700/80 ring-1 ring-white/15'
            : 'rounded-[32px] overflow-hidden shadow-2xl border border-slate-700'
        }`}
        style={{
          width: showBezel ? containerWidth + 32 * scale : containerWidth,
          height: showBezel ? containerHeight + 32 * scale : containerHeight,
        }}
      >
        {/* Scaled Canvas */}
        <div
          className={`w-full h-full overflow-hidden bg-white relative ${
            showBezel ? 'rounded-[46px]' : 'rounded-[32px]'
          }`}
          style={{ width: containerWidth, height: containerHeight }}
        >
          <div
            className="origin-top-left"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transform: `scale(${scale})`,
            }}
          >
            {children}
          </div>
        </div>

        {/* Dynamic Island Overlay for Phone Bezel */}
        {showBezel && (
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full pointer-events-none z-50 flex items-center justify-end pr-3 gap-1 shadow-md border border-white/5"
            style={{
              transform: `translateX(-50%) scale(${Math.max(0.7, scale * 2.2)})`,
              transformOrigin: 'top center',
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
          </div>
        )}

        {/* Home Indicator Bar */}
        {showBezel && (
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full pointer-events-none z-50"
            style={{ transform: `translateX(-50%) scale(${scale * 2.2})` }}
          />
        )}
      </div>
    </div>
  );
};
