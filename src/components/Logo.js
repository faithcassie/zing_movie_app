import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <img src="./white-zing-logo.svg" width={100} height="auto" />
      </Link>
    </Box>
  );
}

export default Logo;
