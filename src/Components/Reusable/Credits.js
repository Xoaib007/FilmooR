import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Credits = ({ id, type }) => {
    const { data: credits = [] } = useQuery({
        queryKey: ['credits'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })


    const slicedCredits = credits?.cast?.slice(0, 9);

    return (
        <div className='flex gap-7 overflow-x-auto pb-10'>
            {
                slicedCredits?.map(credit =>
                    <div key={credit.id} className=' h-[450px] text-white bg-gray-900 rounded-xl relative'>
                        <Link to={`/cast/${credit.id}`}>
                            {
                                credit.profile_path ?
                                    <img className='w-[180px] h-[270px] rounded-t-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${credit.profile_path}`} alt='' />
                                    :
                                    <div className='w-[180px] h-[270px]'>
                                        <FontAwesomeIcon className='w-[140px] h-[230px] mx-auto mt-5 rounded-t-xl text-gray-400' icon={faUser} />
                                    </div>

                            }
                            <div className='w-[180px] text-left p-4'>
                                <p className=' text-left text-xl font-bold rounded-t-xl h-16'>{credit.name}</p>
                                <p className='text-gray-400'>{credit.character}</p>
                            </div>
                        </Link>
                    </div>
                )
            }

            <div className='absolute right-0 w-12 h-[490px] mr-60'>
                <div className='h-full w-full bg-gradient-to-r from-black/[0%] to-black/[100%]' />
            </div>

            {
                credits?.cast?.length > 9 ?
                    <Link to={`/allcredits/${type}/${id}`} className='h-[450px] w-[180px] text-white bg-gray-900 rounded-xl flex mr-10'>
                        <div className=' pl-5 bg-gray-900 mt-[200px] flex'>
                            <p className='w-20 text-2xl'>See All</p>
                            <FontAwesomeIcon className='w-7 h-7' icon={faAngleRight} />
                        </div>
                    </Link>
                    :
                    <></>
            }
        </div>
    );
};

export default Credits;