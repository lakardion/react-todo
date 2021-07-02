import { call, put, takeEvery } from "redux-saga/effects";
import todoService from "../services/todoService";
import { updateTodoSuccess } from "../store/actions/todo/actions";
import { UPDATE_TODO } from "../store/actions/todo/actionTypes";

function* worker({ payload: { id, todo } }) {
  const { error, data } = yield call(todoService.patchTodo, id, todo);
  if (!error) {
    yield put(updateTodoSuccess(id, data));
  }
}
export function* patchTodoSaga() {
  yield takeEvery(UPDATE_TODO, worker);
}
