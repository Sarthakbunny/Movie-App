import React from 'react';

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (rate) => {
    if(rate >= 8)
        return 'green';
    else if(rate >= 6)
        return "orange";
    else
        return "red";
}

const Movie = ({title, poster_path, overview, vote_average}) => {
    return(
        <div className="movie">
            <img src={IMAGES_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;