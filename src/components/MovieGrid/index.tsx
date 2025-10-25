import React from 'react';
import { Box, Container, CircularProgress, Alert, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import MovieCard from '../MovieCard';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string | null;
}

interface MovieGridProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  onMovieClick: (movie: Movie) => void;
  emptyMessage?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({
  movies,
  loading,
  error,
  onMovieClick,
  emptyMessage = "Nenhum filme encontrado",
}) => {
  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  if (movies.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box textAlign="center" py={8}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {emptyMessage}
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ pt: 8 }}>
      <Container
        maxWidth={false}
        sx={{
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          width: '100%',
          maxWidth: '100%'
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            width: '100%'
          }}
        >
          {movies.map((movie) => (
            <Grid
              size={{
                xs: 6,     // 2 cards per row on mobile (320px+)
                sm: 4,     // 3 cards per row on small tablets (600px+)
                md: 3,     // 4 cards per row on medium screens (900px+)
                lg: 2.4,   // 5 cards per row on large screens (1200px+)
                xl: 2      // 6 cards per row on extra large screens (1536px+)
              }}
              sx={{
                display: 'flex',
                justifyContent: 'stretch',
                width: '100%'
              }}
              key={movie.id}
            >
              <MovieCard
                movie={movie}
                onClick={onMovieClick}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MovieGrid;
