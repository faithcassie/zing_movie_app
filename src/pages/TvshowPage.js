import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DropdownSelect from "../components/DropdownSelect";
import FeatureTV from "../components/FeatureTV";
import PopularList from "../components/PopularList";
import { authContext } from "../contexts/AuthContext";

function TvshowPage() {
  const { api } = useContext(authContext);
  const [movieList, setMovieList] = useState(null);
  const params = useParams();
  const location = useLocation(); // "/tvshow" "/movie";
  const { type } = params;
  let endpoint = location.pathname.slice(1);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/${endpoint}/list?api_key=${api.key}&language=en-US`;
    fetch(url)
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
