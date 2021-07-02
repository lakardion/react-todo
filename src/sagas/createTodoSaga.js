import { call, put, takeEvery } from "redux-saga/effects";
import todoService from "../services/todoService";
import { createTodoSuccess } from "../store/actions/todo/actions";
import { CREATE_TODO } from "../store/actions/todo/actionTypes";
function* worker(action) {
  const { data } = yield call(todoService.createTodo, action.payload);
  yield put(createTodoSuccess(data));
}
export function* createTodoSaga() {
 yield takeEvery(CREATE_TODO, worker);
}
