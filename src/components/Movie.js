import React from 'react';
import { Link } from 'react-router-dom';
import totoroSticker from '../assets/images/totoroSticker.png';

const Movie = ({ movie }) => {
    return (
        <div className="movie__Container">
                <img className="movie__Image" src={movie.image} />
                <div className="movie__Text">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <Link 
                        to={`${movie.title}`}
                        state={{ movie: movie }}
                    >
                        <button className="btn__SeeMore">See More</button>
                    </Link>
                    <img className="sticker__PNG" src={totoroSticker} />
                </div>
        </div>
    )
}

export default Movie