import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Credits = ({ id }) => {
    const { data: credits = [] } = useQuery({
        queryKey: ['credits'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })


    const slicedCredits = credits?.cast?.slice(0, 9);

    return (
        <div className='flex gap-7 overflow-x-auto pb-10'>
            {
                slicedCredits?.map(credit =>
                    <div key={credit.id} className=' h-[450px] text-white bg-gray-900 rounded-xl relative'>
                        <Link>
                            {
                                credit.profile_path ?
                                    <img className='w-[180px] h-[270px] rounded-t-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${credit.profile_path}`} alt='' />
                                    :
                                    <div className='w-[180px] h-[270px]'>
                                        <FontAwesomeIcon className='w-[140px] h-[230px] mx-auto mt-5 rounded-t-xl text-gray-400' icon={faUser} />
                                    </div>

                            }
                            <div className='w-[180px] text-left p-4'>
                                <p className=' text-left text-lg font-bold rounded-t-xl h-16'>{credit.name}</p>
                                <p>{credit.character}</p>
                            </div>
                        </Link>
                    </div>
                )
            }

            <div className='absolute right-0 w-12 h-[490px] mr-60'>
                <div className='h-full w-full bg-gradient-to-r from-black/[0%] to-black/[100%]' />
            </div>

            <Link className='h-[450px] w-full text-white bg-gray-900 rounded-xl'>
                <Link to={`/allcredits/${id}`} className=' px-20 bg-gray-900 flex'>
                    <p className='w-20 text-2xl mt-44'>See All</p>
                    <FontAwesomeIcon className='w-7 h-7 mt-44' icon={faAngleRight} />
                </Link>
            </Link>
        </div>
    );
};

export default Credits;