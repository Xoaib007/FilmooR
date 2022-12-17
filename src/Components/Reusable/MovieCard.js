import React from 'react';

const MovieCard = ({imageUrl , title, released, rating}) => {
    return (
        <div className='mb-20'>
            <img src={imageUrl} alt=''/>
            <div>
                <p className='text-white text-left text-2xl font-bold'>{title}</p>
                <p className='text-white text-left text-xl'>{released}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;