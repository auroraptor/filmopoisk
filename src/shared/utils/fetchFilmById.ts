import { FullMovieInfo } from "../types";

const API_URL = 'http://localhost:3030/api/v1';

export async function fetchFilmById(id: string) {
  const response = await fetch(`${API_URL}/movie/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch film data');
  }
  const data: FullMovieInfo = await response.json();
  return data;
}