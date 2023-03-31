
import React from 'react';   

export const KeywordPage = ({query}) => {
  const keyword = useLoaderData();

  return (
    <div className='min-h-screen text-white mt-10 mx-60'>
        { query}
    </div>
  );
};