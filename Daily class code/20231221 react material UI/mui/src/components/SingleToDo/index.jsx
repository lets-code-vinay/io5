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
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import "./style.css";

const defaultToDo = {
  id: 0,
  title: "",
  time: "0:00",
  isCompleted: false,
};

const SingleToDo = () => {
  const [toDos, setToDos] = useState(defaultToDo);
  const [updateToDo, setUpdateToDo] = useState();

  const [listArray, setListArray] = useState([]);
  const [isEditID, setEdit] = useState(null);

  /**
   * @description Handeling ToDo and Time input field
   * @param {Object} e
   * @param {String} fieldType
   * @returns
   */
  const handleToDos = (e, fieldType) => {
    switch (fieldType) {
      case "toDo":
        setToDos({ ...toDos, title: e?.target?.value });
        return;
      case "time":
        setToDos({ ...toDos, time: e?.target?.value });
        return;
      default:
        setToDos({ ...toDos });
        return;
    }
  };

  /**
   * @description Adding ToDo to list
   */
  const handleAdd = () => {
    const newTodo = {
      ...toDos,
      title: toDos.title,
      time: toDos.time,
      id: listArray.length + 1,
    };
    console.log(newTodo);
    setListArray([...listArray, newTodo]);

    setToDos(defaultToDo);
  };

  const handleDeleteToDo = (e, id) => {
    const newList = listArray.filter((list) => list?.id !== id);
    setListArray(newList);
  };

  const handleComplete = (e, id) => {
    console.log("enter done");
    const newList = listArray.map((list) => {
      if (list?.id === id) {
        return { ...list, isCompleted: true };
      }
      return list;
    });
    setListArray(newList);
  };

  console.log("list===", listArray);

  const handleEdit = (e, selectedToDo) => {
    setUpdateToDo(selectedToDo);
    setEdit(selectedToDo?.id);
  };

  const handleUpdate = () => {
    console.log("listArra for update", updateToDo, listArray);

    const newList = listArray.map((list) => {
      if (updateToDo?.id == list?.id) {
        return updateToDo;
      }
      return list;
    });
    setListArray(newList);
    setEdit(false);
  };

  const updateToDos = (e, fieldType, selectedToDo) => {
    switch (fieldType) {
      case "toDo":
        setUpdateToDo({ ...updateToDo, title: e?.target?.value });
        return;
      case "time":
        setUpdateToDo({ ...updateToDo, time: e?.target?.value });
        return;
      default:
        setUpdateToDo({ ...updateToDo });
        return;
    }
  };
  // CRUD -- Create, Read, Update, delete

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
            onChange={(e) => handleToDos(e, "toDo")}
            value={toDos?.title}
          />
          <TextField
            id="outlined-basic"
            label="Add Time"
            variant="outlined"
            onChange={(e) => handleToDos(e, "time")}
            value={toDos?.time}
          />

          <Button variant="contained" className="btn-size" onClick={handleAdd}>
            +
          </Button>
        </Box>

        <CardContent>
          {listArray.map((ele, index) => {
            return (
              <div key={`${index}-${ele?.id}`}>
                {isEditID == ele?.id ? (
                  <Box className="todo-text update">
                    <TextField
                      id="outlined-basic"
                      label="Add Todo"
                      variant="outlined"
                      onChange={(e) => updateToDos(e, "toDo", ele)}
                      value={isEditID ? updateToDo?.title : ele?.title}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Add Time"
                      variant="outlined"
                      onChange={(e) => updateToDos(e, "time", ele)}
                      value={isEditID ? updateToDo?.time : ele?.time}
                    />

                    <Button
                      variant="contained"
                      className="btn-size"
                      onClick={handleUpdate}
                      color="secondary"
                    >
                      Update
                    </Button>
                  </Box>
                ) : (
                  <List dense={true} className="to-do-list">
                    <ListItem
                      secondaryAction={
                        <>
                          <IconButton
                            className="icons"
                            edge="end"
                            aria-label="delete"
                            onClick={(e) => handleComplete(e, ele?.id)}
                          >
                            <DoneIcon />
                          </IconButton>
                          <IconButton
                            className="icons"
                            edge="end"
                            aria-label="delete"
                            onClick={(e) => handleEdit(e, ele)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            className="icons"
                            edge="end"
                            aria-label="delete"
                            onClick={(e) => handleDeleteToDo(e, ele?.id)}
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
                      <ListItemText
                        primary={
                          <Typography
                            style={{
                              textDecoration:
                                ele?.isCompleted && "line-through",
                            }}
                          >
                            {ele?.title}
                          </Typography>
                        }
                        secondary={ele?.time}
                      />
                    </ListItem>
                  </List>
                )}
              </div>
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
