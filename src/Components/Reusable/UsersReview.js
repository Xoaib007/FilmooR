import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UsersReview = ({id}) => {

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
    })

    const slicedReviews = reviews?.results?.slice(0, 6)

    return (
        <div>
            {
                slicedReviews?.map(review=>
                    <p>{review.content.slice(0,500)}...</p>
                )
            }
        </div>
    );
};

export default UsersReview;