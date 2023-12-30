import { Box, Paper } from "@mui/material";
import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const drinks = useSelector((store) => store?.coldDrinkSection);
  console.log("all data in store room", drinks);

  return (
    <Box className="footer">
      {drinks?.pepsi}

      <Paper className="footer-paper" elevation={6}>
        All Right reserved to &copy; Infoxygens : 2024
        {drinks?.coke}
      </Paper>
    </Box>
  );
};

export default Footer;
