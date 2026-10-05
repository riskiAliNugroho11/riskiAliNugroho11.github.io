/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, UserRole, TextSize } from './types/medito';
import { SCREENS_REGISTRY } from './data/mockData';
import { PhoneFrame } from './components/viewer/PhoneFrame';
import { DesignSystemInspector } from './components/viewer/DesignSystemInspector';
import { ScreenThumbnailStrip } from './components/viewer/ScreenThumbnailStrip';
import { MeditoLogo } from './components/common/MeditoLogo';

// Screens
import { Screen1Splash } from './components/screens/Screen1Splash';
import { Screen2Onboarding } from './components/screens/Screen2Onboarding';
import { Screen3AuthRole } from './components/screens/Screen3AuthRole';
import { Screen4ProfileElderly } from './components/screens/Screen4ProfileElderly';
import { Screen5PatientHome } from './components/screens/Screen5PatientHome';
import { Screen6AddMedication } from './components/screens/Screen6AddMedication';
import { Screen7Reminder } from './components/screens/Screen7Reminder';
import { Screen8MedDetail } from './components/screens/Screen8MedDetail';
import { Screen9DrugInteraction } from './components/screens/Screen9DrugInteraction';
import { Screen10HistoryAdherence } from './components/screens/Screen10HistoryAdherence';
import { Screen11MyCaregiver } from './components/screens/Screen11MyCaregiver';
import { Screen12CaregiverDashboard } from './components/screens/Screen12CaregiverDashboard';
import { Screen13HCPDashboard } from './components/screens/Screen13HCPDashboard';
import { Screen14Smartwatch } from './components/screens/Screen14Smartwatch';
import { Screen15SettingsAccessibility } from './components/screens/Screen15SettingsAccessibility';

