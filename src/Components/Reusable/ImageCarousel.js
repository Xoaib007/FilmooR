// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

// const ImageCarousel = ({ type, id }) => {
//     console.log(type);
//     const { data: images = [] } = useQuery({
//         queryKey: ['images'],
//         queryFn: () => fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
//     })
//     console.log(images);

//     return (
//         <div className='bg-gray-900 rounded-lg w-full border-2 ml-5 flex'>
//             {
//                 images?.backdrops?.length > 10 ?
//                     <div className="carousel rounded-lg">
//                         {
//                             images?.backdrops?.slice(0, 9).map((image, i) =>
//                                 <div id={`${i}`} className="carousel-item relative">
//                                     <img src={`https://www.themoviedb.org/t/p/original//${image.file_path}`} className="rounded-lg" alt='' />
//                                 </div>
//                             )
//                         }

//                         <Link className='carousel-item relative w-full'>
//                             <div className=' mx-auto bg-gray-900 flex mt-48'>
//                                 <p className=' text-4xl font-bold '>See All</p>
//                                 <FontAwesomeIcon className='w-10 h-10 ' icon={faAngleRight} />
//                             </div>
//                         </Link>
//                     </div>
//                     :
//                     <div className="carousel rounded-lg">
//                         {
//                             images?.backdrops?.map((image, i) =>
//                                 <div id={`${i}`} className="carousel-item relative">
//                                     <img src={`https://www.themoviedb.org/t/p/original//${image.file_path}`} alt='' />
//                                 </div>
//                             )
//                         }
//                     </div>
//             }
//         </div>
//     );
// };

// export default ImageCarousel;

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

            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
               
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {
                    images?.backdrops?.map((image, i) =>
                    <div key={`${i}`} className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={`https://www.themoviedb.org/t/p/original//${image.file_path}`}  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                    </div>
                    )
                }
                </div>

                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>

    );
};

export default ImageCarousel;