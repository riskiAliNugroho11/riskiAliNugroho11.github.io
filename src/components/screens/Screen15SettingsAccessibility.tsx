import React, { useState } from 'react';
import { ScreenId, TextSize } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  User,
  Search,
  Sliders,
  Sun,
  Volume2,
  Bell,
  AlertTriangle,
  Watch,
  ChevronRight,
  ShieldCheck,
  Users,
  LogOut,
} from 'lucide-react';

interface Screen15SettingsAccessibilityProps {
  onNavigate?: (screenId: ScreenId) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  elderlyMode: boolean;
  setElderlyMode: (mode: boolean) => void;
}

export const Screen15SettingsAccessibility: React.FC<Screen15SettingsAccessibilityProps> = ({
  onNavigate,
  textSize,
  setTextSize,
  elderlyMode,
  setElderlyMode,
}) => {
  const [highContrast, setHighContrast] = useState(true);
  const [soundVibrate, setSoundVibrate] = useState(true);
  const [medReminder, setMedReminder] = useState(true);
  const [drugAlert, setDrugAlert] = useState(true);

  const handleLogout = () => {
    if (confirm('Keluar dari akun MEDITO?')) {
      onNavigate?.('screen-3-auth');
    }
  };

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-4 overflow-y-auto space-y-6">
        {/* Top Profile Card */}
        <div className="w-full bg-[#E6F6F4] border-2 border-[#0E9F8E]/30 rounded-[32px] p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-[100px] h-[100px] rounded-full border-4 border-[#0E9F8E] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Bu Sari"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[48px] text-[#1F2A37]">
                Bu Sari Rahayu
              </span>
              <span className="font-body text-[32px] text-[#4B5563]">
                0812-3456-7890 &bull; Pasien
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate?.('screen-4-profile')}
            className="h-[84px] px-8 bg-white hover:bg-[#CCEBE6] border-2 border-[#0E9F8E] text-[#0E9F8E] font-heading font-bold text-[34px] rounded-2xl cursor-pointer transition-all shadow-sm"
          >
            Ubah
          </button>
        </div>

        {/* Group 1: Aksesibilitas (Teal Heading) */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading font-bold text-[42px] text-[#0E9F8E]">
            Aksesibilitas
          </h2>

          <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] divide-y-2 divide-[#E5E7EB] shadow-sm overflow-hidden">
            {/* Row: Mode Lansia (Min 130px height) */}
            <div
              onClick={() => setElderlyMode(!elderlyMode)}
              className="min-h-[140px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#E6F6F4] text-[#0E9F8E] rounded-2xl">
                  <Search strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                    Mode Lansia
                  </span>
                  <span className="font-body text-[30px] text-[#4B5563]">
                    Tombol ekstra besar, kontras optimal
                  </span>
                </div>
              </div>
              <div
                className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                  elderlyMode ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                    elderlyMode ? 'translate-x-[36px]' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>

            {/* Row: Ukuran Teks Slider with Normal, Besar, Extra Besar preview */}
            <div className="min-h-[160px] px-7 py-5 flex flex-col justify-center gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-[#EAF2FE] text-[#2F80ED] rounded-2xl">
                    <Sliders strokeWidth={2.8} className="w-[46px] h-[46px]" />
                  </div>
                  <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                    Ukuran Teks
                  </span>
                </div>
                <span className="font-heading font-bold text-[44px] text-[#0E9F8E] px-4 py-1 rounded-xl bg-[#E6F6F4]">
                  Aa ({textSize === 'normal' ? 'Normal' : textSize === 'large' ? 'Besar' : 'Extra Besar'})
                </span>
              </div>

              {/* Text size selector buttons */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'normal', label: 'Normal', preview: 'text-[32px]' },
                  { id: 'large', label: 'Besar', preview: 'text-[40px]' },
                  { id: 'xlarge', label: 'Extra Besar', preview: 'text-[48px]' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setTextSize(s.id as TextSize)}
                    className={`h-[90px] rounded-2xl font-heading font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      textSize === s.id
                        ? 'bg-[#0E9F8E] text-white shadow-sm'
                        : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
                    }`}
                  >
                    <span className={s.preview}>Aa</span>
                    <span className="text-[28px]">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Row: Kontras Tinggi */}
            <div
              onClick={() => setHighContrast(!highContrast)}
              className="min-h-[130px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#FEF3C7] text-[#D97706] rounded-2xl">
                  <Sun strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                  Kontras Tinggi
                </span>
              </div>
              <div
                className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                  highContrast ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                    highContrast ? 'translate-x-[36px]' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>

            {/* Row: Suara dan Getar Pengingat */}
            <div
              onClick={() => setSoundVibrate(!soundVibrate)}
              className="min-h-[130px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#E6F6F4] text-[#0E9F8E] rounded-2xl">
                  <Volume2 strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                  Suara dan Getar Pengingat
                </span>
              </div>
              <div
                className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                  soundVibrate ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                    soundVibrate ? 'translate-x-[36px]' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Group 2: Notifikasi */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading font-bold text-[42px] text-[#0E9F8E]">
            Notifikasi
          </h2>

          <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] divide-y-2 divide-[#E5E7EB] shadow-sm overflow-hidden">
            {/* Row: Pengingat Minum Obat */}
            <div
              onClick={() => setMedReminder(!medReminder)}
              className="min-h-[130px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#E8F5E9] text-[#2E9E5B] rounded-2xl">
                  <Bell strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                  Pengingat Minum Obat
                </span>
              </div>
              <div
                className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                  medReminder ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                    medReminder ? 'translate-x-[36px]' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>

            {/* Row: Peringatan Interaksi Obat */}
            <div
              onClick={() => setDrugAlert(!drugAlert)}
              className="min-h-[130px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#FEE2E2] text-[#D93838] rounded-2xl">
                  <AlertTriangle strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                  Peringatan Interaksi Obat
                </span>
              </div>
              <div
                className={`w-[84px] h-[48px] rounded-full p-1 transition-colors flex items-center ${
                  drugAlert ? 'bg-[#0E9F8E]' : 'bg-[#E5E7EB]'
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-white shadow-sm transform transition-transform ${
                    drugAlert ? 'translate-x-[36px]' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Group 3: Perangkat */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading font-bold text-[42px] text-[#0E9F8E]">
            Perangkat
          </h2>

          <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] shadow-sm overflow-hidden">
            {/* Row: Hubungkan Smartwatch */}
            <div
              onClick={() => onNavigate?.('screen-14-smartwatch')}
              className="min-h-[130px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#E6F6F4]/40 transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#E6F6F4] text-[#0E9F8E] rounded-2xl">
                  <Watch strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                    Hubungkan Smartwatch
                  </span>
                  <span className="font-body text-[30px] text-[#2E9E5B] font-semibold">
                    Terhubung &bull; MeditoWatch v2
                  </span>
                </div>
              </div>
              <ChevronRight strokeWidth={3} className="w-[44px] h-[44px] text-[#4B5563]" />
            </div>
          </div>
        </div>

        {/* Group 4: Privasi dan Keamanan */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading font-bold text-[42px] text-[#0E9F8E]">
            Privasi dan Keamanan
          </h2>

          <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] divide-y-2 divide-[#E5E7EB] shadow-sm overflow-hidden">
            {/* Row: Data Terenkripsi */}
            <div className="min-h-[130px] px-7 py-4 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#E8F5E9] text-[#2E9E5B] rounded-2xl">
                  <ShieldCheck strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                  Data Terenkripsi (AES-256)
                </span>
              </div>
              <span className="font-heading font-bold text-[32px] text-[#2E9E5B]">
                Aktif
              </span>
            </div>

            {/* Row: Kelola Izin Caregiver */}
            <div
              onClick={() => onNavigate?.('screen-11-caregiver')}
              className="min-h-[130px] px-7 py-4 flex items-center justify-between cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-[#EAF2FE] text-[#2F80ED] rounded-2xl">
                  <Users strokeWidth={2.8} className="w-[46px] h-[46px]" />
                </div>
                <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                  Kelola Izin Caregiver
                </span>
              </div>
              <ChevronRight strokeWidth={3} className="w-[44px] h-[44px] text-[#4B5563]" />
            </div>
          </div>
        </div>

        {/* Outline Red Button: Keluar */}
        <button
          onClick={handleLogout}
          className="w-full h-[140px] bg-white hover:bg-[#FEE2E2] active:scale-[0.98] border-[3px] border-[#D93838] text-[#D93838] font-heading font-bold text-[42px] rounded-[32px] flex items-center justify-center gap-4 transition-all cursor-pointer shadow-sm mb-4"
        >
          <LogOut strokeWidth={3} className="w-[48px] h-[48px]" />
          <span>Keluar dari Akun</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="pengaturan" onNavigate={onNavigate} />
    </div>
  );
};
