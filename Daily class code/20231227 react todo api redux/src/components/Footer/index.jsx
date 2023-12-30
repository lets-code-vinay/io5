import { Box, Paper } from "@mui/material";
import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const store = useSelector((store) => store);
  console.log("all data in store room", store);

  return (
    <Box className="footer">
      <Paper className="footer-paper" elevation={6}>
        All Right reserved to &copy; Infoxygens : 2024
      </Paper>
    </Box>
  );
};

export default Footer;
