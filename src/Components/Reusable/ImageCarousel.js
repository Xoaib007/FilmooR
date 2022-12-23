import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ImageCarousel = ({ type, id }) => {
    console.log(type);
    const { data: images = [] } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })
    console.log(images);

    return (
        <div className='bg-gray-900 rounded-lg w-full border-2 ml-5 flex'>
            {
                images?.backdrops?.length > 10 ?
                    <div className="carousel">
                        {
                            images?.backdrops?.slice(0, 9).map((image, i) =>
                                <div id={`${i}`} className="carousel-item relative">
                                    <img src={`https://www.themoviedb.org/t/p/original//${image.file_path}`} className="w-full" alt='' />
                                </div>
                            )
                        }
                        
                        <Link className='carousel-item relative w-full'>
                            <div className=' mx-auto bg-gray-900 flex mt-48'>
                                <p className=' text-4xl font-bold '>See All</p>
                                <FontAwesomeIcon className='w-10 h-10 ' icon={faAngleRight} />
                            </div>
                        </Link>
                    </div>
                    :
                    <div className="carousel">
                        {
                            images?.backdrops?.map((image, i) =>
                                <div id={`${i}`} className="carousel-item relative">
                                    <img src={`https://www.themoviedb.org/t/p/original//${image.file_path}`} className="w-full" alt='' />
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default ImageCarousel;