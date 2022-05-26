import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRouter() {
  const isLoggedIn = Boolean(localStorage.getItem("accses_Token"));
  console.log("is logged", isLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard/home" replace />;
}
