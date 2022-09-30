import { BaseDirectory, readTextFile, writeTextFile, createDir } from '@tauri-apps/api/fs';

export enum Mode {
  default = 'MODE_DEFAULT',
  shortRest = 'MODE_SHORT_REST',
  longRest = 'MODE_LONG_REST',
}

interface Settings {
  defaultMainTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
  lightMode: boolean;
}

export interface PomodoroState {
  settings: Settings;
  currentTime: number;
  pastTime: number;
  currentCycle: number;
  isPlaying: boolean;
  mode: Mode;
}

const defaultMainTime = 25;
const shortRestTime = 5;
const longRestTime = 15;

async function getSettings(): Promise<Settings> {
  try {
    const fileContent = await readTextFile('settings.json', { dir: BaseDirectory.App });
    return JSON.parse(fileContent) as Settings;
  } catch (error) {
    const settings = { defaultMainTime, shortRestTime, longRestTime, cycles: 4, lightMode: false };
    await createDir('pomodoro', { dir: BaseDirectory.Data });
    await writeTextFile('settings.json', JSON.stringify(settings), { dir: BaseDirectory.App });
    return settings;
  }
}

export const initialState: PomodoroState = {
  currentTime: defaultMainTime * 60,
  pastTime: 0,
  currentCycle: 1,
  isPlaying: false,
  mode: Mode.default,
  settings: await getSettings(),
};
