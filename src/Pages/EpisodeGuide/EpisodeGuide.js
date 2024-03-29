import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import empty from './../../empty.jpg';

const EpisodeGuide = () => {
    const showDetails = useLoaderData();

    const [season, setSeason] = useState(1);

    const { data: episodes = [], isFetching, refetch } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/${showDetails.id}/season/${season}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    if (isFetching) {
        return <p className='text-white'>Loading</p>
    }

    const changeSeason = (season) => {
        setSeason(season);
        refetch();
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
                    showDetails?.seasons?.map(season =>
                        <label key={season.id}><button onClick={() => changeSeason(season.season_number)} className="bg-yellow-300 rounded-full w-10 h-10 mx-5 text-black border-2 border-white">{season.season_number}</button></label>
                    )
                }
                {/* <EpisodeStack show={showDetails.id} seasonNumber={season}/> */}

                {/* Episode stack */}
                <div className='mt-20'>

                    <div className='text-center mb-10'>
                        <p className='text-gray-500'>Season: {episodes.season_number}</p>
                        <p className='text-3xl font-bold'>{episodes.name}</p>
                    </div>

                    {
                        episodes?.episodes?.map(episode =>
                            <div key={episode.id} className=''>
                                <div className='flex mb-5 mx-32 h-48'>

                                    {
                                        episode.still_path == null ?
                                            <img className='w-32 rounded-l-xl' src={empty} alt='' />
                                            :
                                            <img className='w-32 rounded-l-xl' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${episode.still_path}`} alt='' />
                                    }

                                    <div className='flex items-center text-left p-5 border-y-2 border-r-2 border-gray-500 rounded-r-xl w-[800px]'>
                                        <div className='w-[500px]'>
                                            <p className='text-gray-300'>Episode: {episode.episode_number}</p>
                                            <p className='text-2xl font-bold'>{episode.name}</p>
                                            {
                                                episode.overview.length < 220 ?
                                                    <p className='text-justify text-gray-400'>{episode.overview}</p>
                                                    :
                                                    <p className='text-justify text-gray-400'>{episode.overview.slice(0, 220)}...</p>
                                            }
                                        </div>

                                        <div className='flex ml-10'>
                                            <FontAwesomeIcon className='w-5 h-5' icon={faStar} />
                                            <p className='text-2xl font-semibold'>{episode.vote_average}<span className='text-xl font-normal text-gray-400 '>/10 ({episode.vote_count})</span></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default EpisodeGuide;