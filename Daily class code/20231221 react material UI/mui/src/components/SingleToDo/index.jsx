import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./style.css";

const SingleToDo = () => {
  const [todo, setToDo] = useState("");
  const [time, setTime] = useState("");
  const [listArray, setListArray] = useState([
    { id: 1, title: "Wake at morning", time: "6.30" },
    { id: 2, title: "Get freshed up", time: "7.00" },
    { id: 3, title: "Brush your Teeth", time: "7.30" },
  ]);

  const handleTodo = (e) => {
    setToDo(e?.target?.value);
  };

  const handleTime = (e) => {
    setTime(e?.target?.value);
  };

  const handleAdd = () => {
    const newTodo = { title: todo, time, id: listArray.length + 1 };
    console.log(newTodo);
    // listArray.push(newTodo);
    setListArray([...listArray, newTodo]);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="card" mb={2}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <Box className="todo-text">
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"
            onChange={(e) => handleTodo(e)}
            value={todo}
          />
          <TextField
            id="outlined-basic"
            label="Add Time"
            variant="outlined"
            onChange={(e) => handleTime(e)}
            value={time}
          />

          <Button variant="contained" className="btn-size" onClick={handleAdd}>
            +
          </Button>
        </Box>

        <CardContent>
          {listArray.map((ele, index) => {
            return (
              <List key={index} dense={true} className="to-do-list">
                <ListItem
                  secondaryAction={
                    <>
                      <IconButton
                        className="icons"
                        edge="end"
                        aria-label="delete"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        className="icons"
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ele?.title} secondary={ele?.time} />
                </ListItem>
              </List>
            );
          })}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton disabled aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton disabled aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleToDo;
