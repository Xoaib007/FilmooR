import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../../../Components/Reusable/MovieCard';

const CastPage = () => {
    const person = useLoaderData();

    const { data: popular = [] } = useQuery({
        queryKey: ['similars'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/person/${person.id}/movie_credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    const { data: images = [] } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/person/${person.id}/images?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
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

            {/* Known for */}

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

            {/* Gallery */}

            <p className='text-3xl font-bold border-b-8 border-yellow-300 w-fit p-2 mt-20 mx-auto'>Gallery</p>

            <div className='grid grid-cols-5 gap-4 mt-10'>
            {
                images?.profiles?.map((image, i) =>
                    <img className='w-52 rounded-lg' key={i} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image.file_path}`} alt="Car" />
                )
            }
        </div>


        </div>
    );
};

export default CastPage;