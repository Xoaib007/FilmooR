import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMovie = () => {
    const movie = useLoaderData();

    return (
        <div>
            <p>{movie.title}</p>
        </div>
    );
};

export default SingleMovie;