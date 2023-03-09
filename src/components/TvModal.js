import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PollIcon from "@mui/icons-material/Poll";
import { authContext } from "../contexts/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "3rem",
  width: { lg: "70%", md: "80%", xs: "90%" },
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(0,0,0,0.8)",
  borderRadius: "15px",
  border: "2px solid #000",
  boxShadow: " 0 0 10px rgba(255, 255, 255, 0.5)",
};
function TvModal() {
  const location = useLocation();
  console.log(location);
  const { api } = useContext(authContext);
  const navigate = useNavigate();
  const [tv, setTv] = useState(null);
  const handleClose = () => {
    navigate("/");
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${location.pathname}?api_key=${api.key}&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTv(data);
      });
  }, []);
  return (
    <Modal open={true} onClose={handleClose} disableAutoFocus>
      <Box component="div" sx={style}>
        {tv && (
          <img
            src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
            width="100%"
          />
        )}
        {tv && (
          <>
            <Typography variant="h4" sx={{ paddingTop: "1rem" }}>
              {tv.title || tv.name}
            </Typography>
            <Box sx={{ display: "flex", mt: "1rem" }}>
              <LiveTvIcon sx={{ width: "20px", mr: "5px" }} />
              <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                {tv.first_air_date.slice(0, 4)}
              </Typography>
              <PollIcon sx={{ width: "20px", mr: "5px" }} />
              <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                {tv.vote_average}
              </Typography>
            </Box>
          </>
        )}
        <Box sx={{ display: "flex" }}>
          {tv &&
            tv.genres.map((genre) => (
              <Typography
                key={genre.id}
                variant="body2"
                sx={{ mr: "1rem", mt: "5px", fontWeight: 600 }}
              >
                {genre.name}
              </Typography>
            ))}
        </Box>
        {tv && (
          <Typography sx={{ fontSize: "15px", textAlign: "left", py: "1rem" }}>
            {tv.overview}
          </Typography>
        )}
        <Button
          variant="outlined"
          sx={{ width: "30%" }}
          onClick={() => {
            const params = new URLSearchParams([
              ["media_type", "tv"],
              ["id", tv.id],
            ]);
            navigate({
              pathname: `/details`,
              search: `?${params}`,
            });
          }}
        >
          Learn More
        </Button>
      </Box>
    </Modal>
  );
}

export default TvModal;
