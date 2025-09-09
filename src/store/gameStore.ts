// src/store/gameStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Component, Challenge, Project, UserProgress, BuildingItem, DifficultyLevel, Achievement } from '@/types';

interface GameState {
  userProgress: UserProgress;
  currentProject: Project | null;
  availableComponents: Component[];
  challenges: Challenge[];
  achievements: Achievement[];
  
  // Actions
  unlockComponent: (componentId: string) => void;
  completeChallenge: (challengeId: string) => void;
  createProject: (name: string) => void;
  updateProject: (items: BuildingItem[]) => void;
  saveProject: () => void;
  loadProject: (projectId: string) => void;
  setUserLevel: (level: DifficultyLevel) => void;
}

// Default components
const defaultComponents: Component[] = [
  {
    id: 'body-basic',
    name: 'Robot Body',
    type: 'body',
    icon: '🤖',
    description: 'The main body of your robot',
    unlocked: true,
    requiredLevel: 'beginner',
    color: '#3b82f6',
    size: { width: 80, height: 80 },
    rarity: 'common',
    stats: { durability: 3, size: 'medium' },
    connectionPoints: [
      { x: 0, y: -40, type: 'top' },
      { x: 0, y: 40, type: 'bottom' },
      { x: -40, y: 0, type: 'left' },
      { x: 40, y: 0, type: 'right' }
    ]
  },
  {
    id: 'wheels-basic',
    name: 'Wheels',
    type: 'wheels',
    icon: '⚙️',
    description: 'Help your robot move around',
    unlocked: false,
    requiredLevel: 'beginner',
    color: '#64748b',
    size: { width: 40, height: 40 },
    rarity: 'common',
    stats: { speed: 3, terrain: 'smooth' },
    connectionPoints: [
      { x: 0, y: -20, type: 'top' }
    ]
  },
  {
    id: 'sensor-basic',
    name: 'Sensor',
    type: 'sensor',
    icon: '👁️',
    description: 'Helps your robot see and detect things',
    unlocked: false,
    requiredLevel: 'beginner',
    color: '#22c55e',
    size: { width: 30, height: 30 },
    rarity: 'common',
    stats: { range: 3, accuracy: 'good' },
    connectionPoints: [
      { x: 0, y: 15, type: 'bottom' }
    ]
  },
  {
    id: 'battery-basic',
    name: 'Battery',
    type: 'battery',
    icon: '🔋',
    description: 'Powers your robot',
    unlocked: false,
    requiredLevel: 'beginner',
    color: '#f59e0b',
    size: { width: 50, height: 30 },
    rarity: 'common',
    stats: { capacity: 3, duration: '2 hours' },
    connectionPoints: [
      { x: 0, y: -15, type: 'top' },
      { x: 0, y: 15, type: 'bottom' }
    ]
  },
  {
    id: 'arm-basic',
    name: 'Robot Arm',
    type: 'arm',
    icon: '🦾',
    description: 'Helps your robot grab and move things',
    unlocked: false,
    requiredLevel: 'advanced',
    color: '#8b5cf6',
    size: { width: 60, height: 20 },
    rarity: 'rare',
    stats: { strength: 3, precision: 'good' },
    connectionPoints: [
      { x: -30, y: 0, type: 'left' }
    ]
  }
];

// Default challenges
const defaultChallenges: Challenge[] = [
  {
    id: 'pattern-1',
    title: 'Pattern Detective',
    description: 'Complete the pattern to unlock wheels!',
    difficulty: 'beginner',
    type: 'pattern',
    question: 'What comes next in this pattern?',
    pattern: ['🔴', '🔵', '🔴', '🔵', '🔴'],
    options: ['🔴', '🔵', '🟡', '🟢'],
    correctAnswer: '🔵',
    reward: 'wheels-basic',
    rewardName: 'Robot Wheels',
    points: 10,
    completed: false
  },
  {
    id: 'counting-1',
    title: 'Robot Counter',
    description: 'Count the robots to unlock a sensor!',
    difficulty: 'beginner',
    type: 'counting',
    question: 'How many robots do you see?',
    countItems: '🤖🤖🤖🤖🤖',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    reward: 'sensor-basic',
    rewardName: 'Robot Sensor',
    points: 10,
    completed: false
  },
  {
    id: 'logic-1',
    title: 'Power Up Logic',
    description: 'Solve this logic puzzle to unlock a battery!',
    difficulty: 'beginner',
    type: 'logic',
    question: 'A robot needs power to work. What does it need?',
    options: ['🍎 Food', '🔋 Battery', '💧 Water', '😴 Sleep'],
    correctAnswer: '🔋 Battery',
    reward: 'battery-basic',
    rewardName: 'Robot Battery',
    points: 10,
    completed: false
  },
  {
    id: 'sequence-1',
    title: 'Build Sequence',
    description: 'Put the robot building steps in order!',
    difficulty: 'advanced',
    type: 'sequence',
    question: 'What is the correct order to build a robot?',
    sequenceItems: ['🔋 Add Battery', '🤖 Build Body', '⚙️ Add Wheels', '🔧 Test Robot'],
    options: ['Body → Battery → Wheels → Test', 'Battery → Body → Test → Wheels', 'Wheels → Body → Battery → Test', 'Test → Body → Battery → Wheels'],
    correctAnswer: 'Body → Battery → Wheels → Test',
    reward: 'arm-basic',
    rewardName: 'Robot Arm',
    points: 15,
    completed: false
  }
];

