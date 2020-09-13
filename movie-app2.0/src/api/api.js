import { mock_popular_movies } from '../mockData/mockMovieData';

const fetchMovies = async (url) => {
    // const res = await fetch(url);
    // const data = await res.json();
    // return data
    return mock_popular_movies; // enable this while debugging/developing
}

export { fetchMovies }
