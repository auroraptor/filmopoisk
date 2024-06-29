import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShortMovieInfo } from '../../shared/types';
import { API_URL } from '../../shared/constants/api';

export interface FetchFilmsResponse { // Экспортируем интерфейс
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
  }),
});

export const { useFetchFilmsQuery } = filmsApi;
export type UseFetchFilmsQuery = ReturnType<typeof useFetchFilmsQuery>;
