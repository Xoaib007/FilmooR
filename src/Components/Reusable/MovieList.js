import React, { useEffect, useState } from 'react';
import { request } from '../../api/request';
import TMDB from '../../api/TMDB';
import MovieCard from './MovieCard';

const MovieList = ({fetch}) => {

    const [movies, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await TMDB.get(request[fetch])
            setMovie(data)
        }
        fetchMovie()
    }, [fetch])
    return (
        <div className='flex gap-7 overflow-x-auto pb-10'>
            {
                movies?.results?.map((movie, i) =>
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        voteCount={movie.vote_count}
                    />

                )
            }

        </div>
    );
};

export default MovieList;