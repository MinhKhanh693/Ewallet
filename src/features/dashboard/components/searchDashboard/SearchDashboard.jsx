import { AutoComplete, Button, Input, Space } from "antd";
import React, { useState } from "react";
function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
const options = [
  {
    value: "Khánh Hòa",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Khánh Hòa</span>
        <span>{getRandomInt(200, 100)} results</span>
      </div>
    ),
  },
  {
    value: "Hà Nội",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Hà Nội</span>
        <span>{getRandomInt(200, 100)} results</span>
      </div>
    ),
  },
  {
    value: "Đồng Nai",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Đồng Nai</span>
        <span>{getRandomInt(200, 100)} results</span>
      </div>
    ),
  },
  {
    value: "Đà Nẵng",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Đà Nẵng</span>
        <span>{getRandomInt(200, 100)} results</span>
      </div>
    ),
  },
  {
    value: "Bình Dương",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Bình Dương</span>
        <span>{getRandomInt(200, 100)} results</span>
      </div>
    ),
  },
  {
    value: "Thành phố Hồ Chí Minh",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Thành phố Hồ Chí Minh</span>
        <span>{getRandomInt(200, 100)} results</span>
      </div>
    ),
  },
];
export function SearchDashboard() {
  const [option] = useState(options);

  return (
    <div className="SearchDashboard">
      <Space size={"large"}>
        <Input.Search
          enterButton
          allowClear
          placeholder="Account number"
          style={{ width: 404 }}
        ></Input.Search>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 300 }}
          options={option}
        >
          <Input.Search
            enterButton
            allowClear
            placeholder="City"
            style={{ width: 304 }}
          ></Input.Search>
        </AutoComplete>
      </Space>
      <Button
        style={{
          float: "right",
          color: "white",
          background: "blue",
          width: "100px",
          borderRadius: 10,
        }}
      >
        Search
      </Button>
    </div>
  );
}
