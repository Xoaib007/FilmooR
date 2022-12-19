import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMovie = () => {
    const movie = useLoaderData();

    return (
        <div className='min-h-screen text-white'>
            <p>{movie.title || movie.name}</p>
        </div>
    );
};

export default SingleMovie;