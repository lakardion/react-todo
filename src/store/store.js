import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import * as epics from "../epics";

const epicMiddleWare = createEpicMiddleware();
const rootEpic = combineEpics(...Object.values(epics));
const getStore = () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
    middleware: [epicMiddleWare],
  });
  epicMiddleWare.run(rootEpic);
  return store;
};
export default getStore;
