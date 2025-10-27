import { apiClient } from './client';
import type { LoginRequest, RegisterRequest, User, AuthResponse } from '../types/auth';

export const authApi = {
  // Login
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', data);
    return response.data.data;
  },

  // Registro
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/register', data);
    return response.data.data;
  },

  // Perfil do usuário
  getProfile: async (): Promise<User> => {
    const response = await apiClient.get('/auth/profile');
    return response.data.data;
  },

  // Logout
  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
  },
};
