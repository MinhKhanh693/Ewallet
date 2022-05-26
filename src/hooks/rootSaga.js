import { all } from "redux-saga/effects";
import authSaga from "../features/login/authSaga";

export default function* rootSaga() {
  yield all([authSaga()]);
}
