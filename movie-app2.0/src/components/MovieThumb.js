import React from 'react'

const MovieThumb = ({ image, id, clickable }) => (
    <div className="movie-thumb">
        <img src={image} />
    </div>

)
export default MovieThumb;


