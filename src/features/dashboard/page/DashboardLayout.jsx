import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { appActions } from "../../../app/appSlice";
import ContractDashboard from "../../../components/contract/ContractDashboard";
import { NavbarDashboard } from "../../../components/navbar";
import "./DashboardLayout.css";

export function DashboardLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.update());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="dashboard-layout">
        <div className="dashboard-nav">
          <NavbarDashboard />
        </div>
        <div className="dashboard-contract">
          <ContractDashboard />
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}
