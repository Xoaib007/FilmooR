import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ poster_path, title,vote_average,name, vote_count, id }) => {

    return (

        <div className=' h-[490px] text-white bg-gray-900 rounded-xl relative'>
            <Link to={`/movie/${id}`}>
                <img className='w-[180px] h-[270px] rounded-t-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt='' />
                <div className='w-[180px] text-left p-4'>
                    <p className=' text-left text-lg font-bold rounded-t-xl h-16'>{title || name}</p>
                    <div className='mt-3'>
                        <div className='flex'>
                            <FontAwesomeIcon className='mt-1 mr-2' icon={faStar} />
                            <p className='text-lg font-semibold'>{vote_average}<span className='text-sm font-normal text-gray-400 '>/10</span></p>
                        </div>
                        <p className='text-sm font-normal text-gray-400 ml-7'>{vote_count}</p>
                    </div>
                </div>
            </Link>

            <button className=' bg-gray-700 absolute bottom-5 ml-3 flex p-2 rounded-lg '>
                <FontAwesomeIcon icon={faBookmark} className='w-4 h-4 mr-2 mt-1' />
                <p>Add to watchlist</p>
            </button>
        </div>
    );
};

export default MovieCard;