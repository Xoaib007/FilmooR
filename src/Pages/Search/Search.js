import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Search = () => {
    const search = useLoaderData();

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            {
                search?.results?.map(result=>
                    <Link key={result.id} to={`searchresult/${result.id}`}>{result.name}</Link>
                )
            }
            
        </div>
    );
};

export default Search;