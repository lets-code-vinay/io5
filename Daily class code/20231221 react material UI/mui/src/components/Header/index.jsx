import React from "react";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/icons/parrot-logo.svg";

const Header = () => {
  return (
    <>
      <Box className="header-container">
        <Stack direction={"row"} spacing={2}>
          <Box>
            <MenuIcon />
            <img src={logo} alt="logo" width={"50px"} />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MenuIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <MenuIcon />
            <img src={logo} alt="logo" width={"50px"} />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MenuIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
