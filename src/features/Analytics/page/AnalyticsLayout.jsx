import { Col, Row } from "antd";
import React from "react";
import { CategoryChart } from "../components/categoryChart";
import { MonthChart } from "../components/monthChart";
import { MonthOfYearChart } from "../components/monthOfYearChart/MonthOfYearChart";
import { WeeklyChart } from "../components/weeklyChart";

export function AnalyticsLayout() {
  return (
    <Row style={{ overflow: "auto", height: "100vh" }}>
      <Col span={12} style={{ padding: 10 }}>
        <WeeklyChart />
      </Col>
      <Col span={12} style={{ padding: 10 }}>
        <CategoryChart />
      </Col>
      <Col span={24} style={{ padding: 10 }}>
        <MonthChart />
      </Col>
      <Col span={24} style={{ padding: 10 }}>
        <MonthOfYearChart />
      </Col>
    </Row>
  );
}
