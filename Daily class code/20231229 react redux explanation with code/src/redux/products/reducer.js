import { COKE, PEPSI } from "./type";

const initial = {};

const coldDrinkReducer = (state = initial, action) => {
  console.log("action in reducer", action);
  switch (action.type) {
    case PEPSI: // almirah of pepsi
      return { ...state, pepsi: action.value };

    case COKE: // almirah of coke
      return { ...state, coke: action.value };

    default:
      return { ...state };
  }
};

export default coldDrinkReducer;
