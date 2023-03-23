import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../../../Components/Reusable/MovieCard';
import CastCarousel from './CastCarousel';

const CastPage = () => {
    const person = useLoaderData();

    const { data: popular = [] } = useQuery({
        queryKey: ['similars'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/person/${person.id}/movie_credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    const sliced = popular?.cast?.slice(0, 14);

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex h-[450px]'>
                <img className='w-[300px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`} alt='' />
                <div className='text-left ml-10'>
                    <p className='text-5xl font-bold mt-5'>{person.name}</p>
                    <p className='text-xl font-bold my-5 text-gray-400'>{person.known_for_department}</p>
                    <p className='text-justify text-gray-400'>{person.biography}</p>
                    <p className='text-gray-400 text-xl'>Born: <span className='text-white'>{person.birthday}</span></p>
                </div>
            </div>

            <div className='flex mb-5 mt-20 border-b-4 border-yellow-400 pb-2'>
                <p className='text-3xl font-bold'>Known For</p>
                <FontAwesomeIcon className='w-10 h-10' icon={faAngleRight} />
            </div>

            <div className='flex gap-7 overflow-x-auto pb-10'>
                {
                    sliced?.map(similar =>
                        <MovieCard key={similar.id} {...similar} />
                    )
                }

                <div className='absolute right-0 w-12 h-[490px] mr-60'>
                    <div className='h-full w-full bg-gradient-to-r from-black/[0%] to-black/[100%]' />
                </div>
            </div>


            {/* <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {
                        images?.profiles?.map(image =>
                            <div key={image.file_path} class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image.file_path}`} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        )
                    }
                </div>
                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div> */}

            <CastCarousel id={person.id}/>


        </div>
    );
};

export default CastPage;