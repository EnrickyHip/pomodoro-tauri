import { PayloadAction } from '@reduxjs/toolkit';
import * as actionTypes from './actionTypes';
import { initialState, PomodoroState } from './initialState';

export const reducer = (state: PomodoroState = { ...initialState }, action: PayloadAction<number>): PomodoroState => {
  switch (action.type) {
    case actionTypes.TOGGLE:
      return { ...state, isPlaying: !state.isPlaying };

    case actionTypes.DECREMENT:
      return { ...state, currentTime: state.currentTime - 1, pastTime: state.pastTime + 1 };

    case actionTypes.RESET:
      return { ...state, currentCycle: 1 };

    case actionTypes.COMPLETE_CYCLE: {
      return { ...state, currentCycle: state.currentCycle + 1 };
    }

    case actionTypes.CHANGE_DEFAULT_TIME: {
      return {
        ...state,
        settings: { ...state.settings, defaultMainTime: action.payload },
      };
    }

    case actionTypes.CHANGE_SHORT_REST: {
      return { ...state, settings: { ...state.settings, shortRestTime: action.payload } };
    }

    case actionTypes.CHANGE_LONG_REST: {
      return { ...state, settings: { ...state.settings, longRestTime: action.payload } };
    }

    case actionTypes.CHANGLE_CYCLES: {
      return { ...state, settings: { ...state.settings, cycles: action.payload } };
    }

    case actionTypes.MODE_POMODORO:
      return {
        ...state,
        currentTime: state.settings.defaultMainTime * 60,
        pastTime: 0,
        isPlaying: false,
        mode: 'MODE_POMODORO',
      };

    case actionTypes.MODE_SHORT_REST:
      return {
        ...state,
        currentTime: state.settings.shortRestTime * 60,
        pastTime: 0,
        isPlaying: false,
        mode: 'MODE_SHORT_REST',
      };

    case actionTypes.MODE_LONG_REST:
      return {
        ...state,
        currentTime: state.settings.longRestTime * 60,
        pastTime: 0,
        isPlaying: false,
        mode: 'MODE_LONG_REST',
      };

    default:
      return { ...state };
  }
};
