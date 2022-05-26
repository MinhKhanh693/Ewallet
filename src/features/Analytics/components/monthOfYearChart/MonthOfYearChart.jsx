import React from "react";
import { Column } from "@ant-design/plots";
import { Space, Typography } from "antd";

export function MonthOfYearChart() {
  const data = [
    {
      Month: "January",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "February",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "March",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "April",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "May",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "June",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "July",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "August",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "September",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "October",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "November",
      Dollar: Math.floor(Math.random() * 3000),
    },
    {
      Month: "December",
      Dollar: Math.floor(Math.random() * 3000),
    },
  ];
  const config = {
    data,
    xField: "Month",
    yField: "Dollar",
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <Space size={"middle"} style={{ width: "100%" }} direction={"vertical"}>
      <Column {...config} />
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Month of the year spending report
      </Typography.Title>
    </Space>
  );
}
