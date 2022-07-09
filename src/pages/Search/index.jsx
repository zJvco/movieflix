import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';

import { API_TOKEN, API_URL } from '../../contants/api';

import "./style.css";

export default function Search() {
    const [searchParams] = useSearchParams();

    const [searchedMovies, setSearchedMovies] = useState();

    const targetValue = searchParams.get("q");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${API_URL}/search/movie?query=${targetValue}&api_key=${API_TOKEN}`);
                const data = await res.json();
                
                if (!res.ok) {
                    throw new Error(data.status_message);
                }

                setSearchedMovies(data.results);
            } catch (error) {
                console.error(error.message);
            }
        })();
    }, [targetValue]);

    return (
        <>
            <h2>You are looking for: {targetValue}</h2>
            <div className='movies-container'>
                {searchedMovies?.map(movie => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </div>
        </>
    );
}
