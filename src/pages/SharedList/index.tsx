import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import MovieCard from '../../components/MovieCard';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import {
  SharedListContainer,
  MainContent,
  TitleContainer,
  Title,
  OwnerInfo,
  OwnerName,
  MoviesGrid,
  LoadingContainer,
  ErrorContainer,
  EmptyState,
  EmptyTitle,
  EmptyText
} from './styles';

const SharedListPage: React.FC = () => {
  const { shareToken } = useParams<{ shareToken: string }>();
  const { getSharedList, isLoading, error } = useFavorites();
  const [sharedData, setSharedData] = useState<{ 
    owner: string; 
    results?: any[]; 
    page?: number; 
    total_pages?: number; 
    total_results?: number;
    movies?: any[]; // Fallback para estrutura antiga
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (shareToken) {
      loadSharedList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shareToken, currentPage]);

  const loadSharedList = async () => {
    if (!shareToken) return;
    
    try {
      const data = await getSharedList(shareToken, currentPage);
      console.log('Shared list data received:', data);
      setSharedData(data);
    } catch (error) {
      console.error('Erro ao carregar lista compartilhada:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    // Implementar busca se necessário
    console.log('Search:', query);
  };

  const handleClearSearch = () => {
    // Implementar limpeza se necessário
    console.log('Clear search');
  };

  const handleMovieClick = (movie: any) => {
    window.location.href = `/movie/${movie.id}`;
  };

  if (isLoading) {
    return (
      <SharedListContainer>
        <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
        <MainContent>
          <LoadingContainer>
            Carregando lista compartilhada...
          </LoadingContainer>
        </MainContent>
      </SharedListContainer>
    );
  }

  if (error) {
    return (
      <SharedListContainer>
        <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
        <MainContent>
          <ErrorContainer>
            {error}
          </ErrorContainer>
        </MainContent>
      </SharedListContainer>
    );
  }

  if (!sharedData) {
    return (
      <SharedListContainer>
        <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />
        <MainContent>
          <ErrorContainer>
            Lista não encontrada ou token inválido
          </ErrorContainer>
        </MainContent>
      </SharedListContainer>
    );
  }

  return (
    <SharedListContainer>
      <Header onSearch={handleSearch} onClearSearch={handleClearSearch} />

      <MainContent>
        <OwnerInfo>
          <OwnerName>Lista de Favoritos de {sharedData.owner}</OwnerName>
        </OwnerInfo>

        <TitleContainer>
          <Title>Filmes Favoritos ({sharedData.total_results || 0})</Title>
          <Pagination
            currentPage={sharedData.page || 1}
            totalPages={sharedData.total_pages || 1}
            onPageChange={handlePageChange}
            disabled={isLoading}
          />
        </TitleContainer>
        
        {((!sharedData.results && !sharedData.movies) || (sharedData.results?.length === 0 && sharedData.movies?.length === 0)) ? (
          <EmptyState>
            <EmptyTitle>Nenhum filme favorito</EmptyTitle>
            <EmptyText>Esta lista ainda não possui filmes favoritos</EmptyText>
          </EmptyState>
        ) : (
          <MoviesGrid>
            {(sharedData.results || sharedData.movies || []).map((movie: any) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={handleMovieClick}
              />
            ))}
          </MoviesGrid>
        )}
      </MainContent>
    </SharedListContainer>
  );
};

export default SharedListPage;
