/* eslint-disable default-param-last */
import { AnyAction } from 'redux';
import { AxiosPromise } from 'axios';
import { Dispatch } from './store';
import * as api from '../api/auth';
import Token from '../types/token';
import User from '../types/user';

// Initial state type
type State = {
  id?: number,
  username?: string,
  token?: string,
  error?: string,
};

// Initial state
const initialState = {
  id: Number(sessionStorage.getItem('id')) || undefined,
  username: sessionStorage.getItem('username') || undefined,
  token: sessionStorage.getItem('token') || undefined,
  error: undefined,
};

const authReducer = (
  state: State = initialState,
  action: AnyAction,
): State => {
  switch (action.type) {
    case 'AUTH/ERROR':
    case 'AUTH/RESET':
    case 'AUTH/RESET_ERROR':
    case 'AUTH/SET':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

// Action creators
const actions = {
  // Set an error
  error: (error: string) => ({
    type: 'AUTH/ERROR',
    payload: {
      error,
    },
  }),

  // Reset all data
  reset: () => ({
    type: 'AUTH/RESET',
    payload: {
      id: undefined,
      username: undefined,
      token: undefined,
      error: undefined,
    },
  }),

  // Reset an error message
  resetError: () => ({
    type: 'AUTH/RESET_ERROR',
    payload: {
      error: undefined,
    },
  }),

  // Set user data
  set: (id: number, username: string, token: string) => ({
    type: 'AUTH/SET',
    payload: {
      id,
      username,
      token,
    },
  }),
};

// Get data of the authenticated user
export const me = (token: string) => (dispatch: Dispatch): void => {
  const promise: AxiosPromise<User> = api.me(token);

  promise.then((response) => {
    const { id, username } = response.data;
    dispatch(actions.set(id, username, token));
  }).catch((error) => {
    dispatch(actions.error(error.response.data.message[0].messages[0].message));
  });
};

export const resetError = () => (dispatch: Dispatch): void => {
  dispatch(actions.resetError());
};

// Sign in the user
export const signin = (
  identifier: string,
  password: string,
) => (dispatch: Dispatch): void => {
  const promise: AxiosPromise<Token> = api.signin(identifier, password);

  promise.then((response) => {
    dispatch(me(response.data.jwt));
  }).catch((error) => {
    dispatch(actions.error(error.response.data.message[0].messages[0].message));
  });
};

// Sign up the user
export const signup = (
  email: string,
  username: string,
  password: string,
) => (dispatch: Dispatch): void => {
  const promise: AxiosPromise<Token> = api.signup(email, username, password);

  promise.then((response) => {
    dispatch(me(response.data.jwt));
  }).catch((error) => {
    dispatch(actions.error(error.response.data.message[0].messages[0].message));
  });
};

// Sign out the user
export const signout = () => (dispatch: Dispatch): void => {
  dispatch(actions.reset());
};

export default authReducer;
