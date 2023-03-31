import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const KeywordPage = () => {
  const keyword = useLoaderData();

  const { data: movies = [] } = useQuery({
    queryKey: ['similars'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d47a4eb4a550f0aec87d70e03ce12ae&query=${keyword.name}`).then(res => res.json())
  })

  const { data: tv = [] } = useQuery({
    queryKey: ['similars'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/search/tv?api_key=6d47a4eb4a550f0aec87d70e03ce12ae&query=${keyword.name}`).then(res => res.json())
  })
  
  const { data: person = [] } = useQuery({
    queryKey: ['similars'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/search/person?api_key=6d47a4eb4a550f0aec87d70e03ce12ae&query=${keyword.name}`).then(res => res.json())
  })

  console.log(keyword,movies, tv, person);

  return (
    <div className='min-h-screen text-white mt-10 mx-60'>
    </div>
  );
};