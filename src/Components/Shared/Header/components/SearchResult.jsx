import { Link } from "react-router-dom";
import "./SearchResult.css";

export const SearchResult = ({ result,id }) => {
  return (
    <div className="search-result">
      <Link to={`/${id}`}>{result}</Link>
    </div>
  );
};
