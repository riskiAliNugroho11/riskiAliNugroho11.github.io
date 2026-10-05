import React from 'react';
import {
  Home,
  Pill,
  ShieldAlert,
  Clock,
  Settings,
  Activity,
  Users,
  Bell,
  User,
  FileText,
} from 'lucide-react';
import { ScreenId } from '../../types/medito';

interface BottomNavigationProps {
  type?: 'patient' | 'caregiver' | 'hcp';
  activeTab: string;
  onNavigate?: (screenId: ScreenId) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  type = 'patient',
  activeTab,
  onNavigate,
}) => {
  if (type === 'patient') {
    const tabs = [
      { id: 'beranda', label: 'Beranda', icon: Home, target: 'screen-5-home' as ScreenId },
      { id: 'obat', label: 'Obat', icon: Pill, target: 'screen-8-med-detail' as ScreenId },
      { id: 'cek-interaksi', label: 'Cek Interaksi', icon: ShieldAlert, target: 'screen-9-interaction' as ScreenId },
      { id: 'riwayat', label: 'Riwayat', icon: Clock, target: 'screen-10-history' as ScreenId },
      { id: 'pengaturan', label: 'Pengaturan', icon: Settings, target: 'screen-15-settings' as ScreenId },
    ];

    return (
      <div className="w-full h-[200px] bg-white border-t-2 border-[#E5E7EB] px-6 flex items-center justify-around select-none shrink-0 z-30 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab.toLowerCase() === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate?.(tab.target)}
              className="flex-1 h-full flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
              aria-label={tab.label}
            >
              <div
                className={`p-2.5 rounded-2xl transition-colors ${
                  isActive ? 'bg-[#E6F6F4] text-[#0E9F8E]' : 'text-[#4B5563] hover:text-[#1F2A37]'
                }`}
              >
                <Icon strokeWidth={2.8} className="w-[52px] h-[52px]" />
              </div>
              <span
                className={`font-heading text-[28px] font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-[#0E9F8E]' : 'text-[#4B5563]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  if (type === 'caregiver') {
    const tabs = [
      { id: 'pantau', label: 'Pantau', icon: Activity, target: 'screen-12-caregiver-dashboard' as ScreenId },
      { id: 'pasien', label: 'Pasien', icon: Users, target: 'screen-11-caregiver' as ScreenId },
      { id: 'notifikasi', label: 'Notifikasi', icon: Bell, target: 'screen-7-reminder' as ScreenId },
      { id: 'akun', label: 'Akun', icon: User, target: 'screen-15-settings' as ScreenId },
    ];

    return (
      <div className="w-full h-[200px] bg-white border-t-2 border-[#E5E7EB] px-8 flex items-center justify-around select-none shrink-0 z-30 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab.toLowerCase() === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate?.(tab.target)}
              className="flex-1 h-full flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <div
                className={`p-2.5 rounded-2xl transition-colors ${
                  isActive ? 'bg-[#E6F6F4] text-[#0E9F8E]' : 'text-[#4B5563]'
                }`}
              >
                <Icon strokeWidth={2.8} className="w-[54px] h-[54px]" />
              </div>
              <span
                className={`font-heading text-[30px] font-semibold tracking-tight ${
                  isActive ? 'text-[#0E9F8E]' : 'text-[#4B5563]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // Healthcare Professional
  const tabs = [
    { id: 'pasien', label: 'Pasien', icon: Users, target: 'screen-13-hcp-dashboard' as ScreenId },
    { id: 'peringatan', label: 'Peringatan', icon: ShieldAlert, target: 'screen-9-interaction' as ScreenId },
    { id: 'laporan', label: 'Laporan', icon: FileText, target: 'screen-10-history' as ScreenId },
    { id: 'akun', label: 'Akun', icon: User, target: 'screen-15-settings' as ScreenId },
  ];

  return (
    <div className="w-full h-[200px] bg-white border-t-2 border-[#E5E7EB] px-8 flex items-center justify-around select-none shrink-0 z-30 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab.toLowerCase() === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate?.(tab.target)}
            className="flex-1 h-full flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
          >
            <div
              className={`p-2.5 rounded-2xl transition-colors ${
                isActive ? 'bg-[#E6F6F4] text-[#0E9F8E]' : 'text-[#4B5563]'
              }`}
            >
              <Icon strokeWidth={2.8} className="w-[54px] h-[54px]" />
            </div>
            <span
              className={`font-heading text-[30px] font-semibold tracking-tight ${
                isActive ? 'text-[#0E9F8E]' : 'text-[#4B5563]'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
