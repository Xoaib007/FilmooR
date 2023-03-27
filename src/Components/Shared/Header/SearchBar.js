import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    console.log(searchInput);

    const handleSearchButton = () =>{

    }

    const handleSearch = (event) =>{
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    return (
        <div className=" mx-auto hidden lg:flex">

            <form onSubmit={handleSearchButton} className="form-control flex flex-row">

                <input onChange={handleSearch} type="text" placeholder="Search for a movie, tv show or person..." className="w-96 h-8 rounded-l-full input input-bordered" />

                <button type='submit' className='bg-yellow-400 w-20 rounded-full relative right-10'><FontAwesomeIcon icon={faSearch} /></button>

            </form>

        </div>
    );
};

export default SearchBar;