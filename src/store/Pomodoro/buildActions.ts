import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes';

export const buildActions = (dispatch: Dispatch) => {
  return {
    play: () => dispatch({ type: actionTypes.PLAY }),
    pause: () => dispatch({ type: actionTypes.PAUSE }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: (payload: number) => dispatch({ type: actionTypes.RESET, payload }),
  };
};
