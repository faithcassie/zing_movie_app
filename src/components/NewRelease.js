// import { Card, CardHeader } from "@mui/material";
import { Card, CardHeader, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import MovieCard from "./MovieCard";

function NewRelease() {
  const { api } = useContext(authContext);
  const [newMovie, setNewMovie] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api.key}&language=en-US&sort_by=popularity.descc&include_video=false&page=3&with_watch_monetization_types=flatrate`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNewMovie(data);
        console.log(data);
      });
  }, []);
  if (newMovie) {
    console.log(newMovie);
  }
  return (
    <>
      {newMovie ? (
        <Box>
          <Typography
            variant="h4"
            sx={{ marginLeft: "10%", marginY: "30px", opacity: "90%" }}
          >
            New Release
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "30px",
              flexWrap: "wrap",
            }}
          >
            {newMovie.results.slice(0, 10).map((result) => (
              <MovieCard
                key={result.id}
                title={result.title}
                overview={result.overview}
                poster={result.backdrop_path}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <h4>There's no movie.</h4>
      )}
    </>
  );
}

export default NewRelease;
