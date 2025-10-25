import { z } from 'zod';

// Schemas de validação
export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  backdrop_path: z.string().nullable(),
});

export const movieDetailsSchema = movieSchema.extend({
  runtime: z.number().optional(),
  genres: z.array(z.object({
    id: z.number(),
    name: z.string(),
  })).optional(),
  production_companies: z.array(z.object({
    name: z.string(),
  })).optional(),
  production_countries: z.array(z.object({
    name: z.string(),
  })).optional(),
  spoken_languages: z.array(z.object({
    name: z.string(),
  })).optional(),
  budget: z.number().optional(),
  revenue: z.number().optional(),
});

export const searchResponseSchema = z.object({
  results: z.array(movieSchema),
  total_pages: z.number(),
  total_results: z.number(),
  page: z.number(),
});

// Tipos TypeScript inferidos dos schemas
export type Movie = z.infer<typeof movieSchema>;
export type MovieDetails = z.infer<typeof movieDetailsSchema>;
export type SearchResponse = z.infer<typeof searchResponseSchema>;