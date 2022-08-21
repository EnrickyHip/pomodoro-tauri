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
  isPlaying: boolean;
  mode: Mode;
}

const defaultMainTime = 15;
const shortRestTime = 5;
const longRestTime = 10;

export const initialState: PomodoroState = {
  currentTime: defaultMainTime,
  isPlaying: false,
  mode: 'MODE_POMODORO',
  settings: {
    defaultMainTime,
    shortRestTime,
    longRestTime,
    cycles: 4,
  },
};
