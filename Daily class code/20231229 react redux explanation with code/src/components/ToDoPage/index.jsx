import React from "react";
import { Box, Paper } from "@mui/material";
import SingleToDo from "../SingleToDo";
import "./style.css";

const ToDoPage = () => {
  return (
    <Box p={2} m={2} className="to-do-container" elevation={8}>
      <SingleToDo />
    </Box>
  );
};

export default ToDoPage;
