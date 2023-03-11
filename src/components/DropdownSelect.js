import { Card, MenuItem, Select, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import GenreItems from "./GenreItems";
// import { authContext } from "../contexts/AuthContext";

function DropdownSelect(list) {
  console.log(list);
  const [genreSelect, setGenreSelect] = useState(list.list.genres[0].id);
  const handleChange = (event) => {
    setGenreSelect(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6" sx={{ paddingLeft: "10%" }}>
          Filter by Genre:
        </Typography>
        <Select
          labelId="select-label"
          id="simple-select"
          value={genreSelect}
          // label="Genre"
          onChange={handleChange}
          style={{
            width: "fit-content",
            height: "40px",
            fontSize: "1rem",
            marginLeft: "20px",
          }}
        >
          {list.list.genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <GenreItems genreSelect={genreSelect} />
    </Box>
  );
}

export default DropdownSelect;
