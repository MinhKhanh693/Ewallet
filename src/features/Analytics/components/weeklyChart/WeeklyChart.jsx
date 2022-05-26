import { Column } from "@ant-design/plots";
import { Space, Typography } from "antd";
import React from "react";

export function WeeklyChart() {
  const data = [
    {
      type: "Monday",
      Dollar: 38.5,
    },
    {
      type: "Tuseday",
      Dollar: 52.7,
    },
    {
      type: "Wednesday",
      Dollar: 61.9,
    },
    {
      type: "Thursday",
      Dollar: 45.6,
    },
    {
      type: "Friday",
      Dollar: 90.1,
    },
    {
      type: "Saturday",
      Dollar: 38.4,
    },
    {
      type: "Sunday",
      Dollar: 38.9,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "Dollar",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Day",
      },
      Dollar: {
        alias: "Dollar ",
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return (
    <Space
      direction="vertical"
      size={"middle"}
      style={{ width: "100%", padding: 10 }}
    >
      <Column
        {...config}
      />
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Weekly spending report.
      </Typography.Title>
    </Space>
  );
}
