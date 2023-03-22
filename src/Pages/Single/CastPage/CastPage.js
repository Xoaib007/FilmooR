import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CastPage = () => {
    const person = useLoaderData();
    
    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            <p>{person.name}</p>
        </div>
    );
};

export default CastPage;