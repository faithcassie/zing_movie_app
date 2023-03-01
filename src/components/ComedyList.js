import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
// import { authContext } from "../contexts/AuthContext";
import NetflixSlider from "./NetflixSlider";

function ComedyList() {
  // const { api } = useContext(authContext);
  const [comedyMovie, setComedyMovie] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComedyMovie(data);
      });
  }, []);

  return (
    <>
      {comedyMovie ? (
        <Box sx={{ paddingLeft: "10%", height: "320px", paddingTop: "2rem" }}>
          <Typography sx={{ paddingY: "15px" }} variant="h5">
            Comedy
          </Typography>
          <NetflixSlider children={comedyMovie} />
        </Box>
      ) : (
        <h4>There's no movie.</h4>
      )}
    </>
  );
}

export default ComedyList;
