import { combineReducers } from "redux";
import coldDrinkReducer from "./products/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  coldDrinkSection: coldDrinkReducer,
  shoesSection: "",
  foodSection: "",
});

export default persistReducer(persistConfig, rootReducer);
