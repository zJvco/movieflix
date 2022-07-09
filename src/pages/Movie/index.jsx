import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import { API_IMG, API_TOKEN, API_URL } from '../../contants/api';

import { formatCurrency } from '../../utils/currencyHandler';

import "./style.css";

export default function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_TOKEN}`);
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.status_message);
                }

                setMovie(data);
            } catch (error) {
                console.error(error.message);
            }
        })();
    }, [id]);

    return (
        <div className='movie-details-container'>
            <section className='left'>
                <img src={API_IMG + movie?.poster_path} alt="" />
            </section>
            <section className="right">
                <h3>{movie?.original_title}</h3>
                <div className='group'>
                    <span className='movie-vote-avg'>
                        <FaStar />
                        <span>{movie?.vote_average}</span>
                    </span>
                    <span className='movie-release-date'>{movie?.release_date}</span>
                </div>
                <p>{movie?.overview}</p>
                <div className='revenue-content'>
                    <h5>Revenue:</h5>
                    <p>{formatCurrency(movie?.revenue || "")}</p>
                </div>
            </section>
        </div>
    )
}
