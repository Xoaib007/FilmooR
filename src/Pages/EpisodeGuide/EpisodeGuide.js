import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EpisodeGuide = () => {
    const showDetails = useLoaderData();

    const [season, setSeason] = useState(1);

    const { data: episodes = [], isFetching} = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/${showDetails.id}/season/${season}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    if (isFetching) {
        return <p>Loading</p>
    }

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex justify-center'>
                <img className='w-[200px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${showDetails.poster_path}`} alt='' />

                <div className='ml-20 flex flex-col justify-center'>
                    <p className=' text-5xl font-bold'>{showDetails.name}</p>
                    <p className=' text-2xl font-bold mt-10'>({showDetails.first_air_date.slice(0, 4)}-{showDetails.last_air_date.slice(0, 4)})</p>
                </div>
            </div>
            
            <div className='mt-20'>
                <p className='text-xl font-bold border-b-4 border-yellow-300 w-fit p-2 mb-8 mx-auto'>Season</p>
                {
                    showDetails?.seasons?.map( season =>
                        <label key={season.id}><button onClick={()=>setSeason(season.season_number)} className="bg-yellow-300 rounded-full w-10 h-10 mx-5 text-black border-2 border-white">{season.season_number}</button></label>
                    )
                }
                {/* <EpisodeStack show={showDetails.id} seasonNumber={season}/> */}
                <p>{episodes.name}</p>
            </div>
        </div>
    );
};

export default EpisodeGuide;