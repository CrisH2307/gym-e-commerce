import React, { useState, useRef } from "react";
import "./search.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CancelIcon from "@mui/icons-material/Cancel";
import Link from "next/link";
import Table from "./Table";
import data_product from "../../components/Assets/data";

const Search = () => {
  //const [search, setSearchbar] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const search = (data) => {
    // Modified - By Cris
    // ------------------
    if (!query) {
      return [];
    }
    // ------------------
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

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
      <Link rel="icon" href={`/`}>
        <CancelIcon />
      </Link>
      <span className="suggestion">Suggestions</span>
      <Table data={search(data_product)} />
    </div>
  );
};

export default Search;
