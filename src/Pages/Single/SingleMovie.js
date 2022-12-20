import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Similar from '../../Components/Reusable/Similar';
import Credits from '../../Components/Reusable/Credits';
import UsersReview from '../../Components/Reusable/UsersReview';

const SingleMovie = () => {
    const movie = useLoaderData();

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex h-[450px]'>
                <img className='w-[300px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt='' />
                <div className='bg-gray-900 rounded-lg w-full border-2 ml-5'>p</div>
            </div>

            <div className='flex justify-between mt-10 '>

                <div className='w-1/2 text-left'>
                    <p className=' text-5xl font-bold mb-10'>{movie.title}</p>
                    <p>{movie.overview}</p>

                    <div className='flex'>
                        <button className='h-12 bg-yellow-400 text-black font-bold rounded-l-xl rounded-r-none mt-10 p-4 hover:bg-yellow-300'>
                            <div className='flex relative bottom-1'>
                                <FontAwesomeIcon icon={faBookmark} className='w-7 h-7' />
                                <p className='text-lg '>Add to your watchlist</p>
                            </div>

                        </button>

                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1 rounded-r-xl rounded-l-none hover:bg-yellow-300 bg-yellow-400 text-black font-bold mt-10">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='mr-32 mt-20'>
                    <div className='flex'>
                        <FontAwesomeIcon className='w-10 h-10' icon={faStar} />
                        <p className='text-4xl font-semibold'>{movie.vote_average}<span className='text-2xl font-normal text-gray-400 '>/10 ({movie.vote_count})</span></p>
                    </div>
                </div>
            </div>

            {/* Casting Section */}
            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>Starred</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>
            <Credits id={movie.id} />

            {/* Similar Section */}
            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>Similar movies like this</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>
            <Similar id={movie.id} />

            {/* Review Section */}
            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>User Reviews</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>
            <UsersReview id={movie.id} />
            <button className='bg-yellow-400 text-black font-bold w-1/2 rounded-lg h-10 mt-10'>Add Review</button>
        </div >


    );
};

export default SingleMovie;