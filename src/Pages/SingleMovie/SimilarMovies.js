import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SimilarMovies = ({id}) => {

    const { data: similars = [] } = useQuery({
        queryKey: ['similars'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    return (
        <div>
            
        </div>
    );
};

export default SimilarMovies;