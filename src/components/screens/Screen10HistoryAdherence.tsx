import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  Lightbulb,
  Share2,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Filter,
} from 'lucide-react';
import { ADHERENCE_WEEK_DATA } from '../../data/mockData';

interface Screen10HistoryAdherenceProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen10HistoryAdherence: React.FC<Screen10HistoryAdherenceProps> = ({
  onNavigate,
}) => {
  const [period, setPeriod] = useState<'minggu' | 'bulan'>('minggu');
  const [filter, setFilter] = useState<'semua' | 'selesai' | 'terlewat'>('semua');

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-12 py-4 overflow-y-auto space-y-6">
        {/* Title */}
        <div className="flex items-center justify-between pt-2">
          <h1 className="font-heading font-bold text-[64px] text-[#1F2A37] leading-tight">
            Riwayat Minum Obat
          </h1>
        </div>

        {/* Segmented Tabs: Minggu | Bulan */}
        <div className="w-full h-[110px] p-2 bg-[#F3F4F6] rounded-[28px] flex items-center">
          <button
            onClick={() => setPeriod('minggu')}
            className={`flex-1 h-full rounded-[22px] font-heading font-bold text-[38px] transition-all cursor-pointer ${
              period === 'minggu'
                ? 'bg-[#0E9F8E] text-white shadow-sm'
                : 'text-[#4B5563] hover:text-[#1F2A37]'
            }`}
          >
            Minggu
          </button>
          <button
            onClick={() => setPeriod('bulan')}
            className={`flex-1 h-full rounded-[22px] font-heading font-bold text-[38px] transition-all cursor-pointer ${
              period === 'bulan'
                ? 'bg-[#0E9F8E] text-white shadow-sm'
                : 'text-[#4B5563] hover:text-[#1F2A37]'
            }`}
          >
            Bulan
          </button>
        </div>

        {/* Card: Skor Kepatuhan & 7-Day Bar Chart */}
        <div className="w-full bg-[#E6F6F4] border-2 border-[#0E9F8E]/30 rounded-[36px] p-8 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[34px] text-[#0B6E64]">
                Skor Kepatuhan
              </span>
              <span className="font-heading font-bold text-[84px] text-[#0E9F8E] leading-none">
                85%
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-heading font-bold text-[32px] text-[#2E9E5B] flex items-center gap-2">
                <TrendingUp strokeWidth={2.8} className="w-[36px] h-[36px]" />
                +12% vs minggu lalu
              </span>
              <span className="font-body text-[28px] text-[#4B5563]">Target klinis: 80%</span>
            </div>
          </div>

          {/* 7-Day Bar Chart (Mon-Sun) */}
          <div className="w-full pt-4">
            <div className="flex items-end justify-between h-[180px] px-2 border-b-2 border-[#CCEBE6] pb-3">
              {ADHERENCE_WEEK_DATA.map((item) => {
                let barColor = '#2E9E5B'; // done
                if (item.status === 'missed') barColor = '#D93838';
                if (item.status === 'process') barColor = '#9AA3AF';

                const barHeight = `${Math.max(20, (item.rate / 100) * 150)}px`;

                return (
                  <div key={item.day} className="flex flex-col items-center gap-2 flex-1">
                    <span className="font-heading font-bold text-[24px] text-[#4B5563]">
                      {item.rate}%
                    </span>
                    <div
                      className="w-[42px] rounded-t-xl transition-all shadow-sm"
                      style={{ height: barHeight, backgroundColor: barColor }}
                    />
                    <span className="font-heading font-bold text-[28px] text-[#1F2A37] mt-1">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Chart Legend */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#2E9E5B]" />
                <span className="font-body text-[26px] text-[#4B5563]">Selesai</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D93838]" />
                <span className="font-body text-[26px] text-[#4B5563]">Terlewat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#9AA3AF]" />
                <span className="font-body text-[26px] text-[#4B5563]">Proses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Chips: Semua, Selesai, Terlewat */}
        <div className="flex items-center gap-3">
          <Filter strokeWidth={2.6} className="w-[38px] h-[38px] text-[#4B5563]" />
          {(['semua', 'selesai', 'terlewat'] as const).map((f) => {
            const isSelected = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`h-[84px] px-8 rounded-[24px] font-heading font-semibold text-[34px] capitalize cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#0E9F8E] text-white shadow-sm'
                    : 'bg-white border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#9AA3AF]'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline by Date */}
        <div className="flex flex-col gap-4">
          <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
            Senin, 5 Okt
          </span>

          <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] p-6 divide-y-2 divide-[#E5E7EB] shadow-sm">
            {/* Item 1: 07.00 Amlodipin (Done) */}
            {(filter === 'semua' || filter === 'selesai') && (
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-[#E8F5E9] text-[#2E9E5B] rounded-2xl">
                    <CheckCircle strokeWidth={2.8} className="w-[44px] h-[44px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                      07.00 &bull; Amlodipin 5 mg
                    </span>
                    <span className="font-body text-[32px] text-[#4B5563]">
                      1 tablet sesudah sarapan pagi
                    </span>
                  </div>
                </div>
                <span className="font-heading font-bold text-[32px] text-[#2E9E5B] px-4 py-1.5 rounded-full bg-[#E8F5E9]">
                  ✔ Selesai
                </span>
              </div>
            )}

            {/* Item 2: 19.00 Simvastatin (Missed) */}
            {(filter === 'semua' || filter === 'terlewat') && (
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-[#FEE2E2] text-[#D93838] rounded-2xl">
                    <XCircle strokeWidth={2.8} className="w-[44px] h-[44px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-[40px] text-[#1F2A37]">
                      19.00 &bull; Simvastatin 20 mg
                    </span>
                    <span className="font-body text-[32px] text-[#4B5563]">
                      Dosis malam terlewat &bull; Tidak ada konfirmasi
                    </span>
                  </div>
                </div>
                <span className="font-heading font-bold text-[32px] text-[#D93838] px-4 py-1.5 rounded-full bg-[#FEE2E2]">
                  ❗ Terlewat
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Insight Card: Blue Tinted #EAF2FE with Lightbulb Icon */}
        <div className="w-full bg-[#EAF2FE] border-2 border-[#2F80ED] rounded-[32px] p-7 flex items-center gap-6 shadow-sm">
          <div className="p-4 bg-[#2F80ED] text-white rounded-2xl shrink-0">
            <Lightbulb strokeWidth={2.8} className="w-[48px] h-[48px]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-[36px] text-[#1E40AF]">
              Wawasan MEDITO
            </span>
            <p className="font-body text-[34px] text-[#1F2A37] leading-relaxed mt-1">
              Anda paling sering terlewat pada jadwal malam. Coba atur pengingat lebih awal.
            </p>
          </div>
        </div>

        {/* Large Outline Teal Button: Bagikan Laporan (Height 150px) */}
        <button
          onClick={() => alert('Laporan kepatuhan PDF siap diunduh dan dibagikan!')}
          className="w-full h-[150px] bg-white hover:bg-[#E6F6F4] active:scale-[0.98] border-[4px] border-[#0E9F8E] text-[#0E9F8E] font-heading font-bold text-[42px] rounded-[32px] flex items-center justify-center gap-4 transition-all cursor-pointer shadow-sm mb-4"
        >
          <Share2 strokeWidth={3} className="w-[50px] h-[50px]" />
          <span>Bagikan Laporan</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="riwayat" onNavigate={onNavigate} />
    </div>
  );
};
