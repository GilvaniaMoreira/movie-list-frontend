import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import { useAuth } from '../../hooks/useAuth';
import { useMovies } from '../../hooks/useMovies';
import { useToast } from '../../hooks/useToast';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import Button from '../../components/ui/Button';
import Pagination from '../../components/Pagination';
import { Share, ContentCopy } from '@mui/icons-material';
import {
  FavoritesContainer,
  MainContent,
  TitleContainer,
  Title,
  MoviesGrid,
  EmptyState,
  EmptyTitle,
  EmptyText,
  LoadingContainer,
  ErrorContainer,
  ShareContainer,
  ShareTitle,
  ShareInputContainer,
  ShareInput,
  CopyButton
} from './styles';


const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();
  const { favorites, isLoading, error, loadFavorites, generateShareToken, currentPage, totalPages } = useFavorites();
  const { isAuthenticated } = useAuth();
  const { searchMovies, clearSearch } = useMovies();
  const { showSuccess, showError, showInfo } = useToast();
  const [shareUrl, setShareUrl] = useState<string>('');
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadFavorites();
      // Gerar token de compartilhamento automaticamente
      generateShareLink();
    }
  }, [isAuthenticated, loadFavorites]);

  const generateShareLink = async () => {
    if (shareUrl) return; // Se já existe, não gerar novamente
    
    setIsGeneratingLink(true);
    try {
      const token = await generateShareToken();
      const newShareUrl = `${window.location.origin}/shared/${token}`;
      setShareUrl(newShareUrl);
      showInfo('Link de compartilhamento gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar link de compartilhamento:', error);
      showError('Erro ao gerar link de compartilhamento');
    } finally {
      setIsGeneratingLink(false);
    }
  };

  const handleMovieClick = (movie: any) => {
    window.location.href = `/movie/${movie.id}`;
  };


  const handleSearch = (query: string) => {
    if (query.trim()) {
      searchMovies(query);
      navigate('/');
    }
  };

  const handleClearSearch = () => {
    clearSearch();
    navigate('/');
  };

  const handleCopyLink = async () => {
    if (!shareUrl) return;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      showSuccess('Link copiado para a área de transferência!');
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      showError('Erro ao copiar link');
    }
  };

  const handlePageChange = (page: number) => {
    loadFavorites(page);
  };

  if (!isAuthenticated) {
    return (
      <FavoritesContainer>
        <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
        <MainContent>
          <EmptyState>
            <EmptyTitle>Você precisa estar logado</EmptyTitle>
            <EmptyText>Faça login para ver seus favoritos</EmptyText>
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '/login'}
            >
              Fazer Login
            </Button>
          </EmptyState>
        </MainContent>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer>
      <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />

      <MainContent>
        <TitleContainer>
          <Title>Meus Favoritos ({favorites.length})</Title>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            disabled={isLoading}
          />
        </TitleContainer>
        
        {favorites.length > 0 && (
          <ShareContainer>
            <ShareTitle>
              <Share fontSize="small" />
              Compartilhar Lista de Favoritos
            </ShareTitle>
            <ShareInputContainer>
              <ShareInput
                type="text"
                value={shareUrl}
                placeholder={isGeneratingLink ? 'Gerando link...' : 'Carregando link de compartilhamento...'}
                readOnly
                disabled
              />
              <CopyButton
                onClick={handleCopyLink}
                disabled={!shareUrl || isGeneratingLink}
              >
                <ContentCopy fontSize="small" />
                {isGeneratingLink ? 'Gerando...' : 'Copiar'}
              </CopyButton>
            </ShareInputContainer>
          </ShareContainer>
        )}
        
        {error && (
          <ErrorContainer>
            {error}
          </ErrorContainer>
        )}

        {isLoading ? (
          <LoadingContainer>
            Carregando favoritos...
          </LoadingContainer>
        ) : favorites.length === 0 ? (
          <EmptyState>
            <EmptyTitle>Nenhum filme favorito ainda</EmptyTitle>
            <EmptyText>Adicione filmes aos seus favoritos para vê-los aqui</EmptyText>
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '/'}
            >
              Explorar Filmes
            </Button>
          </EmptyState>
        ) : (
          <MoviesGrid>
            {favorites.map((favorite) => (
              <MovieCard
                key={favorite.id}
                movie={{
                  id: favorite.tmdb_id || favorite.id,
                  title: favorite.title,
                  overview: favorite.overview || '',
                  poster_path: favorite.poster_path,
                  release_date: favorite.release_date || '',
                  vote_average: favorite.vote_average || 0,
                  vote_count: favorite.vote_count || 0,
                  backdrop_path: null,
                }}
                onClick={handleMovieClick}
              />
            ))}
          </MoviesGrid>
        )}
      </MainContent>
    </FavoritesContainer>
  );
};

export default FavoritesPage;
