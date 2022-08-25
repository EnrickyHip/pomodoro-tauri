import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';
import { Mode } from './initialState';

export const buildActions = (dispatch: Dispatch) => {
  return {
    changeDefaultTime: (payload: number) => changeDefaultTime(payload, dispatch),
    changeShortTime: (payload: number) => changeShortTime(payload, dispatch),
    changeLongTime: (payload: number) => changeLongTime(payload, dispatch),
    ChangeCycles: (payload: number) => ChangeCycles(payload, dispatch),

    completeCycle: () => dispatch({ type: actionTypes.COMPLETE_CYCLE }),
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

const changeDefaultTime = (payload: number, dispatch: Dispatch) => {
  dispatch({ type: actionTypes.CHANGE_DEFAULT_TIME, payload });
  reset(dispatch);
};

const changeShortTime = (payload: number, dispatch: Dispatch) => {
  dispatch({ type: actionTypes.CHANGE_SHORT_REST, payload });
  reset(dispatch);
};

const changeLongTime = (payload: number, dispatch: Dispatch) => {
  dispatch({ type: actionTypes.CHANGE_LONG_REST, payload });
  reset(dispatch);
};

const ChangeCycles = (payload: number, dispatch: Dispatch) => {
  dispatch({ type: actionTypes.CHANGLE_CYCLES, payload });
  reset(dispatch);
};
