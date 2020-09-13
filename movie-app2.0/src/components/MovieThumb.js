import React from 'react'

const MovieThumb = ({ image, id, clickable }) => (
    <div className="movie-thumb">
        {clickable ?
            <img src={image} className='clickable' /> :
            <img src={image} />
        }

    </div>

)
export default MovieThumb;


