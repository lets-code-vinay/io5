import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { toDoReducer } from "./toDo/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  toDo: toDoReducer,
});

export default persistReducer(persistConfig, rootReducer);
