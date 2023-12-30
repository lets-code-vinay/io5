import { SET_ALL_TODO, SET_SELECTED_TODO } from "./type";

const initial_state = {
  allToDo: [],
  selectedToDo: {},
};

export const toDoReducer = (state = initial_state, action) => {
  // action ==> type, value
  switch (action?.type) {
    case SET_ALL_TODO:
      return { ...state, allToDo: action.value };

    case SET_SELECTED_TODO:
      return { ...state, selectedToDo: action.value };

    default:
      return { ...state };
  }
};
