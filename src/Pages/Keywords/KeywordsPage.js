
import React from 'react';   
import { useLoaderData } from 'react-router-dom';

export const KeywordPage = ({query}) => {
  const keyword = useLoaderData();

  return (
    <div className='min-h-screen text-white mt-10 mx-60'>
        { query}
    </div>
  );
};