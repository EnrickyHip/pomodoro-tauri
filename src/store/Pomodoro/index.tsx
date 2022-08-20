import { configureStore } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { buildActions } from './buildActions';
import { PomodoroState } from './initialState';
import { reducer } from './reducer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const store = configureStore({ reducer });

export const PomodoroProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export const usePomodoro = () => {
  const dispatch = useDispatch();
  const actions = useRef(buildActions(dispatch));
  const state = useSelector((state: PomodoroState) => state);

  if (!state) throw new Error('You should use usePomodoro inside a PomodoroProvider');

  return { state, actions: actions.current };
};
