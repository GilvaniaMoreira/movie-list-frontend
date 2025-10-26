import { apiClient } from './client';
import type { FavoriteMovie, AddFavoriteRequest } from '../types/favorite';

export const favoritesApi = {
  // Obter favoritos
  getFavorites: async (page = 1): Promise<{ results: FavoriteMovie[]; page: number; total_pages: number; total_results: number }> => {
    const response = await apiClient.get(`/favorites?page=${page}&limit=10`);
    return response.data;
  },

  // Adicionar favorito
  addFavorite: async (data: AddFavoriteRequest): Promise<FavoriteMovie> => {
    // Converter tmdb_id para tmdbMovieId conforme esperado pelo backend
    const backendData = {
      tmdbMovieId: data.tmdb_id,
    };
    const response = await apiClient.post('/favorites', backendData);
    return response.data;
  },

  // Remover favorito
  removeFavorite: async (id: number): Promise<void> => {
    await apiClient.delete(`/favorites/${id}`);
  },

  // Verificar se é favorito
  isFavorite: async (tmdbId: number): Promise<boolean> => {
    const response = await apiClient.get(`/favorites/check/${tmdbId}`);
    return response.data.isFavorite;
  },

  // Gerar token de compartilhamento
  generateShareToken: async (): Promise<string> => {
    const response = await apiClient.post('/favorites/share-token');
    return response.data.shareToken;
  },

  // Obter lista compartilhada
  getSharedList: async (shareToken: string): Promise<{ owner: string; movies: FavoriteMovie[] }> => {
    const response = await apiClient.get(`/favorites/share/${shareToken}`);
    return response.data;
  },
};
