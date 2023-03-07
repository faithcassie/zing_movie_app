import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

function GenreItems({ genreSelect }) {
  //   console.log(typeof genreSelect);
  const { api } = useContext(authContext);
  const [genreItems, setGenreItems] = useState("");
  const [page, setPage] = useState(1);
  const location = useLocation(); // "/tv" "/movie";
  let endpoint = location.pathname.slice(1);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/${endpoint}?api_key=${api.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreSelect}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGenreItems(data);
        console.log(data);
      });
  }, [genreSelect, page]);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: "100vw", paddingTop: "30px" }}>
      {genreItems && (
        <Box
          sx={{
            display: "flex",
            width: "80%",
            flexWrap: "wrap",
            justifyContent: "space-between",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {genreItems.results.map((genreItem) => (
            <Card
              key={genreItem.id}
              sx={{
                width: "100%",
                // margin: 0,
                width: { xs: "100%", md: "225px" },
                height: { xs: "auto", md: "150px" },
                marginBottom: "20px",
                marginBottom: "20px",
              }}
            >
              <CardActionArea>
                {genreItem.backdrop_path ? (
                  <CardMedia
                    sx={{ width: "100%", opacity: "90%" }}
                    component="img"
                    image={`https://image.tmdb.org/t/p/original${genreItem.backdrop_path}`}
                  />
                ) : (
                  <img src="imagenotfound.png" width="100%" />
                )}
                <Typography variant="body2">
                  {genreItem.title || genreItem.name}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
          <Pagination
            count={5}
            page={page}
            onChange={handleChange}
            sx={{ mx: "auto", marginY: "20px" }}
          />
        </Box>
      )}
    </Box>
  );
}

export default GenreItems;
