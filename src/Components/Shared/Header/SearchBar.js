import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
    return (
        <div className=" mx-auto hidden lg:flex">

            <div className="form-control flex flex-row">

                <input onChange={(e)=> handleChange(e.target.value)} type="text" placeholder="Search for a movie, tv show or person..." className="w-96 h-8 rounded-l-full input input-bordered" />

                <Link to={`/search/${input}`} type='submit' className='bg-yellow-400 w-20 rounded-full relative right-10'><FontAwesomeIcon icon={faSearch} /></Link>

            </div>

        </div>
    );
};

export default SearchBar;