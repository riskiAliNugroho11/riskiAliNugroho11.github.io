export type ScreenId =
  | 'screen-1-splash'
  | 'screen-2-onboarding'
  | 'screen-3-auth'
  | 'screen-4-profile'
  | 'screen-5-home'
  | 'screen-6-add-med'
  | 'screen-7-reminder'
  | 'screen-8-med-detail'
  | 'screen-9-interaction'
  | 'screen-10-history'
  | 'screen-11-caregiver'
  | 'screen-12-caregiver-dashboard'
  | 'screen-13-hcp-dashboard'
  | 'screen-14-smartwatch'
  | 'screen-15-settings';

export type UserRole = 'pasien' | 'caregiver' | 'nakes';

export type TextSize = 'normal' | 'large' | 'xlarge';

export interface ScreenMeta {
  id: ScreenId;
  number: number;
  title: string;
  category: 'Onboarding & Auth' | 'Patient Core' | 'Medication & Alerts' | 'Caregiver & Clinical' | 'Settings & Companion';
  description: string;
  canvasSize: '1080 x 1920 px (9:16)' | '1080 x 1080 px (1:1)';
  isSmartwatch?: boolean;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  time: string;
  status: 'done' | 'process' | 'missed';
  category: string;
  stock: number;
  purpose: string;
  sideEffects: string;
  warningText: string;
}

export interface InteractionResult {
  drugA: string;
  drugB: string;
  level: 'warning' | 'safe';
  title: string;
  description: string;
  recommendation: string;
}

export interface CaregiverItem {
  id: string;
  name: string;
  relation: string;
  type: 'family' | 'hcp';
  notifyMissed: boolean;
  viewHistory: boolean;
  avatar: string;
}

export interface PatientRecord {
  id: string;
  name: string;
  age: number;
  gender: 'L' | 'P';
  condition: string;
  adherenceRate: number;
  status: 'good' | 'attention';
  hasInteractionWarning: boolean;
  lastDoseTime: string;
  missedDosesThisWeek: number;
}
