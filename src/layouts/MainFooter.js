import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import React from "react";

function MainFooter() {
  return (
    <Box marginTop="50px">
      <List sx={{ display: "flex", justifyContent: "center" }}>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemText>FAQ</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemText>Help Center</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemText>Privacy</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default MainFooter;
