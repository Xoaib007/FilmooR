import { useQuery } from '@tanstack/react-query';
import React from 'react';

const EpisodeStack = ({show,season}) => {

    const { data: episodes = [] } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/${show}/season/${season}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    console.log(episodes);

    return (
        <div>
            <p>{episodes.name}</p>
            <p>{show}</p>
            <p>{season}</p>
        </div>
    );
};

export default EpisodeStack;