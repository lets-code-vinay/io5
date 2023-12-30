export const setAllToDos = (type, value) => {
  return {
    type: type,
    value: value,
  };
};

export const setSelectedToDo = (type, value) => {
  return { type, value }; // shorthand
};
