import { useFavorites } from './useFavorites';
import { useToast } from './useToast';

export const useFavoritesWithToast = () => {
  const favoritesStore = useFavorites();
  const { showSuccess, showError } = useToast();

  const addFavoriteWithToast = async (data: any) => {
    try {
      await favoritesStore.addFavorite(data);
      showSuccess('Filme adicionado aos favoritos!');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Erro ao adicionar filme aos favoritos';
      showError(errorMessage);
      throw error;
    }
  };

  const removeFavoriteWithToast = async (id: number) => {
    try {
      await favoritesStore.removeFavorite(id);
      showSuccess('Filme removido dos favoritos!');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Erro ao remover filme dos favoritos';
      showError(errorMessage);
      throw error;
    }
  };

  const toggleFavoriteWithToast = async (movie: any) => {
    try {
      const wasFavorite = favoritesStore.isFavorite(movie.id);
      await favoritesStore.toggleFavorite(movie);
      
      if (wasFavorite) {
        showSuccess('Filme removido dos favoritos!');
      } else {
        showSuccess('Filme adicionado aos favoritos!');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Erro ao alterar favorito';
      showError(errorMessage);
      throw error;
    }
  };

  return {
    ...favoritesStore,
    addFavorite: addFavoriteWithToast,
    removeFavorite: removeFavoriteWithToast,
    toggleFavorite: toggleFavoriteWithToast,
  };
};
