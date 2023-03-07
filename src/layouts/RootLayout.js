import { Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function RootLayout() {
  return (
    <Stack sx={{ minHeight: "100vh", width: "100vw", overflow: "hidden" }}>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Divider
        sx={{
          position: "relative",
          textAlign: "center",
          width: "100%",
          padding: 0,
          margin: 0,
        }}
        component="div"
        children={<MainFooter />}
      />
    </Stack>
  );
}

export default RootLayout;
