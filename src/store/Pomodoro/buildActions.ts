import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';
import { Mode } from './initialState';

export const buildActions = (dispatch: Dispatch) => {
  return {
    toggle: () => dispatch({ type: actionTypes.TOGGLE }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => reset(dispatch),
    setMode: (payload: Mode) => dispatch({ type: actionTypes[payload], payload }),
  };
};

const reset = (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.MODE_POMODORO });
  dispatch({ type: actionTypes.RESET });
};
