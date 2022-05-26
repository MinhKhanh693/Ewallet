import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const isLoggedIn = Boolean(localStorage.getItem("accses_Token"));
  console.log("is logged", isLoggedIn);
  return !isLoggedIn ? <Navigate to="/login" replace /> : <Outlet />;
}
