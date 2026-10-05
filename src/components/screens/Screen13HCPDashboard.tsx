import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  Search,
  AlertTriangle,
  Download,
  CheckCircle,
  XCircle,
  Users,
  Activity,
  FileSpreadsheet,
} from 'lucide-react';
import { PATIENT_RECORDS } from '../../data/mockData';

interface Screen13HCPDashboardProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen13HCPDashboard: React.FC<Screen13HCPDashboardProps> = ({
  onNavigate,
}) => {
  const [filter, setFilter] = useState<'semua' | 'perhatian' | 'interaksi'>('semua');
  const [search, setSearch] = useState('');

  const filteredPatients = PATIENT_RECORDS.filter((p) => {
    if (filter === 'perhatian' && p.status !== 'attention') return false;
    if (filter === 'interaksi' && !p.hasInteractionWarning) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-4 overflow-y-auto space-y-6">
        {/* Title */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-[32px] text-[#0E9F8E]">
              Portal Tenaga Kesehatan
            </span>
            <h1 className="font-heading font-bold text-[64px] text-[#1F2A37] leading-tight">
              Pasien Saya
            </h1>
          </div>
          <div className="px-5 py-2.5 rounded-2xl bg-[#E6F6F4] text-[#0E9F8E] font-heading font-bold text-[32px]">
            dr. Rina, Sp.JP
          </div>
        </div>

        {/* Large Search Field with Magnifier */}
        <div className="w-full h-[140px] bg-white border-2 border-[#E5E7EB] focus-within:border-[#0E9F8E] rounded-[32px] px-8 flex items-center gap-6 shadow-sm">
          <Search strokeWidth={2.8} className="w-[50px] h-[50px] text-[#4B5563]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama pasien atau diagnosis..."
            className="w-full font-body text-[38px] text-[#1F2A37] font-semibold bg-transparent outline-none"
          />
        </div>

        {/* Three Summary Cards Side-by-Side */}
        <div className="grid grid-cols-3 gap-4">
          {/* Card 1: Total Pasien 24 */}
          <div className="bg-[#E6F6F4] border-2 border-[#0E9F8E]/30 rounded-[30px] p-5 flex flex-col items-center justify-center text-center">
            <Users strokeWidth={2.6} className="w-[44px] h-[44px] text-[#0E9F8E] mb-2" />
            <span className="font-heading font-bold text-[54px] text-[#1F2A37] leading-none">
              24
            </span>
            <span className="font-body text-[26px] text-[#4B5563] font-semibold mt-1">
              Total Pasien
            </span>
          </div>

          {/* Card 2: Rata-rata Kepatuhan 82% */}
          <div className="bg-[#EAF2FE] border-2 border-[#2F80ED]/30 rounded-[30px] p-5 flex flex-col items-center justify-center text-center">
            <Activity strokeWidth={2.6} className="w-[44px] h-[44px] text-[#2F80ED] mb-2" />
            <span className="font-heading font-bold text-[54px] text-[#2F80ED] leading-none">
              82%
            </span>
            <span className="font-body text-[26px] text-[#4B5563] font-semibold mt-1">
              Rata-rata Kepatuhan
            </span>
          </div>

          {/* Card 3: Perlu Perhatian 5 (Has Red Border) */}
          <div className="bg-[#FEE2E2] border-[3px] border-[#D93838] rounded-[30px] p-5 flex flex-col items-center justify-center text-center shadow-sm">
            <AlertTriangle strokeWidth={2.8} className="w-[44px] h-[44px] text-[#D93838] mb-2" />
            <span className="font-heading font-bold text-[54px] text-[#D93838] leading-none">
              5
            </span>
            <span className="font-body text-[26px] text-[#991B1B] font-bold mt-1">
              Perlu Perhatian
            </span>
          </div>
        </div>

        {/* Filter Chips: Semua, Perlu Perhatian, Ada Interaksi */}
        <div className="flex flex-wrap gap-3">
          {[
            { id: 'semua', label: 'Semua (24)' },
            { id: 'perhatian', label: 'Perlu Perhatian (5)' },
            { id: 'interaksi', label: 'Ada Interaksi (3)' },
          ].map((item) => {
            const isSelected = filter === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={`h-[84px] px-7 rounded-[24px] font-heading font-semibold text-[32px] cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#0E9F8E] text-white shadow-sm'
                    : 'bg-white border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#9AA3AF]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Patient List as Cards */}
        <div className="flex flex-col gap-4">
          {filteredPatients.map((patient) => {
            const isAttention = patient.status === 'attention';
            return (
              <div
                key={patient.id}
                onClick={() => {
                  if (patient.name.includes('Sari')) {
                    onNavigate?.('screen-5-home');
                  } else {
                    alert(`Membuka berkas rekam medis ${patient.name}`);
                  }
                }}
                className={`w-full bg-white rounded-[32px] p-7 flex flex-col gap-4 shadow-sm border-2 cursor-pointer transition-all ${
                  isAttention
                    ? 'border-[#D93838] hover:bg-[#FFF5F5]'
                    : 'border-[#E5E7EB] hover:border-[#0E9F8E]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
                        {patient.name}
                      </span>
                      <span className="font-body text-[30px] text-[#4B5563]">
                        ({patient.age} th &bull; {patient.gender === 'P' ? 'Wanita' : 'Pria'})
                      </span>
                    </div>
                    <span className="font-body text-[32px] text-[#4B5563] mt-0.5">
                      {patient.condition}
                    </span>
                  </div>

                  {/* Status chip + Interaction Warning Icon */}
                  <div className="flex items-center gap-3">
                    {patient.hasInteractionWarning && (
                      <div className="p-2.5 rounded-xl bg-[#FEE2E2] text-[#D93838]" title="Peringatan Interaksi Obat">
                        <AlertTriangle strokeWidth={2.8} className="w-[38px] h-[38px]" />
                      </div>
                    )}
                    {isAttention ? (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEE2E2] text-[#D93838] font-heading font-bold text-[30px] border border-[#D93838]/30">
                        <XCircle strokeWidth={2.6} className="w-[32px] h-[32px]" />
                        <span>❗ Perlu perhatian</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F5E9] text-[#2E9E5B] font-heading font-bold text-[30px] border border-[#2E9E5B]/30">
                        <CheckCircle strokeWidth={2.6} className="w-[32px] h-[32px]" />
                        <span>✔ Baik</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Colored Adherence Bar */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex justify-between items-center text-[28px] font-heading font-semibold">
                    <span className="text-[#4B5563]">Tingkat Kepatuhan Minum Obat</span>
                    <span
                      className={`font-bold text-[32px] ${
                        patient.adherenceRate >= 80 ? 'text-[#2E9E5B]' : 'text-[#D93838]'
                      }`}
                    >
                      {patient.adherenceRate}%
                    </span>
                  </div>
                  <div className="w-full h-[14px] bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        patient.adherenceRate >= 80 ? 'bg-[#2E9E5B]' : 'bg-[#D93838]'
                      }`}
                      style={{ width: `${patient.adherenceRate}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#4B5563] text-[28px] pt-1 border-t border-[#F3F4F6]">
                  <span>Jadwal Terakhir: {patient.lastDoseTime}</span>
                  <span className="text-[#0E9F8E] font-bold">Lihat Detail &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outline Teal Button: Ekspor Laporan Kepatuhan */}
        <button
          onClick={() => alert('Mengekspor laporan kepatuhan seluruh 24 pasien ke format Excel / PDF!')}
          className="w-full h-[150px] bg-white hover:bg-[#E6F6F4] active:scale-[0.98] border-[4px] border-[#0E9F8E] text-[#0E9F8E] font-heading font-bold text-[42px] rounded-[32px] flex items-center justify-center gap-4 transition-all cursor-pointer shadow-sm mb-4"
        >
          <FileSpreadsheet strokeWidth={3} className="w-[50px] h-[50px]" />
          <span>Ekspor Laporan Kepatuhan</span>
        </button>
      </div>

      {/* HCP 4-Tab Bottom Navigation: Pasien (active), Peringatan, Laporan, Akun */}
      <BottomNavigation type="hcp" activeTab="pasien" onNavigate={onNavigate} />
    </div>
  );
};
