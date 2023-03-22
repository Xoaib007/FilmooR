import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ImageCarousel from '../../../Components/Reusable/ImageCarousel';

const CastPage = () => {
    const person = useLoaderData();
    
    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <div className='flex h-[450px]'>
                <img className='w-[300px]' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`} alt='' />
                <ImageCarousel type='person' id={person.id}/>
            </div>

            <p className='text-5xl font-bold text-left mt-10'>{person.name}</p>
        </div>
    );
};

export default CastPage;