import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMovie = () => {
    const movie = useLoaderData();

    return (
        <div className='min-h-screen text-white'>
            <div className='flex h-[600px] mx-32'>
                <img className='w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt='' />
                {/* <div className='ml-10'>
                    <p className='text-xl font-bold mb-10'>{movie.title}</p>
                    <p className='text-left'>{movie.overview}</p>
                </div> */}
            </div>
        </div>
    );
};

export default SingleMovie;