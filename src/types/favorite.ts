import { z } from 'zod';

// Schemas de validação
export const favoriteMovieSchema = z.object({
  id: z.number(),
  tmdb_id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  overview: z.string().nullable(),
  release_date: z.string().nullable(),
  vote_average: z.number().nullable(),
  vote_count: z.number().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const addFavoriteSchema = z.object({
  tmdb_id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  overview: z.string(),
  rating: z.number(),
  release_date: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

// Tipos TypeScript inferidos dos schemas
export type FavoriteMovie = z.infer<typeof favoriteMovieSchema>;
export type AddFavoriteRequest = z.infer<typeof addFavoriteSchema>;
