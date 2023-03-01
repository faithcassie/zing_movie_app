import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import DropdownSelect from "../components/DropdownSelect";
import FeatureTV from "../components/FeatureTV";
import { authContext } from "../contexts/AuthContext";

function TvshowPage() {
  const { api } = useContext(authContext);
  const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api.key}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovieList(data);
        console.log(data);
      });
  }, []);
  console.log(movieList);
  return (
    <Box>
      <Box sx={{ position: "fixed", top: "0", left: "10%", zIndex: "9" }}>
        {movieList && <DropdownSelect list={movieList} />}
      </Box>
      <FeatureTV />
    </Box>
  );
}

export default TvshowPage;
