import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const params = new URLSearchParams({
  api_key: '6bcb4df6f6ccae49c8637c73c0f829b9',
  language: 'en-US',
});

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?${params}`);
  console.log(response.data.results);
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?${params}`);
  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?${params}`);
  return response.data.cast;
};
