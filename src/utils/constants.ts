export const API_BASE_URL = 'http://localhost:3001/api';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FAVORITES: '/favorites',
  MOVIE_DETAILS: '/movie/:id',
} as const;

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
} as const;
