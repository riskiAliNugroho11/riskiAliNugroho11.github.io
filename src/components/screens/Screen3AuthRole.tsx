import React, { useState } from 'react';
import { ScreenId, UserRole } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { MeditoLogo } from '../common/MeditoLogo';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  HeartHandshake,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface Screen3AuthRoleProps {
  onNavigate?: (screenId: ScreenId) => void;
  onSelectRole?: (role: UserRole) => void;
}

export const Screen3AuthRole: React.FC<Screen3AuthRoleProps> = ({
  onNavigate,
  onSelectRole,
}) => {
  const [tab, setTab] = useState<'masuk' | 'daftar'>('masuk');
  const [role, setRole] = useState<UserRole>('pasien');
  const [email, setEmail] = useState('ibu.sari@gmail.com');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = (selected: UserRole) => {
    setRole(selected);
    onSelectRole?.(selected);
  };

  const handleSubmit = () => {
    if (role === 'pasien') {
      onNavigate?.('screen-4-profile');
    } else if (role === 'caregiver') {
      onNavigate?.('screen-12-caregiver-dashboard');
    } else {
      onNavigate?.('screen-13-hcp-dashboard');
    }
  };

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      <div className="flex-1 flex flex-col px-16 py-6 overflow-y-auto">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-5 mt-2 mb-8">
          <MeditoLogo size={84} variant="teal" showCircle={false} />
          <span className="font-heading font-bold text-[64px] text-[#0E9F8E] tracking-tight">
            MEDITO
          </span>
        </div>

        {/* Segmented Tab (Height 130px) */}
        <div className="w-full h-[130px] p-2 bg-[#E6F6F4] rounded-[32px] flex items-center mb-8">
          <button
            onClick={() => setTab('masuk')}
            className={`flex-1 h-full rounded-[26px] font-heading font-bold text-[42px] transition-all cursor-pointer ${
              tab === 'masuk'
                ? 'bg-[#0E9F8E] text-white shadow-md'
                : 'text-[#0B6E64] hover:bg-white/40'
            }`}
          >
            Masuk
          </button>
          <button
            onClick={() => setTab('daftar')}
            className={`flex-1 h-full rounded-[26px] font-heading font-bold text-[42px] transition-all cursor-pointer ${
              tab === 'daftar'
                ? 'bg-[#0E9F8E] text-white shadow-md'
                : 'text-[#0B6E64] hover:bg-white/40'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Form Inputs (Height 150px, Radius 32px) */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Email / Phone Field */}
          <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] focus-within:border-[#0E9F8E] rounded-[32px] px-8 flex items-center gap-6 transition-all">
            <Mail strokeWidth={2.6} className="w-[52px] h-[52px] text-[#4B5563] shrink-0" />
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[28px] text-[#4B5563] font-semibold">Email atau No. HP</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full font-body text-[40px] text-[#1F2A37] font-semibold bg-transparent outline-none leading-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] focus-within:border-[#0E9F8E] rounded-[32px] px-8 flex items-center gap-6 transition-all">
            <Lock strokeWidth={2.6} className="w-[52px] h-[52px] text-[#4B5563] shrink-0" />
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[28px] text-[#4B5563] font-semibold">Kata Sandi</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full font-body text-[40px] text-[#1F2A37] font-semibold bg-transparent outline-none leading-none"
              />
            </div>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#4B5563] p-3 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff strokeWidth={2.6} className="w-[50px] h-[50px]" />
              ) : (
                <Eye strokeWidth={2.6} className="w-[50px] h-[50px]" />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              onClick={() => alert('Fitur pemulihan kata sandi telah dikirim ke email.')}
              className="font-heading font-semibold text-[38px] text-[#2F80ED] hover:underline cursor-pointer"
            >
              Lupa kata sandi?
            </button>
          </div>
        </div>

        {/* Role Selection Label */}
        <div className="flex flex-col gap-4 mb-8">
          <label className="font-heading font-bold text-[44px] text-[#1F2A37]">
            Saya adalah:
          </label>

          {/* 3 Vertically Stacked Role Cards (Height 170px each) */}
          <div className="flex flex-col gap-4">
            {/* Role 1: Pasien */}
            <div
              onClick={() => handleRoleChange('pasien')}
              className={`w-full h-[170px] rounded-[32px] px-8 flex items-center justify-between cursor-pointer transition-all ${
                role === 'pasien'
                  ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]/50 shadow-md'
                  : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
              }`}
            >
              <div className="flex items-center gap-6">
                <div
                  className={`p-4 rounded-2xl ${
                    role === 'pasien' ? 'bg-[#0E9F8E] text-white' : 'bg-[#E5E7EB] text-[#4B5563]'
                  }`}
                >
                  <User strokeWidth={2.8} className="w-[56px] h-[56px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                    Pasien
                  </span>
                  <span className="font-body text-[32px] text-[#4B5563]">
                    Mencatat & meminum obat sendiri
                  </span>
                </div>
              </div>
              {role === 'pasien' && (
                <CheckCircle2 strokeWidth={3} className="w-[56px] h-[56px] text-[#0E9F8E]" />
              )}
            </div>

            {/* Role 2: Caregiver / Keluarga */}
            <div
              onClick={() => handleRoleChange('caregiver')}
              className={`w-full h-[170px] rounded-[32px] px-8 flex items-center justify-between cursor-pointer transition-all ${
                role === 'caregiver'
                  ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]/50 shadow-md'
                  : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
              }`}
            >
              <div className="flex items-center gap-6">
                <div
                  className={`p-4 rounded-2xl ${
                    role === 'caregiver' ? 'bg-[#0E9F8E] text-white' : 'bg-[#E5E7EB] text-[#4B5563]'
                  }`}
                >
                  <HeartHandshake strokeWidth={2.8} className="w-[56px] h-[56px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                    Caregiver / Keluarga
                  </span>
                  <span className="font-body text-[32px] text-[#4B5563]">
                    Memantau orang tua & keluarga
                  </span>
                </div>
              </div>
              {role === 'caregiver' && (
                <CheckCircle2 strokeWidth={3} className="w-[56px] h-[56px] text-[#0E9F8E]" />
              )}
            </div>

            {/* Role 3: Tenaga Kesehatan */}
            <div
              onClick={() => handleRoleChange('nakes')}
              className={`w-full h-[170px] rounded-[32px] px-8 flex items-center justify-between cursor-pointer transition-all ${
                role === 'nakes'
                  ? 'border-[4px] border-[#0E9F8E] bg-[#E6F6F4]/50 shadow-md'
                  : 'border-2 border-[#E5E7EB] bg-white hover:border-[#9AA3AF]'
              }`}
            >
              <div className="flex items-center gap-6">
                <div
                  className={`p-4 rounded-2xl ${
                    role === 'nakes' ? 'bg-[#0E9F8E] text-white' : 'bg-[#E5E7EB] text-[#4B5563]'
                  }`}
                >
                  <Stethoscope strokeWidth={2.8} className="w-[56px] h-[56px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                    Tenaga Kesehatan
                  </span>
                  <span className="font-body text-[32px] text-[#4B5563]">
                    Dokter, perawat, atau apoteker
                  </span>
                </div>
              </div>
              {role === 'nakes' && (
                <CheckCircle2 strokeWidth={3} className="w-[56px] h-[56px] text-[#0E9F8E]" />
              )}
            </div>
          </div>
        </div>

        {/* Large Masuk Button (Height 150px, Radius 32px) */}
        <button
          onClick={handleSubmit}
          className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-4 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer mt-2"
        >
          {tab === 'masuk' ? 'Masuk' : 'Daftar Sekarang'}
        </button>

        {/* Security Assurance */}
        <div className="flex items-center justify-center gap-3 mt-6 text-[#4B5563]">
          <ShieldCheck strokeWidth={2.6} className="w-[40px] h-[40px] text-[#2E9E5B]" />
          <span className="font-body text-[34px] font-semibold">
            Data Anda dienkripsi dan aman (ISO 27001 compliant)
          </span>
        </div>
      </div>
    </div>
  );
};
