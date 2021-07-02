import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./../sagas";
const sagaMiddleWare = createSagaMiddleware();
const getStore = () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
    middleware: [sagaMiddleWare],
  });
  Object.values(sagas).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
  return store;
};
export default getStore;
