import { PayloadAction } from '@reduxjs/toolkit';
import * as actionTypes from './actionTypes';
import { initialState, Mode, PomodoroState } from './initialState';

export const reducer = (state: PomodoroState = { ...initialState }, action: PayloadAction<number>): PomodoroState => {
  switch (action.type) {
    case actionTypes.TOGGLE_PLAY:
      return { ...state, isPlaying: !state.isPlaying };

    case actionTypes.DECREMENT:
      return { ...state, currentTime: state.currentTime - 1, pastTime: state.pastTime + 1 };

    case actionTypes.UPDATE_CURRENT_TIME: {
      return { ...state, currentTime: action.payload };
    }

    case actionTypes.RESET:
      return { ...state, currentCycle: 1, isPlaying: false };

    case actionTypes.COMPLETE_CYCLE: {
      return { ...state, currentCycle: state.currentCycle + 1 };
    }

    case actionTypes.CHANGE_DEFAULT_TIME: {
      return { ...state, settings: { ...state.settings, defaultMainTime: action.payload } };
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

    case actionTypes.TOGGLE_THEME: {
      return { ...state, settings: { ...state.settings, lightMode: !state.settings.lightMode } };
    }

    case actionTypes.MODE_DEFAULT:
      return {
        ...state,
        currentTime: state.settings.defaultMainTime * 60,
        pastTime: 0,
        mode: Mode.default,
      };

    case actionTypes.MODE_SHORT_REST:
      return {
        ...state,
        currentTime: state.settings.shortRestTime * 60,
        pastTime: 0,
        mode: Mode.shortRest,
      };

    case actionTypes.MODE_LONG_REST:
      return {
        ...state,
        currentTime: state.settings.longRestTime * 60,
        pastTime: 0,
        mode: Mode.longRest,
      };

    default:
      return { ...state };
  }
};
