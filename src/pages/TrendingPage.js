import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";

function TrendingPage() {
  const { api } = useContext(authContext);
  const [trending, setTrending] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}&include_adult=false`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrending(data);
        console.log(data);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingY: "150px",
        width: "80%",
        marginX: "auto",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Top Trending
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          paddingTop: "50px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {trending &&
          trending.results.map(
            (result) =>
              result.backdrop_path && (
                <Card
                  key={result.id}
                  sx={{
                    margin: "auto",
                    width: "300px",
                    height: "200px",
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    sx={{ width: "100%", height: "auto" }}
                    component="img"
                    image={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                  />

                  <Typography variant="body1">
                    {result.title || result.name}
                  </Typography>
                </Card>
              )
          )}
      </Box>
    </Box>
  );
}

export default TrendingPage;
