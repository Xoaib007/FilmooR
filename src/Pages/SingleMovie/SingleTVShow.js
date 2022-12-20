import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleTVShow = () => {
    const show = useLoaderData();

    return (
        <div className='min-h-screen text-white'>
            <p>{show.name}</p>
        </div>
    );
};

export default SingleTVShow;