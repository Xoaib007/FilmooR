import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results?.results?.map((result) => {
        return <SearchResult result={result.name} key={result.id} id={result.id} />;
      })}
    </div>
  );
};
