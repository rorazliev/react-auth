import {
  AnyAction, applyMiddleware, combineReducers, createStore,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {
  TypedUseSelectorHook, useSelector as useBaseSelector,
} from 'react-redux';
import authReducer from './authReducer';

// Create a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create a new store instance
const store = createStore(rootReducer, applyMiddleware(thunk));

// The state type
export type State = ReturnType<typeof store.getState>

// The thunk dispatch type
export type Dispatch = ThunkDispatch<State, unknown, AnyAction>

// Rewrite useSelector for thunking
export const useSelector: TypedUseSelectorHook<State> = useBaseSelector;

// Save id, username, and token to localStorage
store.subscribe(() => {
  const state: State = store.getState();

  sessionStorage.setItem('id', String(state.auth.id) || '');
  sessionStorage.setItem('username', state.auth.username || '');
  sessionStorage.setItem('token', state.auth.token || '');
});

export default store;