import {
  Smartphone,
  Grid,
  Columns,
  Palette,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('screen-1-splash');
  const [viewMode, setViewMode] = useState<'prototype' | 'gallery' | 'comparison'>('prototype');
  const [compareScreen, setCompareScreen] = useState<ScreenId>('screen-12-caregiver-dashboard');
  const [scale, setScale] = useState<number>(0.36);
  const [showBezel, setShowBezel] = useState<boolean>(true);
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);

  // Design system global state
  const [userRole, setUserRole] = useState<UserRole>('pasien');
  const [elderlyMode, setElderlyMode] = useState<boolean>(true);
  const [textSize, setTextSize] = useState<TextSize>('large');

  // Active meta for current screen
  const currentMeta = SCREENS_REGISTRY.find((s) => s.id === currentScreen) || SCREENS_REGISTRY[0];

  const handleNextScreen = () => {
    const currentIndex = SCREENS_REGISTRY.findIndex((s) => s.id === currentScreen);
    if (currentIndex < SCREENS_REGISTRY.length - 1) {
      setCurrentScreen(SCREENS_REGISTRY[currentIndex + 1].id);
    }
  };

  const handlePrevScreen = () => {
    const currentIndex = SCREENS_REGISTRY.findIndex((s) => s.id === currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(SCREENS_REGISTRY[currentIndex - 1].id);
    }
  };

  const renderScreenContent = (screenId: ScreenId) => {
    switch (screenId) {
      case 'screen-1-splash':
        return <Screen1Splash onNavigate={setCurrentScreen} />;
      case 'screen-2-onboarding':
        return <Screen2Onboarding onNavigate={setCurrentScreen} />;
      case 'screen-3-auth':
        return <Screen3AuthRole onNavigate={setCurrentScreen} onSelectRole={setUserRole} />;
      case 'screen-4-profile':
        return (
          <Screen4ProfileElderly
            onNavigate={setCurrentScreen}
            textSize={textSize}
            setTextSize={setTextSize}
            elderlyMode={elderlyMode}
            setElderlyMode={setElderlyMode}
          />
        );
      case 'screen-5-home':
        return <Screen5PatientHome onNavigate={setCurrentScreen} elderlyMode={elderlyMode} />;
      case 'screen-6-add-med':
        return <Screen6AddMedication onNavigate={setCurrentScreen} />;
      case 'screen-7-reminder':
        return <Screen7Reminder onNavigate={setCurrentScreen} />;
      case 'screen-8-med-detail':
        return <Screen8MedDetail onNavigate={setCurrentScreen} />;
      case 'screen-9-interaction':
        return <Screen9DrugInteraction onNavigate={setCurrentScreen} />;
      case 'screen-10-history':
        return <Screen10HistoryAdherence onNavigate={setCurrentScreen} />;
      case 'screen-11-caregiver':
        return <Screen11MyCaregiver onNavigate={setCurrentScreen} />;
      case 'screen-12-caregiver-dashboard':
        return <Screen12CaregiverDashboard onNavigate={setCurrentScreen} />;
      case 'screen-13-hcp-dashboard':
        return <Screen13HCPDashboard onNavigate={setCurrentScreen} />;
      case 'screen-14-smartwatch':
        return <Screen14Smartwatch onNavigate={setCurrentScreen} />;
      case 'screen-15-settings':
        return (
          <Screen15SettingsAccessibility
            onNavigate={setCurrentScreen}
            textSize={textSize}
            setTextSize={setTextSize}
            elderlyMode={elderlyMode}
            setElderlyMode={setElderlyMode}
          />
        );
      default:
        return <Screen1Splash onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-body selection:bg-[#0E9F8E] selection:text-white">
      {/* Top Application Studio Header */}
      <header className="h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 flex items-center justify-between shrink-0 z-40 select-none">
        {/* Brand & App Title */}
        <div className="flex items-center gap-3">
          <MeditoLogo size={36} variant="teal" showCircle={false} />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-base text-white tracking-tight">
                MEDITO
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#E6F6F4] text-[#0B6E64]">
                1080x1920 UI Design Studio
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden md:inline">
              Medication Digital Monitoring &bull; 15 Layar Lengkap
            </span>
          </div>
        </div>

        {/* Center View Mode Switcher */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80">
          <button
            onClick={() => setViewMode('prototype')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'prototype'
                ? 'bg-[#0E9F8E] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Prototipe Interaktif</span>
          </button>
          <button
            onClick={() => setViewMode('gallery')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'gallery'
                ? 'bg-[#0E9F8E] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Semua 15 Layar</span>
          </button>
          <button
            onClick={() => setViewMode('comparison')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'comparison'
                ? 'bg-[#0E9F8E] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Komparasi Layar</span>
          </button>
        </div>

        {/* Right Action Tools: Design System Specs, Zoom Controls, Bezel Toggle */}
        <div className="flex items-center gap-3">
          {/* Zoom controls */}
          <div className="hidden lg:flex items-center bg-slate-800/80 rounded-xl p-1 border border-slate-700/60">
            <button
              onClick={() => setScale(Math.max(0.2, Number((scale - 0.04).toFixed(2))))}
              className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
              title="Perkecil Zoom"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-300 px-2 min-w-[42px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale(Math.min(0.65, Number((scale + 0.04).toFixed(2))))}
              className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
              title="Perbesar Zoom"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setScale(0.36)}
              className="text-[10px] text-slate-400 hover:text-[#0E9F8E] px-1.5 py-1 rounded cursor-pointer"
              title="Reset ke Ukuran Pas"
            >
              Fit
            </button>
          </div>

          {/* Toggle Phone Bezel */}
          <button
            onClick={() => setShowBezel(!showBezel)}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium cursor-pointer transition-colors ${
              showBezel
                ? 'bg-slate-800 text-white border-slate-700'
                : 'bg-transparent text-slate-400 border-slate-800 hover:text-white'
            }`}
            title="Tampilkan / Sembunyikan Frame Gadget"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Bezel: {showBezel ? 'Aktif' : 'Raw Canvas'}</span>
          </button>

          {/* Design System Token Button */}
          <button
            onClick={() => setIsInspectorOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0E9F8E] hover:bg-[#0B6E64] text-white text-xs font-semibold shadow-md shadow-[#0E9F8E]/20 cursor-pointer transition-all"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Design Tokens</span>
          </button>
        </div>
      </header>

      {/* Secondary Bar for Screen Metadata & Switcher */}
      <div className="h-12 bg-slate-900 border-b border-slate-800/80 px-6 flex items-center justify-between text-xs shrink-0 select-none">
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-[#0E9F8E] px-2 py-0.5 rounded-md bg-[#0E9F8E]/15 border border-[#0E9F8E]/30">
            Layar {currentMeta.number} / 15
          </span>
          <span className="font-semibold text-white">
            {currentMeta.title}
          </span>
          <span className="text-slate-400 hidden sm:inline">&bull;</span>
          <span className="text-slate-400 hidden sm:inline">{currentMeta.canvasSize}</span>
          <span className="text-slate-500 hidden md:inline">({currentMeta.category})</span>
        </div>

        {/* Quick Stepper for Prototype */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevScreen}
            disabled={currentMeta.number === 1}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 cursor-pointer transition-colors"
            title="Layar Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dropdown Quick Jump */}
          <select
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value as ScreenId)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1 outline-none cursor-pointer"
          >
            {SCREENS_REGISTRY.map((s) => (
              <option key={s.id} value={s.id}>
                #{s.number} - {s.title}
              </option>
            ))}
          </select>

          <button
            onClick={handleNextScreen}
            disabled={currentMeta.number === 15}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 cursor-pointer transition-colors"
            title="Layar Selanjutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <main className="flex-1 overflow-auto relative p-6 flex flex-col items-center justify-start bg-slate-950">
        {/* VIEW MODE 1: PROTOTYPE */}
        {viewMode === 'prototype' && (
          <div className="my-auto py-6 flex flex-col items-center">
            <PhoneFrame
              scale={scale}
              showBezel={showBezel}
              isSmartwatch={currentMeta.isSmartwatch}
            >
              {renderScreenContent(currentScreen)}
            </PhoneFrame>

            {/* Hint bar below */}
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-800 select-none shadow-sm">
              <span className="flex items-center gap-1.5 text-[#0E9F8E] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Interaktif:
              </span>
              <span>Anda dapat menekan tombol, tab navigasi, chip, dan form untuk navigasi langsung.</span>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: ALL 15 SCREENS GALLERY */}
        {viewMode === 'gallery' && (
          <div className="w-full max-w-[1720px] py-4">
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-heading font-bold text-white">
                  Semua 15 Layar UI Design MEDITO
                </h2>
                <p className="text-xs text-slate-400">
                  Didesain dalam kanvas presisi 1080x1920 px (9:16) & kanvas smartwatch 1080x1080 px (1:1).
                </p>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0E9F8E]" />
                <span>Klik layar mana saja untuk membuka mode interaktif penuh.</span>
              </div>
            </div>

            {/* Responsive Grid of All 15 Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 pb-12">
              {SCREENS_REGISTRY.map((meta) => {
                const isSelected = currentScreen === meta.id;
                return (
                  <div
                    key={meta.id}
                    onClick={() => {
                      setCurrentScreen(meta.id);
                      setViewMode('prototype');
                    }}
                    className={`flex flex-col bg-slate-900/90 rounded-3xl p-4 border transition-all cursor-pointer group hover:-translate-y-1 ${
                      isSelected
                        ? 'border-[#0E9F8E] shadow-[0_12px_32px_rgba(14,159,142,0.25)] ring-2 ring-[#0E9F8E]/40'
                        : 'border-slate-800 hover:border-slate-700 hover:shadow-xl'
                    }`}
                  >
                    {/* Screen Card Header */}
                    <div className="flex items-center justify-between mb-3 select-none">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-[#0E9F8E] flex items-center justify-center text-xs font-bold font-heading border border-slate-700">
                          {meta.number}
                        </span>
                        <span className="text-xs font-bold text-white group-hover:text-[#0E9F8E] transition-colors truncate max-w-[150px]">
                          {meta.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {meta.isSmartwatch ? '1:1 Watch' : '9:16 Mobile'}
                      </span>
                    </div>

                    {/* Scaled Preview Frame */}
                    <div className="w-full flex items-center justify-center bg-slate-950/60 rounded-2xl p-2 overflow-hidden border border-slate-800/80">
                      <PhoneFrame
                        scale={0.21}
                        showBezel={false}
                        isSmartwatch={meta.isSmartwatch}
                      >
                        {renderScreenContent(meta.id)}
                      </PhoneFrame>
                    </div>

                    {/* Description excerpt */}
                    <p className="text-[11px] text-slate-400 mt-3 line-clamp-2 leading-snug">
                      {meta.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW MODE 3: COMPARISON VIEW */}
        {viewMode === 'comparison' && (
          <div className="w-full max-w-[1400px] py-4 flex flex-col items-center">
            <div className="mb-6 flex items-center justify-between w-full border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-heading font-bold text-white">
                  Komparasi Layar Berdampingan
                </h2>
                <p className="text-xs text-slate-400">
                  Bandingkan alur pasien dengan dashboard caregiver atau tampilan jam tangan pintar.
                </p>
              </div>

              {/* Second screen picker */}
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-400">Pilih Layar Pembanding:</span>
                <select
                  value={compareScreen}
                  onChange={(e) => setCompareScreen(e.target.value as ScreenId)}
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 outline-none cursor-pointer"
                >
                  {SCREENS_REGISTRY.map((s) => (
                    <option key={s.id} value={s.id}>
                      #{s.number} - {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dual Frame Comparison */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-4">
              {/* Left Screen */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0E9F8E]/20 text-[#0E9F8E] text-xs font-bold border border-[#0E9F8E]/30">
                    Layar #{currentMeta.number}: {currentMeta.title}
                  </span>
                </div>
                <PhoneFrame scale={scale * 0.9} showBezel={showBezel} isSmartwatch={currentMeta.isSmartwatch}>
                  {renderScreenContent(currentScreen)}
                </PhoneFrame>
              </div>

              {/* Right Screen */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                    Pembanding: {SCREENS_REGISTRY.find((s) => s.id === compareScreen)?.title}
                  </span>
                </div>
                <PhoneFrame
                  scale={scale * 0.9}
                  showBezel={showBezel}
                  isSmartwatch={SCREENS_REGISTRY.find((s) => s.id === compareScreen)?.isSmartwatch}
                >
                  {renderScreenContent(compareScreen)}
                </PhoneFrame>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Thumbnail Strip for Instant Navigation */}
      <ScreenThumbnailStrip
        currentScreen={currentScreen}
        onSelectScreen={(id) => {
          setCurrentScreen(id);
          if (viewMode === 'gallery') setViewMode('prototype');
        }}
      />

      {/* Design System Token Inspector Modal */}
      <DesignSystemInspector
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />
    </div>
  );
}
