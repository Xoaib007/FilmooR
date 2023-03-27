import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Search = () => {
    const search = useLoaderData();

    return (
        <div className='min-h-screen text-white mt-10 mx-60'>
            {
                search?.results?.map(result=>
                    <div key={result.id}>
                        <Link to={`searchresult/${result.id}`} className='inline'>{result.name}</Link>
                    </div>
                )
            }
            
        </div>
    );
};

export default Search;