import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CastCarousel = ({ id }) => {

    const { data: images = [] } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })



    console.log(images);
    console.log(`https://api.themoviedb.org/3/person/${id}/images?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`);

    return (
        <div className='grid grid-cols-5 gap-4 mt-20'>
            {
                images?.profiles?.map((image, i) =>
                    <img className='w-52 rounded-lg' key={i} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image.file_path}`} alt="Car" />
                )
            }
        </div>
    );
};

export default CastCarousel;