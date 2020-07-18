import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchMovies = () => {
    const trendingParams = `trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(trendingParams).then(response => response.data);
}

 