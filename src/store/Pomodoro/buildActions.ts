import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';
import { Mode } from './initialState';

export const buildActions = (dispatch: Dispatch) => {
  return {
    toggle: () => dispatch({ type: actionTypes.TOGGLE }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: (payload: number) => dispatch({ type: actionTypes.RESET, payload }),
    setMode: (payload: Mode) => dispatch({ type: actionTypes[payload], payload }),
  };
};
