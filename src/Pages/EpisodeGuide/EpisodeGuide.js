import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EpisodeGuide = () => {
    const showDetails = useLoaderData();

    return (
        <div>
            <p className=' text-5xl font-bold mb-10 text-white'>{showDetails.name}</p>

            <p className='text-white'>{showDetails.number_of_seasons}</p>
            <p className='text-white'>{showDetails.number_of_episodes}</p>
        </div>
    );
};

export default EpisodeGuide;