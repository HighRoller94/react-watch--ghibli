import React, {useEffect, useState}from 'react';

// COMPONENTS

import Movies from '../components/Movies';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      // Await the fetch movies function and set movies to setMovies state, then trim down to 5
        const getMovies = async () => {
            const moviesFromApiEndpoint = await fetchMovies();
            setMovies(moviesFromApiEndpoint.slice(0,5));
        }
    
        getMovies();
    }, [])

    // Fetch movies from API endpoint
    const fetchMovies = async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const data = await response.json();
    
        return data;
    }

    return (
        <Movies movies={movies} />
    )
}

export default Home