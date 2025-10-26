import { useFavoritesStore } from '../store/favoritesStore';

export const useFavorites = () => {
  const {
    favorites,
    favoriteIds,
    shareToken,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalResults,
    loadFavorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    generateShareToken,
    getSharedList,
    setLoading,
    setError,
    clearError,
  } = useFavoritesStore();

  return {
    favorites,
    favoriteIds,
    shareToken,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalResults,
    loadFavorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    generateShareToken,
    getSharedList,
    setLoading,
    setError,
    clearError,
  };
};
