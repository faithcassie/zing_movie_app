import { Box } from "@mui/material";
import React from "react";
import AnimationList from "../components/AnimationList";
import ComedyList from "../components/ComedyList";
// import FeatureMovie from "../components/FeatureMovie";
import Feature from "../components/Feature";
import PopularList from "../components/PopularList";

function HomePage() {
  return (
    <>
      <Box>
        <Feature />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <PopularList />
        <AnimationList />
        <ComedyList />
      </Box>
    </>
  );
}

export default HomePage;
