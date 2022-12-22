import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UsersReview = ({ id }) => {

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    const slicedReviews = reviews?.results?.slice(0, 6)

    return (
        <div>
            {
                slicedReviews?.map(review =>
                    <div key={review.id} className='mt-10 bg-gray-900 p-4'>
                        <div className='flex'>
                            <img className='h-10 w-10 rounded-full' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${review.author_details.avatar_path}`} alt=''/>
                            <p className='text-2xl ml-5'>@{review.author_details.username} <span className='text-sm text-gray-400'>{review.author_details.name}</span></p>
                        </div>
                        <div tabIndex={0} className="collapse text-left">
                            <div className="collapse-title text-xl font-medium">
                                {review.content.slice(0, 100)}...
                            </div>
                            <div className="collapse-content text-gray-400">
                                <p>{review.content}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UsersReview;