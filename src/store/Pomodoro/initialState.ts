export interface PomodoroState {
  settings: {
    defaultMainTime: number;
    cycles: number;
  };
  currentTime: number;
  isPlaying: boolean;
  interval: number | null;
}

const defaultMainTime = 15;

export const initialState: PomodoroState = {
  settings: {
    defaultMainTime,
    cycles: 4,
  },
  currentTime: defaultMainTime,
  isPlaying: false,
  interval: null,
};
