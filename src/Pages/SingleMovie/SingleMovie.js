import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMovie = () => {
    const movie = useLoaderData();

    return (
        <div className='min-h-screen text-white'>
            <div className='flex h-96 mx-32'>
                <img className='w-1/2' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt='' />
                <div>
                    <p>{movie.title}</p>X
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;