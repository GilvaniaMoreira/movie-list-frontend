import React, { useEffect } from 'react';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import {
  HomeContainer,
  MainContent,
  TitleContainer,
  Title,
  MoviesGrid,
  LoadingContainer,
  ErrorContainer
} from './styles';


const HomePage: React.FC = () => {
  const { 
    movies, 
    searchResults,
    isLoading, 
    error, 
    loadPopularMovies, 
    searchMovies,
    clearSearch,
    currentPage,
    totalPages,
    searchQuery
  } = useMovies();
  
  

  useEffect(() => {
    // Only load popular movies if there are no search results
    if (searchResults.length === 0) {
      loadPopularMovies();
    }
  }, [loadPopularMovies, searchResults.length]);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      searchMovies(query);
    } else {
      loadPopularMovies();
    }
  };

  const handleClearSearch = () => {
    clearSearch();
    loadPopularMovies();
  };

  const handleMovieClick = (movie: any) => {
    // Navegar para detalhes do filme
    window.location.href = `/movie/${movie.id}`;
  };

  const handlePageChange = (page: number) => {
    if (searchQuery) {
      searchMovies(searchQuery, page);
    } else {
      loadPopularMovies(page);
    }
  };


  return (
    <HomeContainer>
      <Header onSearch={handleSearch} onClearSearch={handleClearSearch}/>

      <MainContent>
        <TitleContainer>
          <Title>{searchResults.length > 0 ? 'Resultados da Busca' : 'Filmes Populares'}</Title>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            disabled={isLoading}
          />
        </TitleContainer>
        
        {error && (
          <ErrorContainer>
            {error}
          </ErrorContainer>
        )}

        {isLoading ? (
          <LoadingContainer>
            Carregando filmes...
          </LoadingContainer>
        ) : (
          <MoviesGrid>
            {(searchResults.length > 0 ? searchResults : movies).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={handleMovieClick}
              />
            ))}
          </MoviesGrid>
        )}
      </MainContent>
    </HomeContainer>
  );
};

export default HomePage;
