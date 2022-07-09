import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { API_URL, API_TOKEN, API_IMG } from '../../contants/api';

import "./style.css";

export default function MovieCard({ movie }) {
    const navigate = useNavigate();

    const [movieGenres, setMovieGenres] = useState();

    const getMovieGenres = async (genreIds) => {
        const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_TOKEN}`);
        const data = await res.json();

        return data.genres.filter(genre => {
            if (genreIds.includes(genre.id)) {
                return genre;
            }
        });
    }

    const handleCardClick = () => {
        navigate("/movie/" + movie.id);
    }

    useEffect(() => {
        (async () => {
            const genres = await getMovieGenres(movie.genre_ids);
            
            setMovieGenres(genres);
        })();
    }, []);

    return (
        <div className='movie-card' onClick={handleCardClick}>
            <img src={API_IMG + movie.poster_path} alt={movie.original_title} />
            <div className='movie-card-details'>
                <h6 className='movie-title'>{movie.original_title}</h6>
                <p className='movie-genres'>
                    {movieGenres?.map((genre, index) => {
                        return genre.name + (index !== movieGenres.length - 1 ? ", " : "");
                    })}
                </p>
                <div className='movie-stars-and-release'>
                    <div className='movie-vote-avg'>
                        <FaStar />
                        <span>{movie.vote_average}</span>
                    </div>
                    <span className='movie-release-date'>{movie.release_date}</span>
                </div>
            </div>
        </div>
    );
}
