const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "365c9e307a9b0a85d390e1b8ecf0d8b3";
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';


//We can get all configs from config API
//https://api.themoviedb.org/3/configuration?api_key=844dba0bfd8f3a4f3799f6130ef9e335
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';
const LOGO_SIZE = 'w300';

// To get any image we need IMAGE_BASE_URL/BACKDROP_SIZE/PATH

export {
    API_BASE_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    LOGO_SIZE
};
