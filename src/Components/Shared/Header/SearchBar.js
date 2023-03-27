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

            

        </div>
    );
};

export default SearchBar;