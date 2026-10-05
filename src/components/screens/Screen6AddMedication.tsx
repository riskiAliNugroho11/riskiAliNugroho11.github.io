import React, { useState } from 'react';
import { ScreenId } from '../../types/medito';
import { StatusBar } from '../common/StatusBar';
import { BottomNavigation } from '../common/BottomNavigation';
import {
  ChevronLeft,
  Search,
  Plus,
  Minus,
  Bell,
  Calendar,
  Pill,
  Syringe,
  Milk,
  Boxes,
} from 'lucide-react';

interface Screen6AddMedicationProps {
  onNavigate?: (screenId: ScreenId) => void;
}

export const Screen6AddMedication: React.FC<Screen6AddMedicationProps> = ({
  onNavigate,
}) => {
  const [medName, setMedName] = useState('Metformin 500 mg');
  const [medForm, setMedForm] = useState('Tablet');
  const [doseCount, setDoseCount] = useState(1);
  const [instruction, setInstruction] = useState('Sesudah makan');
  const [frequency, setFrequency] = useState('2x');
  const [times, setTimes] = useState(['07.00', '13.00', '19.00']);
  const [duration, setDuration] = useState('5 Okt 2026 - 5 Nov 2026 (30 hari)');

  const handleSave = () => {
    alert('Jadwal obat berhasil disimpan dan pengingat aktif!');
    onNavigate?.('screen-5-home');
  };

  return (
    <div className="w-[1080px] h-[1920px] bg-white text-[#1F2A37] flex flex-col justify-between select-none overflow-hidden font-body">
      <StatusBar />

      {/* Header */}
      <div className="w-full px-12 pt-3 pb-3 flex items-center justify-between border-b border-[#E5E7EB]">
        <button
          onClick={() => onNavigate?.('screen-5-home')}
          className="flex items-center gap-2 text-[#0E9F8E] font-heading font-semibold text-[38px] cursor-pointer"
        >
          <ChevronLeft strokeWidth={3} className="w-[48px] h-[48px]" />
          <span>Kembali</span>
        </button>
        <h1 className="font-heading font-bold text-[52px] text-[#1F2A37]">
          Tambah Obat
        </h1>
        <div className="w-[100px]" />
      </div>

      {/* Stepper: Obat - Dosis - Jadwal */}
      <div className="px-12 py-4 bg-[#E6F6F4]/50 border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#0E9F8E] text-white flex items-center justify-center font-bold text-[24px]">
              1
            </span>
            <span className="font-heading font-bold text-[34px] text-[#0E9F8E]">
              Obat
            </span>
          </div>
          <div className="w-16 h-1 bg-[#0E9F8E]" />
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#0E9F8E] text-white flex items-center justify-center font-bold text-[24px]">
              2
            </span>
            <span className="font-heading font-bold text-[34px] text-[#0E9F8E]">
              Dosis
            </span>
          </div>
          <div className="w-16 h-1 bg-[#0E9F8E]" />
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#0E9F8E] text-white flex items-center justify-center font-bold text-[24px]">
              3
            </span>
            <span className="font-heading font-bold text-[34px] text-[#0E9F8E]">
              Jadwal
            </span>
          </div>
        </div>
      </div>

      {/* Form Body (Scrollable) */}
      <div className="flex-1 flex flex-col px-12 py-6 overflow-y-auto space-y-6">
        {/* Search Field: Nama Obat */}
        <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] focus-within:border-[#0E9F8E] rounded-[32px] px-8 flex items-center gap-6">
          <Search strokeWidth={2.8} className="w-[52px] h-[52px] text-[#4B5563]" />
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-[28px] text-[#4B5563] font-semibold">Nama Obat</span>
            <input
              type="text"
              value={medName}
              onChange={(e) => setMedName(e.target.value)}
              className="w-full font-heading text-[40px] text-[#1F2A37] font-bold bg-transparent outline-none leading-none"
              placeholder="Cari nama obat atau scan resep..."
            />
          </div>
        </div>

        {/* Bentuk Obat Chips */}
        <div className="flex flex-col gap-3">
          <label className="font-heading font-bold text-[38px] text-[#1F2A37]">
            Bentuk obat
          </label>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Tablet', icon: Pill },
              { label: 'Kapsul', icon: Boxes },
              { label: 'Sirup', icon: Milk },
              { label: 'Suntik', icon: Syringe },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = medForm === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setMedForm(item.label)}
                  className={`h-[110px] rounded-[24px] flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#0E9F8E] text-white shadow-sm'
                      : 'bg-white border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#9AA3AF]'
                  }`}
                >
                  <Icon strokeWidth={2.6} className="w-[38px] h-[38px]" />
                  <span className="font-heading font-semibold text-[30px]">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dosis with Large Plus-Minus Counter */}
        <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] rounded-[32px] px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[28px] text-[#4B5563] font-semibold">Dosis per minum</span>
            <span className="font-heading font-bold text-[44px] text-[#1F2A37]">
              {doseCount} {medForm.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDoseCount(Math.max(1, doseCount - 1))}
              className="w-[84px] h-[84px] rounded-2xl bg-[#E5E7EB] hover:bg-[#D1D5DB] flex items-center justify-center text-[#1F2A37] cursor-pointer"
            >
              <Minus strokeWidth={3} className="w-[44px] h-[44px]" />
            </button>
            <span className="font-heading font-bold text-[52px] text-[#0E9F8E] min-w-[50px] text-center">
              {doseCount}
            </span>
            <button
              onClick={() => setDoseCount(doseCount + 1)}
              className="w-[84px] h-[84px] rounded-2xl bg-[#0E9F8E] hover:bg-[#0B6E64] flex items-center justify-center text-white cursor-pointer"
            >
              <Plus strokeWidth={3} className="w-[44px] h-[44px]" />
            </button>
          </div>
        </div>

        {/* Aturan Pakai Chips */}
        <div className="flex flex-col gap-3">
          <label className="font-heading font-bold text-[38px] text-[#1F2A37]">
            Aturan pakai
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['Sebelum makan', 'Sesudah makan', 'Bersama makan'].map((rule) => {
              const isSelected = instruction === rule;
              return (
                <button
                  key={rule}
                  onClick={() => setInstruction(rule)}
                  className={`h-[100px] rounded-[24px] font-heading font-semibold text-[32px] cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#0E9F8E] text-white shadow-sm'
                      : 'bg-white border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#9AA3AF]'
                  }`}
                >
                  {rule}
                </button>
              );
            })}
          </div>
        </div>

        {/* Berapa Kali Sehari Chips */}
        <div className="flex flex-col gap-3">
          <label className="font-heading font-bold text-[38px] text-[#1F2A37]">
            Berapa kali sehari
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['1x', '2x', '3x'].map((freq) => {
              const isSelected = frequency === freq;
              return (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`h-[95px] rounded-[24px] font-heading font-bold text-[38px] cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#0E9F8E] text-white shadow-sm'
                      : 'bg-white border-2 border-[#E5E7EB] text-[#4B5563] hover:border-[#9AA3AF]'
                  }`}
                >
                  {freq} sehari
                </button>
              );
            })}
          </div>
        </div>

        {/* Waktu Minum with Three Large Time Chips & Add Hour */}
        <div className="flex flex-col gap-3">
          <label className="font-heading font-bold text-[38px] text-[#1F2A37]">
            Waktu minum
          </label>
          <div className="flex flex-wrap gap-4">
            {times.map((t) => (
              <div
                key={t}
                className="h-[100px] px-8 rounded-[24px] bg-[#E6F6F4] border-2 border-[#0E9F8E] text-[#0E9F8E] font-heading font-bold text-[40px] flex items-center gap-3"
              >
                <span>{t}</span>
              </div>
            ))}
            <button
              onClick={() => {
                const newT = prompt('Masukkan jam baru (misal 21.00):', '21.00');
                if (newT) setTimes([...times, newT]);
              }}
              className="h-[100px] px-8 rounded-[24px] border-2 border-dashed border-[#2F80ED] text-[#2F80ED] hover:bg-[#EAF2FE] font-heading font-semibold text-[34px] flex items-center gap-2 cursor-pointer"
            >
              <Plus strokeWidth={2.8} className="w-[36px] h-[36px]" />
              <span>Tambah jam</span>
            </button>
          </div>
        </div>

        {/* Tanggal Mulai - Selesai with Calendar Icon */}
        <div className="w-full h-[150px] bg-white border-2 border-[#E5E7EB] rounded-[32px] px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[28px] text-[#4B5563] font-semibold">
              Tanggal mulai - selesai
            </span>
            <span className="font-heading font-bold text-[38px] text-[#1F2A37]">
              {duration}
            </span>
          </div>
          <Calendar strokeWidth={2.6} className="w-[52px] h-[52px] text-[#4B5563]" />
        </div>

        {/* Large Primary Button: Simpan dan Aktifkan Pengingat */}
        <button
          onClick={handleSave}
          className="w-full h-[150px] bg-[#0E9F8E] hover:bg-[#0B6E64] active:scale-[0.98] text-white font-heading font-bold text-[44px] rounded-[32px] flex items-center justify-center gap-5 transition-all shadow-[0_12px_32px_rgba(14,159,142,0.28)] cursor-pointer mt-4"
        >
          <Bell strokeWidth={3} className="w-[50px] h-[50px]" />
          <span>Simpan dan Aktifkan Pengingat</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="obat" onNavigate={onNavigate} />
    </div>
  );
};
