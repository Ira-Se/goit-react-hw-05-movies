import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const params = new URLSearchParams({
    api_key: '6bcb4df6f6ccae49c8637c73c0f829b9',
    language: 'en-US',
    // q: quary,
    // image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: true,
    // per_page: 12,
    // page,
  });
  const response = await axios.get(`/trending/movie/day?${params}`);
  console.log(response.data.results);
  return response.data.results;
};
