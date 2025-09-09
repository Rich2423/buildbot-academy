// src/types/index.ts

export type DifficultyLevel = 'beginner' | 'advanced' | 'elite';

export interface Component {
  id: string;
  name: string;
  type: 'body' | 'wheels' | 'sensor' | 'battery' | 'arm' | 'antenna';
  icon: string;
  description: string;
  unlocked: boolean;
  requiredLevel: DifficultyLevel;
  color: string;
  size: { width: number; height: number };
  connectionPoints?: Array<{
    x: number;
    y: number;
    type: 'top' | 'bottom' | 'left' | 'right';
  }>;
  rarity?: 'common' | 'rare' | 'legendary';
  stats?: Record<string, any>;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  type: 'pattern' | 'counting' | 'logic' | 'sequence';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  reward: string; // component ID
  rewardName?: string;
  points: number;
  completed: boolean;
  pattern?: string[];
  countItems?: string;
  sequenceItems?: string[];
}

export interface BuildingItem {
  id: string;
  componentId: string;
  position: { x: number; y: number };
  rotation: number;
}

export interface Project {
  id: string;
  name: string;
  items: BuildingItem[];
  createdAt: Date;
  lastModified: Date;
  thumbnail?: string;
  stats?: {
    components: number;
    buildTime: number;
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'legendary';
}

export interface UserProgress {
  level: DifficultyLevel;
  unlockedComponents: string[];
  completedChallenges: string[];
  projects: Project[];
  totalPoints: number;
  joinDate?: Date;
  currentStreak?: number;
  longestStreak?: number;
  totalBuildTime?: number;
}