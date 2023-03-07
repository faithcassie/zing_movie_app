import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

import SearchContainer from "../components/SearchContainer";
import classes from "./MainHeader.module.css";

function MainHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar
          className={classes.navbar}
          sx={{
            display: "flex",
            marginTop: "20px",
            mx: "auto",
            width: "80%",
            // backgroundColor: "blue",
          }}
          disableGutters
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              // backgroundColor: "green",
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyItems: "space-between",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              // backgroundColor: "yellow",
            }}
          >
            <Box>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/trending"
              >
                Trending
              </NavLink>
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Movie
              </NavLink>
              <NavLink
                to="/tv"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                TV Show
              </NavLink>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <SearchContainer />
              <Button
                variant="text"
                color="primary"
                sx={{
                  mr: "0x",
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.814)",
                }}
              >
                Log In
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: "5px" }}>
            <Logo />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              // flexGrow: 1,
              position: "absolute",
              left: 0,
              top: "2.5rem",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/trending"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Trending
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Movie
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/tv"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  TV Show
                </NavLink>
              </MenuItem>
              {/* <MenuItem>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Log Out
                </NavLink>
              </MenuItem> */}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <SearchContainer />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
