import { ofType } from "redux-observable";
import { mergeMap } from "redux-observable/node_modules/rxjs/operators";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import todoService from "../services/todoService";
import {
  updateTodoFail,
  updateTodoSuccess
} from "../store/actions/todo/actions";
import { UPDATE_TODO } from "../store/actions/todo/actionTypes";
export const patchTodoEpic = (action$) => {
  return action$.pipe(
    ofType(UPDATE_TODO),
    mergeMap((action) =>
      from(todoService.patchTodo(action.payload.id, action.payload.todo)).pipe(
        map(({ error, data }) => {
          if (!error) return updateTodoSuccess(action.payload.id, data);
          return updateTodoFail(error);
        })
      )
    )
  );
};
