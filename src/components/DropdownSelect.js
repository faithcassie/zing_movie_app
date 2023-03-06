import { Card, MenuItem, Select, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
// import { authContext } from "../contexts/AuthContext";

function DropdownSelect(list) {
  const [genreSelect, setGenreSelect] = useState(list.list.genres[0].id);
  const handleChange = (event) => {
    setGenreSelect(event.target.value);
  };
  return (
    <Stack>
      <Select
        labelId="select-label"
        id="simple-select"
        value={genreSelect}
        // label="Genre"
        onChange={handleChange}
        style={{
          width: "fit-content",
          height: "40px",
          fontSize: "12px",
        }}
      >
        {list.list.genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
      {/* <Box>
        <Typography variant="h2">Choose a genre</Typography>
        {list.list.genres.map((genre) => (
        <Card
                  key={genreSelect}
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
                    image={`https://image.tmdb.org/t/p/original${genre.backdrop_path}`}
                  />

                  <Typography variant="body1">
                    {result.title || result.name}
                  </Typography>
                </Card>))}
      </Box> */}
    </Stack>
  );
}

export default DropdownSelect;
