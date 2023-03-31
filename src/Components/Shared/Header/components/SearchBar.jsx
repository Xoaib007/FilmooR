import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar1 = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://api.themoviedb.org/3/search/keyword?api_key=6d47a4eb4a550f0aec87d70e03ce12ae&query=${value}`)
      .then(response => response.json())
      .then(json => {
        setResults(json);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(input);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={setFocused(true)}
        onBlur={setFocused(false)}
      />
    </div>
  );
};
