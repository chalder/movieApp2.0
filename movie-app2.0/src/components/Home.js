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
    const [searchText, setSearchText] = useState("");

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
                    heroImage: prev.HeroImage || data.results[1],
                    currentPage: data.page,
                    totalPages: data.total_pages
                }))
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
            <LoadMoreButton />
        </>
    )
}
export default Home