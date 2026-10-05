import React from 'react';
import { SCREENS_REGISTRY } from '../../data/mockData';
import { ScreenId } from '../../types/medito';

interface ScreenThumbnailStripProps {
  currentScreen: ScreenId;
  onSelectScreen: (id: ScreenId) => void;
}

export const ScreenThumbnailStrip: React.FC<ScreenThumbnailStripProps> = ({
  currentScreen,
  onSelectScreen,
}) => {
  return (
    <div className="w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-4 py-3 flex items-center gap-3 overflow-x-auto select-none shrink-0 z-40">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 shrink-0 pr-2 border-r border-slate-800">
        <span>15 LAYAR</span>
      </div>

      <div className="flex items-center gap-2.5">
        {SCREENS_REGISTRY.map((meta) => {
          const isActive = currentScreen === meta.id;
          return (
            <button
              key={meta.id}
              onClick={() => onSelectScreen(meta.id)}
              className={`px-3 py-2 rounded-xl text-left flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                isActive
                  ? 'bg-[#0E9F8E] text-white border-[#0E9F8E] shadow-md shadow-[#0E9F8E]/20'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/60'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-white text-[#0E9F8E]' : 'bg-slate-700 text-slate-300'
                }`}
              >
                {meta.number}
              </span>
              <span className="text-xs font-medium">{meta.title}</span>
              {meta.isSmartwatch && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  1:1 Watch
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
