import { faStar, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Credits from '../../Components/Reusable/Credits';
import ImageCarousel from '../../Components/Reusable/ImageCarousel';
import Similar from '../../Components/Reusable/Similar';
import UsersReview from '../../Components/Reusable/UsersReview';

const SingleTVShow = () => {
    const show = useLoaderData();

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex h-[450px]'>
                <img className='w-[300px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${show.poster_path}`} alt='' />
                <ImageCarousel type={'movie'} id={show.id}/>
            </div>

            <div className='flex justify-between mt-10 '>

                <div className='w-1/2 text-left'>
                    <div className='flex mb-4'>
                        {
                            show?.genres?.map(genre =>
                                <Link to={`/genre/${genre.id}`}>
                                    <p className='border-2 border-yellow-400 rounded-2xl px-2 px-auto mx-2'>{genre.name}</p>
                                </Link>
                            )
                        }
                    </div>

                    <p className=' text-5xl font-bold mb-10'>{show.title}</p>
                    <p>{show.overview}</p>

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
                                <li><Link>Item 1</Link></li>
                                <li><Link>Item 2</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='mr-32 mt-20'>
                    <div className='flex'>
                        <FontAwesomeIcon className='w-10 h-10' icon={faStar} />
                        <p className='text-4xl font-semibold'>{show.vote_average}<span className='text-2xl font-normal text-gray-400 '>/10 ({show.vote_count})</span></p>
                    </div>
                </div>
            </div>

            {/* Casting Section */}
            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>Starred</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>
            <Credits id={show.id} />

            {/* Similar Section */}
            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>Similar shows like this</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>
            <Similar id={show.id} />

            {/* Review Section */}
            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>User Reviews</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>
            <UsersReview id={show.id} />
            <button className='bg-yellow-400 text-black font-bold w-1/2 rounded-lg h-10 mt-10'>Add Review</button>
        </div>


    );
};

export default SingleTVShow;