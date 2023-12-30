import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/icons/parrot-logo.svg";
import "./style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store?.toDo?.selectedToDo);
  console.log("store in header", store);
  return (
    <>
      <Paper elevation={8} className="header-container" m={1}>
        <Box className="logo-container">
          <MenuIcon />
          <img src={logo} alt="logo" width={"50px"} />
        </Box>
        <Typography>
          You are on: <strong>{store?.todo}</strong>
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained" color={"secondary"}>
            New To Do
          </Button>
          <Button variant="text" color={"secondary"}>
            Add ToDo
          </Button>
          <Button variant="text" color={"secondary"}>
            Go To Wiki
          </Button>
          <Button variant="contained" color={"secondary"}>
            Logout
          </Button>
        </Stack>

        <TextField
          id="outlined-basic"
          label="Search ToDo"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </>
  );
};

export default Header;
