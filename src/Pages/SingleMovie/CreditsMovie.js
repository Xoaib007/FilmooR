import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CreditsMovie = ({id}) => {
    const { data: credits = []} = useQuery({
        queryKey: ['credits'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/credits`).then(res => res.json())
    })

    return (
        <div className='text-white'>
            {
                credits?.cast?.map(credit=>
                <p>{credit.name}</p>
                )
            }
        </div>
    );
};

export default CreditsMovie;