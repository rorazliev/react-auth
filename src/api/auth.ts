import axios, { AxiosPromise } from 'axios';
import Token from '../types/token';
import User from '../types/user';

// Base URL
export const baseURL = 'http://localhost:1337';

// Create a new axios instance
export const instance = axios.create({
  baseURL,
});

// Get the current authenticated user data
export const me = (
  token: string,
): AxiosPromise<User> => instance.get(
  '/users/me',
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

// Sign in the user
export const signin = (
  identifier: string,
  password: string,
): AxiosPromise<Token> => instance.post(
  '/auth/local',
  {
    identifier,
    password,
  },
);

// Sign up a new user
export const signup = (
  email: string,
  username: string,
  password: string,
): AxiosPromise<Token> => instance.post(
  '/auth/local/register',
  {
    email,
    username,
    password,
  },
);
