import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const MovieCard = ({ imageUrl, title, rating, voteCount }) => {
    return (
        <div className='mb-20 text-white bg-gray-900 rounded-xl relative'>
            <img className='w-[180px] h-[270px] rounded-t-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${imageUrl}`} alt='' />
            <div className='w-[180px] text-left p-4'>
                <p className=' text-left font-bold rounded-t-xl'>{title}</p>
                <div className='mt-3'>
                    <p className='font-semibold'>{rating}</p>
                    <p>{voteCount}</p>
                </div>
            </div>
            
            <div className='bg-gray-700 absolute bottom-5 ml-3 flex p-2 rounded-lg'>
                    <FontAwesomeIcon icon={faBookmark} className='w-4 h-4 mr-2 mt-1'/>
                    <p>Add to watchlist</p>
                </div>
        </div>
    );
};

export default MovieCard;