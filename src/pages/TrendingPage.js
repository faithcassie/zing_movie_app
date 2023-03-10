import {
  Card,
  CardActionArea,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

function TrendingPage() {
  const { api } = useContext(authContext);
  const [trending, setTrending] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${api.key}&include_adult=false&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrending(data);
        console.log(data);
      });
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
  };

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
          marginX: "auto",
          flexWrap: "wrap",
          paddingTop: "50px",
          justifyContent: "left",
          justifyItems: "center",
          alignItems: "start",
        }}
      >
        {trending &&
          trending.results.map((result) => (
            <Card
              key={result.id}
              sx={{
                width: { sm: "100%", md: "200px", lg: "225px" },
                height: "auto",
                marginBottom: "20px",
                marginLeft: "30px",
              }}
            >
              <CardActionArea
                onClick={() => {
                  const params = new URLSearchParams([
                    ["media_type", result.media_type],
                    ["id", result.id],
                  ]);
                  navigate({
                    pathname: `/details`,
                    search: `?${params}`,
                  });
                }}
              >
                {result.backdrop_path ? (
                  <CardMedia
                    sx={{ width: "100%", height: "auto" }}
                    component="img"
                    image={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                  />
                ) : (
                  <img src="imagenotfound.png" width="100%" />
                )}

                <Typography variant="body1">
                  {result.title || result.name}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
      </Box>
      <Pagination
        count={5}
        page={page}
        onChange={handleChange}
        sx={{ mx: "auto", marginY: "20px" }}
      />
    </Box>
  );
}

export default TrendingPage;
