import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    console.log(searchInput);

    const { data: search = [] } = useQuery({
        queryKey: ['images'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d47a4eb4a550f0aec87d70e03ce12ae&query=${searchInput}&page=1`).then(res => res.json())
    })

    const handleChange = (value) => {
        setSearchInput(value);
        search(value)
      };


    return (
        <div className=" mx-auto hidden lg:flex">

            <div className="form-control flex flex-row">

                <input onChange={(e)=> handleChange(e.target.value)} type="text" placeholder="Search for a movie, tv show or person..." className="w-96 h-8 rounded-l-full input input-bordered" />

                <Link to={`/search/${searchInput}`} type='submit' className='bg-yellow-400 w-20 rounded-full relative right-10'><FontAwesomeIcon icon={faSearch} /></Link>

            </div>

        </div>
    );
};

export default SearchBar;