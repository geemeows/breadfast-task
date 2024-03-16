import postsSaga from "./postsSagas";
import { all, fork } from "redux-saga/effects";

export function* rootSaga() {
  yield all([fork(postsSaga)])
}