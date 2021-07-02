import { ofType } from "redux-observable";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { mergeMap } from "rxjs/operators";
import todoService from "../services/todoService";
import {
  fetchTodosFail,
  fetchTodosSuccess,
} from "../store/actions/todo/actions";
import { FETCH_TODOS } from "../store/actions/todo/actionTypes";
export const getTodosEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_TODOS),
    mergeMap(() =>
      from(todoService.getTodos()).pipe(
        map(({ error, data }) => {
          if (!error) return fetchTodosSuccess(data);
          return fetchTodosFail(error);
        })
      )
    )
  );
