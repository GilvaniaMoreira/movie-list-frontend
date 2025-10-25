import axios from 'axios';
import type { Movie, SearchResponse } from '../types/movie';
import type { FavoriteMovie } from '../types/favorite';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const movieApi = {
  // Pesquisar filmes
  searchMovies: async (query: string, page: number = 1): Promise<SearchResponse> => {
    const response = await api.get(`/search/search`, {
      params: { query, page }
    });
    return response.data;
  },

  // Obter filmes populares
  getPopularMovies: async (page: number = 1): Promise<SearchResponse> => {
    const response = await api.get(`/search/popular`, {
      params: { page }
    });
    return response.data;
  },

  // Obter detalhes de um filme
  getMovieDetails: async (id: number): Promise<Movie> => {
    const response = await api.get(`/search/movie/${id}`);
    return response.data;
  },
};

export const favoriteApi = {
  // Obter todos os favoritos
  getFavorites: async (): Promise<FavoriteMovie[]> => {
    const response = await api.get('/favorites');
    return response.data;
  },

  // Adicionar filme aos favoritos
  addFavorite: async (movie: Partial<FavoriteMovie>): Promise<FavoriteMovie> => {
    const response = await api.post('/favorites', movie);
    return response.data;
  },

  // Remover filme dos favoritos
  removeFavorite: async (id: number): Promise<void> => {
    await api.delete(`/favorites/${id}`);
  },

  // Verificar se um filme está nos favoritos
  checkFavorite: async (tmdb_id: number): Promise<{ isFavorite: boolean; favorite?: FavoriteMovie }> => {
    const response = await api.get(`/favorites/check/${tmdb_id}`);
    return response.data;
  },

  // Criar lista compartilhável
  createShareableList: async (): Promise<{ share_uuid: string }> => {
    const response = await api.post('/favorites/share');
    return response.data;
  },

  // Obter lista compartilhável
  getSharedList: async (uuid: string): Promise<FavoriteMovie[]> => {
    const response = await api.get(`/favorites/share/${uuid}`);
    return response.data;
  },
};