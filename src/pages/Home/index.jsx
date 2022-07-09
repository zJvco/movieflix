import React, { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';

import { API_URL, API_TOKEN } from '../../contants/api';

import "./style.css";

export default function Home() {
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/movie/top_rated?api_key=${API_TOKEN}`);
      const data = await res.json();

      setTopRated(data.results);
    })();
  }, []);

  return (
    <>
      <h2>Top Rated Movies</h2>
      <div className='movies-container'>
        {topRated?.map(movie => {
          return (
            <MovieCard movie={movie} key={movie.id} />
          );
        })}
      </div>
    </>
  );
}
