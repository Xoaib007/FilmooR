import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CastPage = () => {
    const person = useLoaderData();

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
        </div>
    );
};

export default CastPage;