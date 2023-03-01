import { Typography, Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import NetflixSlider from "./NetflixSlider";

function PopularList() {
  const { api } = useContext(authContext);
  const [popularMovie, setPopularMovie] = useState(null);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${api.key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularMovie(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {popularMovie ? (
        <Box sx={{ paddingLeft: "10%", paddingTop: "2rem", height: "320px" }}>
          <Typography sx={{ paddingY: "15px" }} variant="h5">
            Trending Now
          </Typography>
          <NetflixSlider children={popularMovie} />
        </Box>
      ) : (
        <h4>There's no movie.</h4>
      )}
    </>
  );
}

export default PopularList;
