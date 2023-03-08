import {
  Card,
  CardActionArea,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const query = new URLSearchParams(location.search);
  const q = query.get("q"); // "avatar"
  const { api } = useContext(authContext);
  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/search/multi?api_key=${api.key}&language=en-US&query=${q}&page=${page}&include_adult=false`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchResult(data);
        console.log(data);
      });
  }, [q, page]);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingY: "150px",
        width: "80%",
        marginX: "auto",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Results for {q}
      </Typography>
      {/* <Typography variant="body2">{searchResult.}</Typography> */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          paddingTop: "50px",
          justifyContent: "space-between",
          justifyItems: "center",
          alignItems: "start",
        }}
      >
        {searchResult &&
          searchResult.results.map((result) => (
            <Card
              key={result.id}
              sx={{
                width: "100%",
                width: { xs: "100%", md: "225px" },
                height: "auto",
                marginBottom: "20px",
                marginBottom: "20px",
              }}
            >
              <CardActionArea
                onClick={() => {
                  if (!result.media_type || result.media_type === "movie") {
                    navigate(`movie/details/${result.id}`);
                  } else {
                    navigate(`tv/details/${result.id}`);
                  }
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

        {!searchResult.results?.length && (
          <Typography
            variant="body1"
            sx={{ margin: "auto", height: "70vh", paddingTop: "100px" }}
          >
            There is no result.
          </Typography>
        )}
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          sx={{ mx: "auto", marginY: "20px" }}
        />
      </Box>
    </Box>
  );
}

export default SearchPage;
