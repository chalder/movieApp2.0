import React from 'react';

import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Grid from './Grid';
import MovieThumb from './MovieThumb';
import LoadMoreButton from './LoadMoreButton';
import Spinner from './Spinner';

const Home = () => (
    <>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreButton />
    </>
)
export default Home