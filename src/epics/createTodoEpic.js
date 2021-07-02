import { from } from "rxjs";
import { map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { CREATE_TODO } from "../store/actions/todo/actionTypes";
import todoService from "../services/todoService";
import { mergeMap } from "redux-observable/node_modules/rxjs/operators";
import {
  createTodoFail,
  createTodoSuccess,
} from "../store/actions/todo/actions";
export const createTodoEpic = (action$) => {
  return action$.pipe(
    ofType(CREATE_TODO),
    mergeMap((action) =>
      from(todoService.createTodo(action.payload)).pipe(
        map(({ error, data }) => {
          if (!error) return createTodoSuccess(data);
          return createTodoFail(error);
        })
      )
    )
  );
};
