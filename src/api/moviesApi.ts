import { apiClient } from './client';
import type { MovieDetails, SearchResponse } from '../types/movie';

export const moviesApi = {
  // Buscar filmes
  searchMovies: async (query: string, page = 1): Promise<SearchResponse> => {
    const response = await apiClient.get(`/movies/search?query=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
  },

  // Filmes populares
  getPopularMovies: async (page = 1): Promise<SearchResponse> => {
    const response = await apiClient.get(`/movies/popular?page=${page}`);
    return response.data;
  },

  // Detalhes do filme
  getMovieDetails: async (id: number): Promise<MovieDetails> => {
    const response = await apiClient.get(`/movies/${id}`);
    return response.data;
  },
};
