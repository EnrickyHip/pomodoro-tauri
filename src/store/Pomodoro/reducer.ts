import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import * as actionTypes from './actionTypes';
import { initialState, PomodoroState } from './initialState';

export const reducer = (state: PomodoroState = { ...initialState }, action: PayloadAction<number>): PomodoroState => {
  switch (action.type) {
    case actionTypes.PLAY:
      return { ...state, isPlaying: true, interval: 1000 };

    case actionTypes.PAUSE:
      return { ...state, isPlaying: false, interval: null };

    case actionTypes.DECREMENT:
      return { ...state, currentTime: state.currentTime - 1 };

    case actionTypes.RESET:
      return { ...state, currentTime: action.payload };

    default:
      return { ...state };
  }
};
