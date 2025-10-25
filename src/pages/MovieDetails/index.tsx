import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies';
import { useFavoritesWithToast } from '../../hooks/useFavoritesWithToast';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/ui/Button';
import Header from '../../components/Header';
import {
  MovieDetailsContainer,
  MainContent,
  MovieCard,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieOverview,
  MovieDetails,
  DetailItem,
  DetailLabel,
  DetailValue,
  LoadingContainer,
  ErrorContainer,
  ActionButtons
} from './styles';


const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentMovie, isLoading, error, getMovieDetails, searchMovies, clearSearch } = useMovies();
  const { toggleFavorite, isFavorite, loadFavorites } = useFavoritesWithToast();
  const { isAuthenticated: userIsAuthenticated } = useAuth();

  useEffect(() => {
    if (userIsAuthenticated) {
      loadFavorites();
    }
  }, [userIsAuthenticated, loadFavorites]);

  useEffect(() => {
    if (id) {
      getMovieDetails(parseInt(id));
    }
  }, [id, getMovieDetails]);


  const handleToggleFavorite = async () => {
    if (!userIsAuthenticated) {
      navigate('/login');
      return;
    }
    if (currentMovie) {
      try {
        await toggleFavorite(currentMovie);
        // Recarregar favoritos para atualizar o estado
        await loadFavorites();
      } catch (error) {
        // Error is already handled by the toast in the hook
      }
    }
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

  if (isLoading) {
    return (
      <MovieDetailsContainer>
        <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
        <MainContent>
          <LoadingContainer>
            Carregando detalhes do filme...
          </LoadingContainer>
        </MainContent>
      </MovieDetailsContainer>
    );
  }

  if (error || !currentMovie) {
    return (
      <MovieDetailsContainer>
        <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
        <MainContent>
          <ErrorContainer>
            {error || 'Filme não encontrado'}
          </ErrorContainer>
          <Button 
            variant="primary" 
            onClick={() => navigate('/')}
          >
            Voltar para Home
          </Button>
        </MainContent>
      </MovieDetailsContainer>
    );
  }

  return (
    <MovieDetailsContainer>
      <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />

      <MainContent>
        <MovieCard>
          <MoviePoster
            src={currentMovie.poster_path ? `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image'}
            alt={currentMovie.title}
          />
          
          <MovieInfo>
            <MovieTitle>{currentMovie.title}</MovieTitle>
            <MovieOverview>{currentMovie.overview}</MovieOverview>
            
            <MovieDetails>
              <DetailItem>
                <DetailLabel>Avaliação:</DetailLabel>
                <DetailValue>{currentMovie.vote_average.toFixed(1)}/10</DetailValue>
              </DetailItem>
              
              <DetailItem>
                <DetailLabel>Data de Lançamento:</DetailLabel>
                <DetailValue>{new Date(currentMovie.release_date).toLocaleDateString('pt-BR')}</DetailValue>
              </DetailItem>
              
              {currentMovie.runtime && (
                <DetailItem>
                  <DetailLabel>Duração:</DetailLabel>
                  <DetailValue>{currentMovie.runtime} minutos</DetailValue>
                </DetailItem>
              )}
              
              {currentMovie.genres && currentMovie.genres.length > 0 && (
                <DetailItem>
                  <DetailLabel>Gêneros:</DetailLabel>
                  <DetailValue>{currentMovie.genres.map(genre => genre.name).join(', ')}</DetailValue>
                </DetailItem>
              )}
            </MovieDetails>

            <ActionButtons>
              {userIsAuthenticated && (
                <Button 
                  variant="primary"
                  onClick={handleToggleFavorite}
                >
                  {isFavorite(currentMovie.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                </Button>
              )}
            </ActionButtons>
          </MovieInfo>
        </MovieCard>
      </MainContent>
    </MovieDetailsContainer>
  );
};

export default MovieDetailsPage;
