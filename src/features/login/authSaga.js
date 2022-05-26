import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions } from "./authSlice";

function* HandleLogin(payload) {
  try {
    yield delay(500); // call api here
    localStorage.setItem("accses_Token", payload.username);
    yield put(authActions.loginSucces({ id: 1, name: "Hello" }));
    yield put(payload.navigate("/dashboard/home"));
  } catch (error) {
    yield put(authActions.loginFailed(error.massage));
  }
}

function* HandleLogout() {
  yield delay(500);
  localStorage.removeItem("accses_Token");
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("accses_Token"));

    console.log("isLoggedIn", isLoggedIn);
    if (!isLoggedIn) {
      const action = yield take(authActions.login.type);
      yield fork(HandleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(HandleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
