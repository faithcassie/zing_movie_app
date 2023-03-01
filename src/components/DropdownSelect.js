import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

function DropdownSelect(list) {
  const [genreSelect, setGenreSelect] = useState("");
  const handleChange = (event) => {
    setGenreSelect(event.target.value);
  };
  // console.log(list.list.genres[0].name);
  return (
    <Select
      labelId="select-label"
      id="simple-select"
      value={genreSelect}
      defaultValue={list.list.genres[0].name}
      // label="Genre"
      onChange={handleChange}
      style={{
        marginTop: 100,
        marginLeft: 0,
        // padding: "10px",
        width: "120px",
        height: "40px",
        fontSize: "12px",
      }}
    >
      {list.list.genres.map((genre) => (
        <MenuItem value={genre.id}>{genre.name}</MenuItem>
      ))}
      {/* <MenuItem value={1}>Jan</MenuItem>
      <MenuItem value={2}>Feb</MenuItem>
      <MenuItem value={3}>March</MenuItem>
      <MenuItem value={4}>April</MenuItem>
      <MenuItem value={5}>May</MenuItem> */}
    </Select>
  );
}

export default DropdownSelect;
