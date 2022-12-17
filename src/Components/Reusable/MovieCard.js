import React from 'react';

const MovieCard = ({imageUrl , title, rating, voteCount}) => {
    return (
        <div className=''>
        <div className='mb-20 text-white'>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${imageUrl}`} alt=''/>
            <div>
                <p className=' text-left text-xl font-bold'>{title}</p>
                <div>
                    <p>{rating}</p>
                    <p>{voteCount}</p>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default MovieCard;