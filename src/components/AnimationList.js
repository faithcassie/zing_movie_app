import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import NetflixSlider from "./NetflixSlider";

function AnimationList() {
  const { api } = useContext(authContext);
  const [animationMovie, setAnimationMovie] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnimationMovie(data);
      });
  }, []);
  if (animationMovie) {
    console.log(animationMovie);
  }
  return (
    <>
      {animationMovie ? (
        <Box sx={{ paddingLeft: "10%", height: "320px", paddingTop: "2rem" }}>
          <Typography sx={{ paddingY: "15px" }} variant="h5">
            Animation
          </Typography>
          <NetflixSlider children={animationMovie} />
        </Box>
      ) : (
        <h4>There's no movie.</h4>
      )}
    </>
  );
}

export default AnimationList;
