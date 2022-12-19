import React, { useEffect, useState } from 'react';
import { request } from '../../api/request';
import TMDB from '../../api/TMDB';
import MovieCard from './MovieCard';

const MovieList = ({ fetch }) => {

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
                movies?.results?.map((movie) =>
                    <MovieCard key={movie.id} {...movie} />
                )
            }
            
            <div className='absolute right-0 w-16 h-[490px] mr-36'>
                <div className='h-full w-full bg-gradient-to-r from-black/[0%] to-black/[100%]' />
            </div>
        </div>
    );
};

export default MovieList;