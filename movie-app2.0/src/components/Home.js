import React, { useState, useEffect } from 'react';

import {
    API_BASE_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    POPULAR_MOVIES_URL,
    SEARCH_MOVIES_URL
} from '../config/apiConfig';


import Header from './Header';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Grid from './Grid';
import MovieThumb from './MovieThumb';
import LoadMoreButton from './LoadMoreButton';
import Spinner from './Spinner';
import { fetchMovies } from '../api/api';

import '../css/home.css'

const Home = () => {
    const [state, setState] = useState({
        movies: [],
        heroImage: '',
        currentPage: 0,
        totalPages: 0
    });
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");


    const getMovieData = async (url) => {
        console.log("Chiranjib: calling fetch movies");
        const isMoreLoad = url.search('page') !== -1;

        setLoading(true);
        try {
            const data = await fetchMovies(url);
            console.log(data);
            setState(prev => ({
                ...prev,
                movies: isMoreLoad ?
                    [...prev.movies, ...data.results] :
                    [...data.results],
                heroImage: prev.heroImage || data.results[0],
                currentPage: data.page,
                totalPages: data.total_pages
            }))
        } catch (e) {
            console.log(e)
        }
        setLoading(false);
    }

    const loadMoreMovies = () => {
        const searchEndPoint = `${API_BASE_URL}${SEARCH_MOVIES_URL}?api_key=${API_KEY}&query=${searchText}&page=${state.currentPage + 1}`;
        const popularEndPoint = `${API_BASE_URL}${POPULAR_MOVIES_URL}?api_key=${API_KEY}&page=${state.currentPage + 1}`;
        const endpoint = searchText ? searchEndPoint : popularEndPoint;
        getMovieData(endpoint);
    }

    useEffect(() => {
        getMovieData(`${API_BASE_URL}${POPULAR_MOVIES_URL}?api_key=${API_KEY}`);
    }, []);

    if (!state.movies[0]) return <Spinner />;

    return (
        <>
            <Header />
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
            />
            <SearchBar />
            <Grid header={searchText ? 'Search Result' : 'Popular Movies'}>
                {
                    state.movies.map(m => (
                        <MovieThumb
                            id={m.id}
                            name={m.title}
                            image={m.poster_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${m.poster_path}` : 'No Image'}
                            movieId={m.id}
                            movieName={m.original_title}>
                            clickable
                        </MovieThumb>
                    ))

                }
            </Grid>
            {loading && <Spinner />}
            {state.currentPage < state.totalPages && !loading && (
                <LoadMoreButton text="Load More" cbk={loadMoreMovies} />
            )}
        </>
    )
}
export default Home