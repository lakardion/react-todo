import { call, put, takeEvery } from "redux-saga/effects";
import todoService from "../services/todoService";
import { deleteTodoSuccess } from "../store/actions/todo/actions";
import { DELETE_TODO } from "../store/actions/todo/actionTypes";

function* worker({ payload }) {
  const { error } = yield call(todoService.deleteTodo, payload);
  if (!error) {
    yield put(deleteTodoSuccess(payload));
  }
}
export function* deleteTodoSaga() {
  yield takeEvery(DELETE_TODO, worker);
}
