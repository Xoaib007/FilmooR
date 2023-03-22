import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EpisodeGuide = () => {
    const showDetails = useLoaderData();

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex justify-center'>
                <img className='w-[200px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${showDetails.poster_path}`} alt='' />

                <div className='ml-20 flex flex-col justify-center'>
                    <p className=' text-5xl font-bold'>{showDetails.name}</p>
                    <p className=' text-2xl font-bold mt-10'>({showDetails.first_air_date.slice(0, 4)}-{showDetails.last_air_date.slice(0, 4)})</p>
                </div>
            </div>

            <p className='text-white'>{showDetails.number_of_seasons}</p>
            <p className='text-white'>{showDetails.number_of_episodes}</p>
            
            <div>
                <p>Season: </p>
                {
                    showDetails?.seasons?.map( season =>
                        <button key={season.id}>{season.season_number}</button>
                    )
                }
            </div>
        </div>
    );
};

export default EpisodeGuide;