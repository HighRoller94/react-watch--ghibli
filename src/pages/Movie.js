import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Movie = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Bring in the movie (props) from the Link component
    const movie = location.state.movie

    return (
        <div className="movie__Page">
            <div className="movie__About">
                <img className="movie__PageImage" src={movie.movie_banner} />
                <h1 className="movie__Header">{movie.title}</h1>
                <div className="movie__Information">
                    <h2>Director: {movie.director}</h2>
                    <p>Release Date: {movie.release_date}</p>
                </div>
                <button className="back__BTN" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default Movie