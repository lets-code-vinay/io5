import React, { useState } from "react";
import axios from "axios";
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
  todo: "",
  completed: false,
};

const SingleToDo = () => {
  const [toDos, setToDos] = useState(defaultToDo);
  const [updateToDo, setUpdateToDo] = useState();

  const [listArray, setListArray] = useState([]);
  const [isEditID, setEdit] = useState(null);

  /**
   * @description Handeling ToDo input field
   * @param {Object} e
   * @param {String} fieldType
   * @returns
   */
  const handleToDos = (e, fieldType) => {
    switch (fieldType) {
      case "toDo":
        setToDos({ ...toDos, todo: e?.target?.value });
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
      todo: toDos.todo,
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
        return { ...list, completed: !list?.completed };
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
        setUpdateToDo({ ...updateToDo, todo: e?.target?.value });
        return;
      default:
        setUpdateToDo({ ...updateToDo });
        return;
    }
  };
  // CRUD -- Create, Read, Update, delete

  const getAllToDos = async () => {
    try {
      // set loader true
      const api = "https://dummyjson.com/todos";

      const resposne = await axios.get(api);
      const { data, status } = resposne || {};
      const { total, limit, todos } = data || {};

      console.log("resposne", todos);
      if (status == 200) {
        setListArray([...listArray, ...todos]);
      }
      // setLoader false
    } catch (err) {
      console.error("Error in ToDo list fetching", err);
      // setLoader false
    }
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
            onChange={(e) => handleToDos(e, "toDo")}
            value={toDos?.todo}
          />

          <Button variant="contained" className="btn-size" onClick={handleAdd}>
            +
          </Button>
        </Box>

        <CardContent className="todo-lists">
          <Typography variant="body2">
            Total ToDo: {listArray.length}
          </Typography>
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
                      value={isEditID ? updateToDo?.todo : ele?.todo}
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
                              textDecoration: ele?.completed && "line-through",
                            }}
                          >
                            {ele?.todo}
                          </Typography>
                        }
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
          <Button variant="contained" color="info" onClick={getAllToDos}>
            Get All ToDos
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SingleToDo;
