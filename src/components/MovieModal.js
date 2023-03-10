import { Button, Icon, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import MovieIcon from "@mui/icons-material/Movie";
import PollIcon from "@mui/icons-material/Poll";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "2rem",
  width: { lg: "70%", md: "80%", xs: "90%" },
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(0,0,0,0.8)",
  borderRadius: "15px",
  border: "2px solid #000",
  boxShadow: " 0 0 10px rgba(255, 255, 255, 0.5)",
  //   "&:hover": {
  //     backgroundColor: "beige",
  //   },
};
function MovieModal() {
  const params = useParams();
  console.log(params);
  const { id } = params;
  const { api } = useContext(authContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const handleClose = () => {
    navigate("/");
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api.key}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <Modal open={true} onClose={handleClose} disableAutoFocus>
      <Box component="div" sx={style}>
        {movie && (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            width="100%"
          />
        )}
        {movie && (
          <>
            <Typography variant="h4" sx={{ paddingTop: "1rem" }}>
              {movie.title || movie.name}
            </Typography>
            <Box sx={{ display: "flex", mt: "1rem" }}>
              <MovieIcon sx={{ width: "20px", mr: "5px" }} />
              <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                {movie.release_date.slice(0, 4)}
              </Typography>
              <PollIcon sx={{ width: "20px", mr: "5px" }} />
              <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                {movie.vote_average}
              </Typography>
            </Box>
          </>
        )}
        <Box sx={{ display: "flex" }}>
          {movie &&
            movie.genres.map((genre) => (
              <Typography
                key={genre.id}
                variant="body2"
                sx={{ mr: "1rem", mt: "5px", fontWeight: 600 }}
              >
                {genre.name}
              </Typography>
            ))}
        </Box>
        {movie && (
          <Typography sx={{ fontSize: "15px", textAlign: "left", py: "1rem" }}>
            {movie.overview}
          </Typography>
        )}
        <Button
          variant="outlined"
          onClick={() => {
            const params = new URLSearchParams([
              ["media_type", "movie"],
              ["id", movie.id],
            ]);
            navigate({
              pathname: `/details`,
              search: `?${params}`,
            });
          }}
          sx={{ width: { xs: "100%", md: "40%" } }}
        >
          Learn More
        </Button>
      </Box>
    </Modal>
  );
}

export default MovieModal;
