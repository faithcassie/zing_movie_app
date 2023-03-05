import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

function DropdownSelect(list) {
  const [genreSelect, setGenreSelect] = useState(list.list.genres[0].id);
  const handleChange = (event) => {
    setGenreSelect(event.target.value);
  };
  // console.log(list.list.genres[0].name);
  return (
    <Select
      labelId="select-label"
      id="simple-select"
      value={genreSelect}
      // defaultValue={list.list.genres[0].id}
      // label="Genre"
      onChange={handleChange}
      style={{
        position: "relative",
        marginTop: 100,
        marginLeft: 0,
        // padding: "10px",
        width: "120px",
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
  );
}

export default DropdownSelect;
