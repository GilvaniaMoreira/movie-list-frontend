import React from 'react';
import type { Movie } from '../../types/movie';
import {
  MovieCardContainer,
  MovieImage,
  RatingContainer,
  CardContent,
  MovieTitle,
  MovieOverview,
  MovieYear
} from './styles';

interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onClick,
}) => {
  const getImageUrl = (posterPath: string | null) => {
    if (!posterPath) {
      return 'https://via.placeholder.com/300x450?text=No+Image';
    }
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  return (
    <MovieCardContainer onClick={handleCardClick} hover>
      <MovieImage imageUrl={getImageUrl(movie.poster_path)}>
        <RatingContainer>
          ⭐ {movie.vote_average.toFixed(1)}
        </RatingContainer>
      </MovieImage>

      <CardContent>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
        <MovieYear>
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </MovieYear>
      </CardContent>
    </MovieCardContainer>
  );
};

export default MovieCard;

