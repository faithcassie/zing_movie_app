import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchContainer.module.css";
import { authContext } from "../contexts/AuthContext";
import { createSearchParams, useNavigate } from "react-router-dom";

function SearchContainer() {
  // const { api } = useContext(authContext);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${api.key}&language=en-US&query=${searchQuery}&page=1`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSearchResult(data);
  //       console.log(data);
  //     });
  // }, [searchQuery]);
  // console.log(searchResult);
  const HandleSearchButton = () => {
    if (searchQuery) {
      const params = [[`q`, searchQuery]];
      navigate({
        pathname: `search`,
        search: `?${createSearchParams(params)}`,
      });
    }
  };

  return (
    <div className={classes.searchbox}>
      <button className={classes.btnsearch}>
        <SearchIcon onClick={HandleSearchButton} />
      </button>
      <input
        type="text"
        className={classes.inputsearch}
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchContainer;
