import { create } from 'zustand';
import type { Movie, MovieDetails, SearchResponse } from '../types/movie';
import { moviesApi } from '../api/moviesApi';

interface MoviesState {
  movies: Movie[];
  popularMovies: Movie[];
  searchResults: Movie[];
  currentMovie: MovieDetails | null;
  isLoading: boolean;
  isSearching: boolean;
  error: string | null;
  searchQuery: string;
  // Pagination
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

interface MoviesActions {
  // Filmes populares
  loadPopularMovies: (page?: number) => Promise<void>;
  
  // Busca
  searchMovies: (query: string, page?: number) => Promise<void>;
  clearSearch: () => void;
  setSearchQuery: (query: string) => void;
  
  // Detalhes do filme
  getMovieDetails: (id: number) => Promise<void>;
  clearCurrentMovie: () => void;
  
  // Paginação
  setPage: (page: number) => void;
  
  // Gerenciamento de estado
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useMoviesStore = create<MoviesState & MoviesActions>((set, get) => ({
  // Estado inicial
  movies: [],
  popularMovies: [],
  searchResults: [],
  currentMovie: null,
  isLoading: false,
  isSearching: false,
  error: null,
  searchQuery: '',
  // Paginação
  currentPage: 1,
  totalPages: 1,
  totalResults: 0,

  // Ações
  loadPopularMovies: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response: SearchResponse = await moviesApi.getPopularMovies(page);
      if (!response || !response.results) {
        throw new Error('Invalid response from API');
      }
      set({
        popularMovies: response.results,
        movies: response.results,
        currentPage: response.page,
        totalPages: response.total_pages,
        totalResults: response.total_results,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao carregar filmes populares',
        isLoading: false,
      });
    }
  },

  searchMovies: async (query: string, page = 1) => {
    set({ isSearching: true, error: null, searchQuery: query });
    try {
      const response: SearchResponse = await moviesApi.searchMovies(query, page);
      if (!response || !response.results) {
        throw new Error('Invalid response from API');
      }
      set({
        searchResults: response.results,
        movies: response.results,
        currentPage: response.page,
        totalPages: response.total_pages,
        totalResults: response.total_results,
        isSearching: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao pesquisar filmes',
        isSearching: false,
      });
    }
  },

  clearSearch: () => {
    set({
      searchResults: [],
      movies: get().popularMovies,
      searchQuery: '',
    });
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  getMovieDetails: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const movie: MovieDetails = await moviesApi.getMovieDetails(id);
      if (!movie || !movie.id) {
        throw new Error('Invalid movie data from API');
      }
      set({
        currentMovie: movie,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao carregar detalhes do filme',
        isLoading: false,
      });
    }
  },

  clearCurrentMovie: () => {
    set({ currentMovie: null });
  },

  setPage: (page: number) => {
    set({ currentPage: page });
  },

  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  clearError: () => set({ error: null }),
}));
