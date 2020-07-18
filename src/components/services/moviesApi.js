import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchMovies = () => {
    const trendingParams = `trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(trendingParams).then(response => response.data);
}

export const fetchSearch = query => {
    const searchParams = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    return axios.get(searchParams).then(response => response);
};
  
export const fetchMovieDetails = id => {
    const detailsParams = `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    return axios.get(detailsParams).then(response => response);
};
  
export const fetchCastInformation = id => {
    const castParams = `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    return axios.get(castParams).then(response => response);
};
  
export const fetchReviews = id => {
    const reviewsParams = `movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    return axios.get(reviewsParams).then(response => response);
};