import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShortMovieInfo } from '../../shared/types';
import { API_URL } from '../../shared/constants/api';

interface FetchFilmsResponse {
  search_result: ShortMovieInfo[];
  total_pages: number;
}

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    fetchFilms: builder.query<FetchFilmsResponse, Record<string, string>>({
      query: (params) => ({
        url: 'search',
        params,
      }),
    }),
    rateMovie: builder.mutation<{ token: string }, { movieId: string, user_rate: number }>({
      query: ({ movieId, user_rate }) => {
        const token = localStorage.getItem('token');
        return {
          url: 'rateMovie',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: { movieId, user_rate },
        };
      },
    }),
  }),
});

export const { useFetchFilmsQuery, useRateMovieMutation } = filmsApi;
