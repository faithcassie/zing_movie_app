import React, { useContext, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchContainer.module.css";
import { authContext } from "../contexts/AuthContext";
import { createSearchParams, useNavigate } from "react-router-dom";

function SearchContainer() {
  // const { api } = useContext(authContext);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();
  const HandleSearchButton = () => {
    btn.current.focus();
    if (searchQuery) {
      const params = [[`q`, searchQuery]];
      navigate({
        pathname: `search`,
        search: `?${createSearchParams(params)}`,
      });
    }
  };
  const btn = useRef();

  return (
    <div className={classes.searchbox}>
      <button
        className={classes.btnsearch}
        onClick={HandleSearchButton}
        ref={btn}
      >
        <SearchIcon />
      </button>
      <input
        type="text"
        value={searchQuery}
        className={classes.inputsearch}
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchContainer;
