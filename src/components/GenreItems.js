import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

function GenreItems({ genreSelect }) {
  //   console.log(typeof genreSelect);
  const navigate = useNavigate();
  const { api } = useContext(authContext);
  const [genreItems, setGenreItems] = useState("");
  const [page, setPage] = useState(1);
  const location = useLocation(); // "/tv" "/movie";
  let endpoint = location.pathname.slice(1);
  console.log(endpoint);
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
  if (genreItems) {
    console.log(genreItems);
  }
  return (
    <Box>
      <Box sx={{ width: "100vw", paddingTop: "30px", marginX: "auto" }}>
        {genreItems && (
          <Box
            sx={{
              display: "flex",
              width: "80%",
              marginX: "auto",
              flexWrap: "wrap",
              justifyContent: "left",
              justifyItems: "center",
              alignItems: "start",
            }}
          >
            {genreItems.results.map((genreItem) => (
              <Card
                key={genreItem.id}
                sx={{
                  width: { sm: "100%", md: "200px", lg: "225px" },
                  height: "auto",
                  marginBottom: "20px",
                  marginLeft: { sm: 0, md: "30px" },
                }}
              >
                <CardActionArea
                  onClick={() => {
                    const params = new URLSearchParams([
                      ["media_type", endpoint],
                      ["id", genreItem.id],
                    ]);
                    navigate({
                      pathname: `/details`,
                      search: `?${params}`,
                    });
                  }}
                >
                  {genreItem.backdrop_path ? (
                    <CardMedia
                      sx={{ width: "100%", opacity: "90%" }}
                      component="img"
                      image={`https://image.tmdb.org/t/p/original${genreItem.backdrop_path}`}
                    />
                  ) : (
                    <img src="imagenotfound.png" width="100%" />
                  )}
                  <Typography variant="body2" sx={{ height: "fit-content" }}>
                    {genreItem.title || genreItem.name}
                  </Typography>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        )}
      </Box>
      <Pagination
        count={5}
        page={page}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginY: "30px",
          marginX: "auto",
          // width: "80vw",
        }}
      />
    </Box>
  );
}

export default GenreItems;