// Default achievements
const defaultAchievements: Achievement[] = [
  { id: 'first-build', name: 'First Builder', description: 'Built your first robot!', icon: '🏗️', unlocked: true, rarity: 'common' },
  { id: 'challenge-master', name: 'Challenge Master', description: 'Completed 5 challenges', icon: '🎯', unlocked: false, rarity: 'rare' },
  { id: 'component-collector', name: 'Component Collector', description: 'Unlocked 10 components', icon: '🧩', unlocked: false, rarity: 'rare' },
  { id: 'engineer', name: 'Young Engineer', description: 'Built 5 different robots', icon: '⚡', unlocked: false, rarity: 'legendary' },
  { id: 'streak-champion', name: 'Streak Champion', description: '7-day learning streak', icon: '🔥', unlocked: false, rarity: 'legendary' },
  { id: 'master-builder', name: 'Master Builder', description: 'Reached Elite level', icon: '👑', unlocked: false, rarity: 'legendary' }
];

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      userProgress: {
        level: 'beginner',
        unlockedComponents: ['body-basic'],
        completedChallenges: [],
        projects: [],
        totalPoints: 0,
        joinDate: new Date(),
        currentStreak: 0,
        longestStreak: 0,
        totalBuildTime: 0
      },
      currentProject: null,
      availableComponents: defaultComponents,
      challenges: defaultChallenges,
      achievements: defaultAchievements,

      unlockComponent: (componentId: string) => {
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            unlockedComponents: [...state.userProgress.unlockedComponents, componentId]
          },
          availableComponents: state.availableComponents.map(comp =>
            comp.id === componentId ? { ...comp, unlocked: true } : comp
          )
        }));
      },

      completeChallenge: (challengeId: string) => {
        const challenge = get().challenges.find(c => c.id === challengeId);
        if (challenge && !challenge.completed) {
          set((state) => ({
            userProgress: {
              ...state.userProgress,
              completedChallenges: [...state.userProgress.completedChallenges, challengeId],
              totalPoints: state.userProgress.totalPoints + challenge.points
            },
            challenges: state.challenges.map(c =>
              c.id === challengeId ? { ...c, completed: true } : c
            )
          }));
          
          // Unlock the reward component
          get().unlockComponent(challenge.reward);
        }
      },

      createProject: (name: string) => {
        const newProject: Project = {
          id: `project-${Date.now()}`,
          name,
          items: [],
          createdAt: new Date(),
          lastModified: new Date(),
          thumbnail: '🤖',
          stats: { components: 0, buildTime: 0 }
        };
        
        set((state) => ({
          currentProject: newProject,
          userProgress: {
            ...state.userProgress,
            projects: [...state.userProgress.projects, newProject]
          }
        }));
      },

      updateProject: (items: BuildingItem[]) => {
        set((state) => ({
          currentProject: state.currentProject ? {
            ...state.currentProject,
            items,
            lastModified: new Date(),
            stats: {
              ...state.currentProject.stats,
              components: items.length
            }
          } : null
        }));
      },

      saveProject: () => {
        const { currentProject, userProgress } = get();
        if (currentProject) {
          set((state) => ({
            userProgress: {
              ...state.userProgress,
              projects: state.userProgress.projects.map(p =>
                p.id === currentProject.id ? currentProject : p
              )
            }
          }));
        }
      },

      loadProject: (projectId: string) => {
        const project = get().userProgress.projects.find(p => p.id === projectId);
        if (project) {
          set({ currentProject: project });
        }
      },

      setUserLevel: (level: DifficultyLevel) => {
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            level
          }
        }));
      }
    }),
    {
      name: 'buildbot-academy-storage'
    }
  )
);