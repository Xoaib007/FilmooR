import { Link } from "react-router-dom";
import "./SearchResult.css";

export const SearchResult = ({ result,id }) => {
  return (
    <Link to={`/${id}`} className="search-result">{result}</Link>
  );
};
