import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MovieCard from './MovieCard';

const Similar = ({ id }) => {

    const { data: similars = [] } = useQuery({
        queryKey: ['similars'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    const slicedSimilars = similars?.results?.slice(0, 14);

    console.log(similars);

    return (
        <div className='flex gap-7 overflow-x-auto pb-10'>
            {
                slicedSimilars?.map(similar =>
                    <MovieCard key={similar.id} {...similar} />
                )
            }
            
            <div className='absolute right-0 w-12 h-[490px] mr-36'>
                <div className='h-full w-full bg-gradient-to-r from-black/[0%] to-black/[100%]' />
            </div>
        </div>
    );
};

export default Similar;