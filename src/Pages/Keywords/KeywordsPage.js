import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const KeywordPage = ({ query }) => {
  const keyword = useLoaderData();

  const { data: popular = [] } = useQuery({
    queryKey: ['similars'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/person/${person.id}/movie_credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`).then(res => res.json())
  })

  return (
    <div className='min-h-screen text-white mt-10 mx-60'>
      {query}
    </div>
  );
};