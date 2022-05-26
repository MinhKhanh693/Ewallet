import React from "react";
import { Pie, G2 } from "@ant-design/plots";
import { Space, Typography } from "antd";
export function CategoryChart() {
  const G = G2.getEngine("canvas");
  const data = [
    {
      type: "Transfer",
      value: 400,
    },
    {
      type: "Wifi",
      value: 100,
    },
    {
      type: "Office",
      value: 100,
    },
    {
      type: "Medical",
      value: 100,
    },
    {
      type: "Electricity",
      value: 100,
    },
    {
      type: "Water",
      value: 100,
    },
    {
      type: "Tuition fees",
      value: 100,
    },
  ];
  const cfg = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}个 ${data.percent * 100}%`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const config = cfg;
  return (
    <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
      <Pie {...config} />
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Category spending report.
      </Typography.Title>
    </Space>
  );
}
