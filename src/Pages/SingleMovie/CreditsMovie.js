import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CreditsMovie = ({ id }) => {
    const { data: credits = [] } = useQuery({
        queryKey: ['credits'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })


    const slicedCredits = credits?.cast?.slice(0, 9);

    return (
        <div className='flex gap-7 overflow-x-auto pb-10'>
            {
                slicedCredits?.map(credit =>
                    <div className=' h-[400px] text-white bg-gray-900 rounded-xl relative'>
                        <Link>
                            <img className='w-[180px] h-[270px] rounded-t-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${credit.profile_path}`} alt='' />
                            <div className='w-[180px] text-left p-4'>
                                <p className=' text-left text-lg font-bold rounded-t-xl h-16'>{credit.name}</p>
                                <p>{credit.character}</p>
                            </div>
                        </Link>
                    </div>
                )
            }

            <div className='absolute right-0 w-12 h-[490px] mr-36'>
                <div className='h-full w-full bg-gradient-to-r from-black/[0%] to-black/[100%]' />
            </div>

            
            <div className='h-[400px] w-44 bg-white'>
                <Link className='w-full text-white bg-gray-900 rounded-xl relative'>
                    <p>See All</p>
                </Link>
            </div>
        </div>
    );
};

export default CreditsMovie;