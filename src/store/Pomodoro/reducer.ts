import { AnyAction } from '@reduxjs/toolkit';
import * as actionTypes from './actionTypes';
import { initialState, PomodoroState } from './initialState';

export const reducer = (state: PomodoroState = { ...initialState }, action: AnyAction): PomodoroState => {
  switch (action.type) {
    case actionTypes.TOGGLE:
      return { ...state, isPlaying: !state.isPlaying };

    case actionTypes.DECREMENT:
      return { ...state, currentTime: state.currentTime - 1 };

    case actionTypes.RESET:
      return { ...state, currentCycle: 1 };

    case actionTypes.COMPLETE_CYCLE: {
      return { ...state, currentCycle: state.currentCycle + 1 };
    }

    case actionTypes.MODE_POMODORO:
      return {
        ...state,
        currentTime: state.settings.defaultMainTime,
        isPlaying: false,
        mode: 'MODE_POMODORO',
      };

    case actionTypes.MODE_SHORT_REST:
      return {
        ...state,
        currentTime: state.settings.shortRestTime,
        isPlaying: false,
        mode: 'MODE_SHORT_REST',
      };

    case actionTypes.MODE_LONG_REST:
      return {
        ...state,
        currentTime: state.settings.longRestTime,
        isPlaying: false,
        mode: 'MODE_LONG_REST',
      };

    default:
      return { ...state };
  }
};
