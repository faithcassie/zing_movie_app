import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import TextTruncate from "react-text-truncate";
import classes from "./FeatureMovie.module.css";
import MovieIcon from "@mui/icons-material/Movie";
import PollIcon from "@mui/icons-material/Poll";

function FeatureMovie() {
  const { api } = useContext(authContext);
  const [featureMovie, setFeatureMovie] = useState(null);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api.key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeatureMovie(data);
        console.log(data);
      });
  }, []);
  if (featureMovie) {
    console.log(featureMovie.results[0].backdrop_path);
  }
  return (
    <>
      {featureMovie ? (
        <Box>
          <Card>
            <CardMedia
              className={classes.featurecolor}
              component="img"
              width="100%"
              image={`https://image.tmdb.org/t/p/original${featureMovie.results[0].backdrop_path}`}
            />
            <CardContent
              className={classes.backgroundbox}
              sx={{
                position: { lg: "absolute" },
                left: 0,
                bottom: "20%",
                mx: "10%",
                width: { lg: "40%" },
              }}
            >
              <Typography variant="h5" component="div">
                {featureMovie.results[0].title || featureMovie.results[0].name}
              </Typography>
              <Box sx={{ display: "flex", mt: "1rem" }}>
                <MovieIcon sx={{ width: "20px", mr: "5px" }} />
                <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                  {featureMovie.results[0].release_date.slice(0, 4)}
                </Typography>
                <PollIcon sx={{ width: "20px", mr: "5px" }} />
                <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                  {featureMovie.results[0].vote_average}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ paddingY: "15px" }}>
                <TextTruncate
                  line={3}
                  element="Typoraphy"
                  truncateText="…"
                  text={featureMovie.results[0].overview}
                />
              </Typography>
              <Button variant="outlined">Learn More</Button>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <p>There's no featured movie.</p>
      )}
    </>
  );
}

export default FeatureMovie;
