import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShortMovieInfo } from '../../shared/types';
import { API_URL } from '../../shared/constants/api';

export interface FetchFilmsResponse {
  search_result: ShortMovieInfo[];
  total_pages: number;
}

interface RateMovieRequest {
  movieId: string;
  user_rate: number;
}

interface RateMovieResponse {
  token: string;
}

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}`,prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }, }),
  endpoints: (builder) => ({
    fetchFilms: builder.query<FetchFilmsResponse, Record<string, string>>({
      query: (params) => ({
        url: 'search',
        params,
      }),
    }),
    rateMovie: builder.mutation<RateMovieResponse, RateMovieRequest>({
      query: (body) => ({
        url: 'rateMovie',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useFetchFilmsQuery, useRateMovieMutation } = filmsApi;

export type UseFetchFilmsQuery = ReturnType<typeof useFetchFilmsQuery>;
export type UseRateMovieMutation = ReturnType<typeof useRateMovieMutation>;
