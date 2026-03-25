export type AwardType = 'cup' | 'medal_gold' | 'medal_silver' | 'medal_bronze' | 'mvp' | 'ball_gold';

export interface Challenge {
  id: string;
  shortDesc: string;
  detailDesc: string;
  awards: { type: AwardType; label: string }[];
  deadline: string;
  targetValue: number;
  unit: 'continuous_days' | 'min_days_month' | 'min_days_year';
  isActive: boolean;
  history: string[]; // Lưu các ngày đã check-in (YYYY-MM-DD)
}

export interface Achievement {
  challengeTitle: string;
  awardType: AwardType;
  description: string;
  startDate: string;
  endDate: string;
}