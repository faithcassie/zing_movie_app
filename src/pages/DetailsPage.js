import { Box } from "@mui/material";
import React from "react";
import MovieDetails from "../components/MovieDetails";

function DetailsPage() {
  return (
    <Box sx={{ height: "100vh" }}>
      <MovieDetails />
    </Box>
  );
}

export default DetailsPage;
