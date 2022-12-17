import React from 'react';

const MovieCard = ({imageUrl , title, released, rating}) => {
    return (
        <div className='mb-20 '>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${imageUrl}`} alt=''/>
            <div>
                <p className='text-white text-left text-xl font-bold'>{title}</p>
                <p className='text-white text-left text-xl'>{released}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;