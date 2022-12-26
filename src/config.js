export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "00d6e8bb848cf1aab363de510f7d4d22";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDatail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieInfo: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (page, query) =>
    `${tmdbEndpointSearch}?api_key=${apiKey}&page=${page}&query=${query}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
};
