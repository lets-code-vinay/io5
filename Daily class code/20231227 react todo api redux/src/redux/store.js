import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk"; // 1. thunk 2. saga
import rootReducer from "./rootReducer";

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

store.subscribe(() => {});
