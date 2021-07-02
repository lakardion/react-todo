import { call, put, take } from "redux-saga/effects";
import todoService from "../services/todoService";
import { fetchTodosSuccess } from "../store/actions/todo/actions";
import { FETCH_TODOS } from "../store/actions/todo/actionTypes";

export function* getTodosSaga() {
  yield take(FETCH_TODOS);
  const { error, data } = yield call(todoService.getTodos);
  if (!error) {
    console.log("data", data);
    yield put(fetchTodosSuccess(data));
  } else {
    console.error(error);
  }
}
