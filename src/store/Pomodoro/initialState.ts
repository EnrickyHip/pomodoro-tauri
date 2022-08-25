export type Mode = 'MODE_POMODORO' | 'MODE_SHORT_REST' | 'MODE_LONG_REST';

interface Settings {
  defaultMainTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export interface PomodoroState {
  settings: Settings;
  currentTime: number;
  pastTime: number;
  currentCycle: number;
  isPlaying: boolean;
  mode: Mode;
}

const defaultMainTime = 5;
const shortRestTime = 2;
const longRestTime = 3;

export const initialState: PomodoroState = {
  currentTime: defaultMainTime * 60,
  pastTime: 0,
  currentCycle: 1,
  isPlaying: false,
  mode: 'MODE_POMODORO',
  settings: {
    defaultMainTime,
    shortRestTime,
    longRestTime,
    cycles: 4,
  },
};
