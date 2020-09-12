import { API_BASE_URL, API_KEY } from '../config/apiConfig';
import { mock_popular_movies } from '../mockData/mockMovieData';
const POPULAR_MOVIES_URL = "/movie/popular";


const fetchMovies = async () => {
    const URL = API_BASE_URL + POPULAR_MOVIES_URL + '?api_key=' + API_KEY;
    // const res = await fetch(URL);
    // const data = await res.json();
    // return data
    return mock_popular_movies;
}

export { fetchMovies }
