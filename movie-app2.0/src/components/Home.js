import React, { useState, useEffect } from 'react';

import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
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

    useEffect(() => {
        async function getMovieData() {
            console.log("calling fetch movies");
            setLoading(true);
            try {
                const data = await fetchMovies();
                console.log(data);
                setState(prev => ({
                    ...prev,
                    movies: [...data.results],
                    heroImage: prev.HeroImage || data.results[0],
                    currentPage: data.page,
                    totalPages: data.total_pages
                }))
                console.log(">>>>>>>>>>>>>backdrop_path", state.heroImage.backdrop_path)
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
        }
        getMovieData();

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
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreButton />
        </>
    )
}
export default Home