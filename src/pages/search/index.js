import React, { useState, useRef } from "react";
import Data from "../../components/Assets/data";
import "./search.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
const Search = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const clearSearch = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <div className="body">
      <div className="searchInputs">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <div className="searchIcon" onClick={clearSearch}>
            <BackspaceIcon />
          </div>
        )}
      </div>
      <span>Suggestions</span>
      <ul className="list">
        {Data.filter((data) => data.name.toLowerCase().includes(query)).map(
          (data_product) => (
            <li key={data_product.id} className="listItem">
              {data_product.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Search;
