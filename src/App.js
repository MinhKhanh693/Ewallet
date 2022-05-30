import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Result404 } from "./components/result";
import { PrivateRoute, PublicRouter } from "./components/routers";
import { AnalyticsLayout } from "./features/Analytics";
import { DashboardLayout } from "./features/dashboard";
import { ContentDashboard } from "./features/dashboard/components/content/ContentDashboard";
import { SearchDashboard } from "./features/dashboard/components/searchDashboard";
import { HistoryLayout } from "./features/history";
import { LoginLayout } from "./features/login";
import { SettingsLayout } from "./features/settings";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="" element={<Result404 />} />
        <Route path="*" element={<Result404 />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              path={"/dashboard/home"}
              element={
                <Fragment>
                  <div className="dashboard-search">
                    <SearchDashboard />
                  </div>
                  <div className="dashboard-content">
                    <ContentDashboard />
                  </div>
                </Fragment>
              }
            />
            <Route path="/dashboard/analytics" element={<AnalyticsLayout />} />
            <Route path="/dashboard/history" element={<HistoryLayout />} />
            <Route path="/dashboard/settings" element={<SettingsLayout />} />
          </Route>
        </Route>
        <Route path="login" element={<PublicRouter />}>
          <Route path="/login" element={<LoginLayout />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
