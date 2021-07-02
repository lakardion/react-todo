import { ofType } from "redux-observable";
import { mergeMap } from "redux-observable/node_modules/rxjs/operators";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import todoService from "../services/todoService";
import {
  deleteTodoFail,
  deleteTodoSuccess,
} from "../store/actions/todo/actions";
import { DELETE_TODO } from "../store/actions/todo/actionTypes";

export const deleteTodoEpic = (action$) => {
  return action$.pipe(
    ofType(DELETE_TODO),
    mergeMap((action) =>
      from(todoService.deleteTodo(action.payload)).pipe(
        map(({ error, data }) => {
          if (!error) return deleteTodoSuccess(action.payload);
          return deleteTodoFail(error);
        })
      )
    )
  );
};
