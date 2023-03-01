import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
// import { authContext } from "../contexts/AuthContext";
import TextTruncate from "react-text-truncate";
import classes from "./FeatureMovie.module.css";
import PollIcon from "@mui/icons-material/Poll";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function FeatureTV() {
  // const { api } = useContext(authContext);
  const [FeatureTV, setFeatureTV] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeatureTV(data);
        console.log(data);
      });
  }, []);
  if (FeatureTV) {
    console.log(FeatureTV.results[0].backdrop_path);
  }
  return (
    <>
      {FeatureTV ? (
        <Box>
          <Card>
            <CardMedia
              className={classes.featurecolor}
              component="img"
              width="100%"
              image={`https://image.tmdb.org/t/p/original${FeatureTV.results[0].backdrop_path}`}
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
                {FeatureTV.results[0].title || FeatureTV.results[0].name}
              </Typography>
              <Box sx={{ display: "flex", mt: "1rem" }}>
                <LiveTvIcon sx={{ width: "20px", mr: "5px" }} />
                <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                  {FeatureTV.results[0].first_air_date.slice(0, 4)}
                </Typography>
                <PollIcon sx={{ width: "20px", mr: "5px" }} />
                <Typography sx={{ fontSize: "15px", mr: "5px" }}>
                  {FeatureTV.results[0].vote_average}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ paddingY: "15px" }}>
                <TextTruncate
                  line={3}
                  element="Typoraphy"
                  truncateText="…"
                  text={FeatureTV.results[0].overview}
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

export default FeatureTV;
