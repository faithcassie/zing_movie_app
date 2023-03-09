import { Box, Card, CardMedia, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import MovieIcon from "@mui/icons-material/Movie";
import PollIcon from "@mui/icons-material/Poll";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function MovieDetails() {
  const { api } = useContext(authContext);
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const mediaType = urlParams.get("media_type");
  const id = urlParams.get("id");
  console.log(mediaType, id);
  const [details, setDetails] = useState("");
  const style = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: "10rem 0",
    width: "80%",
    height: "auto",
  };

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${api.key}&language=en-US`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      });
  }, [id]);
  if (details) {
    console.log(details);
  }
  return (
    <>
      {details && (
        <Box sx={style}>
          <Card>
            {details.backdrop_path ? (
              <CardMedia
                sx={{
                  opacity: "80%",
                }}
                component="img"
                width="100%"
                image={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              />
            ) : (
              <img src="imagenotfound.png" width="100%" />
            )}
          </Card>
          <Box
            sx={{
              paddingTop: "2rem",
              marginX: "auto",
              width: { lg: "70%", md: "100%" },

              // backgroundColor: "blue",
            }}
          >
            <Typography variant="h4">
              {details.title || details.name}
            </Typography>
            <Typography variant="subtitle1">
              {details.tagline || details.status}
            </Typography>
            <Box sx={{ display: "flex" }}>
              {details.genres.map((genre) => (
                <Typography
                  key={genre.id}
                  variant="subtitle2"
                  component="div"
                  sx={{ mr: "1rem", mt: "1rem", mb: "5px", fontWeight: 600 }}
                >
                  {genre.name}
                </Typography>
              ))}
            </Box>

            {mediaType === "movie" && (
              <Box sx={{ display: "flex" }}>
                <LiveTvIcon sx={{ width: "20px", mr: "8px" }} />
                <Typography sx={{ fontSize: "15px", mr: "1rem" }}>
                  {details.release_date.slice(0, 4)}
                </Typography>
                <PollIcon sx={{ width: "20px", mr: "8px" }} />
                <Typography sx={{ fontSize: "15px", mr: "1rem" }}>
                  {details.vote_average}
                </Typography>
                <AccessTimeIcon sx={{ width: "20px", mr: "8px" }} />
                <Typography sx={{ fontSize: "15px", mr: "1rem" }}>
                  {details.runtime} minutes
                </Typography>
                <Box sx={{ mt: "1rem" }}>
                  <Typography variant="subtitle1"></Typography>
                </Box>
              </Box>
            )}
            {mediaType === "tv" && (
              <Box sx={{ display: "flex", mt: "1rem" }}>
                <MovieIcon sx={{ width: "20px", mr: "8px" }} />
                <Typography sx={{ fontSize: "15px", mr: "1rem" }}>
                  {details.first_air_date.slice(0, 4)}
                </Typography>
                <PollIcon sx={{ width: "20px", mr: "8px" }} />
                <Typography sx={{ fontSize: "15px", mr: "1rem" }}>
                  {details.vote_average}
                </Typography>
                <AccessTimeIcon sx={{ width: "20px", mr: "8px" }} />
                <Typography sx={{ fontSize: "15px", mr: "1rem" }}>
                  {details.episode_run_time} episodes
                </Typography>
              </Box>
            )}
            <Box sx={{ paddingTop: "1rem" }}>
              <Typography variant="body1">{details.overview}</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default MovieDetails;
