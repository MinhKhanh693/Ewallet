import { Column } from "@ant-design/plots";
import { Space, Typography } from "antd";
import React from "react";

export function MonthChart() {
  const data = [];
  for (let i = 1; i <= 47; i++) {
    if (i > 31) {
      data.push({
        day: `${i - 31}/6`,
        Dollar: Math.floor(Math.random() * 300),
      });
    } else {
      data.push({ day: `${i}/5`, Dollar: Math.floor(Math.random() * 300) });
    }
  }

  const config = {
    data,
    xField: "day",
    yField: "Dollar",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    scrollbar: {
      type: "horizontal",
    },
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical" size={"middle"}>
      <Column {...config} />
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Day-to-month spending report
      </Typography.Title>
    </Space>
  );
}
