import { MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

function DropdownSelect(list) {
  console.log(list);
  return (
    <Select value={1} style={{ marginTop: 100, marginLeft: 100 }}>
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
