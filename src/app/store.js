import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../hooks/rootSaga";
import authReducer from "../features/login/authSlice";
import appReducer from "./appSlice";
const sagaMiddleware = createSagaMiddleware();

const rootRedecer = combineReducers({
  dashBoard: dashboardReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootRedecer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
