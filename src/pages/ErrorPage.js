// import { Box } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import MainHeader from "../layouts/MainHeader";

function ErrorPage() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <h2>An error just happened. :/</h2>
        <p>
          The page you tried to open does not exist. Please navigate to Home
          page.
        </p>
      </Box>
    </Stack>
  );
}

export default ErrorPage;
