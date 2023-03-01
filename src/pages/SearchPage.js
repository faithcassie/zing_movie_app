import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Feature from "../components/Feature";
// import { authContext } from "../contexts/AuthContext";

function SearchPage() {
  const location = useLocation();
  //   console.log(location);
  const query = new URLSearchParams(location.search);
  const q = query.get("q"); // "avatar"
  //   const { api } = useContext(authContext);
  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${q}&page=1&include_adult=false`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchResult(data);
        console.log(data);
      });
  }, [q]);
  //   if (searchResult) {
  //     console.log(searchResult.results[0].title);
  //   }
  //   console.log(
  //     `https://api.themoviedb.org/3/search/multi?api_key=${api.key}&language=en-US&query=${q}&page=1&include_adult=false`
  //   );
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
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {searchResult &&
          searchResult.results.map(
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

        {!searchResult.results?.length && (
          <Typography
            variant="body1"
            sx={{ margin: "auto", height: "70vh", paddingTop: "100px" }}
          >
            There is no result.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default SearchPage;
