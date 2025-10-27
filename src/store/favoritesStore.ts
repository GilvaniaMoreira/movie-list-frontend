import { create } from 'zustand';
import type { FavoriteMovie, AddFavoriteRequest } from '../types/favorite';
import { favoritesApi } from '../api/favoritesApi';

interface FavoritesState {
  favorites: FavoriteMovie[];
  favoriteIds: number[];
  shareToken: string | null;
  isLoading: boolean;
  error: string | null;
  // Pagination
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

interface FavoritesActions {
  // Load favorites
  loadFavorites: (page?: number) => Promise<void>;
  
  // Add/Remove favorites
  addFavorite: (data: AddFavoriteRequest) => Promise<void>;
  removeFavorite: (id: number) => Promise<void>;
  toggleFavorite: (movie: any) => Promise<void>;
  
  // Check if favorite
  isFavorite: (tmdbId: number) => boolean;
  
  // Share functionality
  generateShareToken: () => Promise<string>;
  getSharedList: (shareToken: string, page?: number) => Promise<{ owner: string; results: FavoriteMovie[]; page: number; total_pages: number; total_results: number }>;
  
  // State management
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useFavoritesStore = create<FavoritesState & FavoritesActions>((set, get) => ({
  // Estado inicial
  favorites: [],
  favoriteIds: [],
  shareToken: null,
  isLoading: false,
  error: null,
  // Pagination
  currentPage: 1,
  totalPages: 1,
  totalResults: 0,

  // Ações
  loadFavorites: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await favoritesApi.getFavorites(page);
      const favoriteIds = response.results.map(fav => fav.tmdb_id || (fav as any).tmdbMovieId || fav.id);
      set({
        favorites: response.results,
        favoriteIds,
        currentPage: response.page,
        totalPages: response.total_pages,
        totalResults: response.total_results,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao carregar favoritos',
        isLoading: false,
      });
    }
  },

  addFavorite: async (data: AddFavoriteRequest) => {
    set({ isLoading: true, error: null });
    try {
      await favoritesApi.addFavorite(data);
      const tmdbId = data.tmdb_id;
      // Recarregar os favoritos após adicionar
      await get().loadFavorites(1);
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao adicionar favorito',
        isLoading: false,
      });
      throw error;
    }
  },

  removeFavorite: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await favoritesApi.removeFavorite(id);
      set(state => ({
        favorites: state.favorites.filter(fav => fav.id !== id),
        favoriteIds: state.favoriteIds.filter(favId => favId !== id),
        isLoading: false,
      }));
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao remover favorito',
        isLoading: false,
      });
      throw error;
    }
  },

  toggleFavorite: async (movie: any) => {
    const { isFavorite, addFavorite, removeFavorite } = get();
    const tmdbId = movie.id;
    
    if (isFavorite(tmdbId)) {
      const favorite = get().favorites.find(fav => fav.tmdb_id === tmdbId || fav.id === tmdbId);
      if (favorite) {
        await removeFavorite(favorite.id);
      }
    } else {
      const favoriteData: AddFavoriteRequest = {
        tmdb_id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
        rating: movie.vote_average,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      };
      await addFavorite(favoriteData);
    }
  },

  isFavorite: (tmdbId: number) => {
    const favoriteIds = get().favoriteIds;
    return favoriteIds.includes(tmdbId);
  },

  generateShareToken: async () => {
    set({ isLoading: true, error: null });
    try {
      const shareToken = await favoritesApi.generateShareToken();
      set({ shareToken, isLoading: false });
      return shareToken;
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao gerar token de compartilhamento',
        isLoading: false,
      });
      throw error;
    }
  },

  getSharedList: async (shareToken: string, page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const result = await favoritesApi.getSharedList(shareToken, page);
      set({ isLoading: false });
      return result;
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao carregar lista compartilhada',
        isLoading: false,
      });
      throw error;
    }
  },

  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  clearError: () => set({ error: null }),
}));
