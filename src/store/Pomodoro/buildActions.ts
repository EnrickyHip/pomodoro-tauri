import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';
import { Mode } from './initialState';

export const buildActions = (dispatch: Dispatch) => {
  return {
    changeDefaultTime: (payload: number) => dispatch({ type: actionTypes.CHANGE_DEFAULT_TIME, payload }),
    changeShortTime: (payload: number) => dispatch({ type: actionTypes.CHANGE_SHORT_REST, payload }),
    changeLongTime: (payload: number) => dispatch({ type: actionTypes.CHANGE_LONG_REST, payload }),
    ChangeCycles: (payload: number) => dispatch({ type: actionTypes.CHANGLE_CYCLES, payload }),
    toggleTheme: () => dispatch({ type: actionTypes.TOGGLE_THEME }),

    updateCurrentTime: (payload: number) => dispatch({ type: actionTypes.UPDATE_CURRENT_TIME, payload }),

    completeCycle: () => dispatch({ type: actionTypes.COMPLETE_CYCLE }),
    togglePlay: () => dispatch({ type: actionTypes.TOGGLE_PLAY }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => reset(dispatch),
    setMode: (payload: Mode) => dispatch({ type: actionTypes[payload], payload }),
  };
};

const reset = (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.MODE_DEFAULT });
  dispatch({ type: actionTypes.RESET });
};
