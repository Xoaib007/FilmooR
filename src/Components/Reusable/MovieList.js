import React, { useEffect, useState } from 'react';
import TMDB from '../../api/TMDB';
import MovieCard from './MovieCard';

const MovieList = ({selected}) => {

    const [movies, setMovie] = useState([]);
    useEffect(()=>{
        const fetchMovie = async()=>{
           const {data}= await TMDB.get({selected})
           setMovie(data)
        }
        fetchMovie()
    },[])
    return (
        <div className='flex gap-7 overflow-x-auto'>
            {
                movies?.results?.map((movie, i) =>
                    <MovieCard
                        key={i}
                        title={movie.title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        voteCount={movie.vote_count}
                    />
                )
            }

        </div>
    );
};

export default MovieList;