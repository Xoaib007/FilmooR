import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ImageCarousel = ({ type, id }) => {
    console.log(type);
    const { data: images = [] } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })
    console.log(images);

    return (
        <div className='bg-gray-900 rounded-lg w-full border-2 ml-5 flex'>
            <div className="carousel">
                {
                    images?.backdrops?.map((image, i) =>
                        <div id={`${i}`} className="carousel-item relative">
                            <img src={`https://www.themoviedb.org/t/p/original//${image.file_path}`} className="w-full" alt='' />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ImageCarousel;