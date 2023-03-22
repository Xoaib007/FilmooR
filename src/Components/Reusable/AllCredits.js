import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCredits = () => {

    const credits = useLoaderData();

    return (
        <div className='min-h-screen bg-black text-white grid grid-cols-5 mx-32 gap-10 mt-20'>
            {
                credits?.cast?.map(credit =>
                    <div key={credit.id} className=' h-[450px] w-[180px] text-white bg-gray-900 rounded-xl'>
                        <Link to={`/cast/${credit.id}`}>
                            {
                                credit.profile_path ?
                                <img className='w-[180px] h-[270px] rounded-t-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${credit.profile_path}`} alt='' />
                                :
                                <div className='w-[180px] h-[270px]'>
                                   <FontAwesomeIcon className='w-[140px] h-[230px] mx-auto mt-5 rounded-t-xl text-gray-400' icon={faUser}/> 
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
        </div>
    );
};

export default AllCredits;