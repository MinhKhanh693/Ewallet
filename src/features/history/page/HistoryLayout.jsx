import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  AuditOutlined,
  DollarCircleOutlined,
  HeartOutlined,
  RetweetOutlined,
  StockOutlined,
  ThunderboltOutlined,
  UserSwitchOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Table, Timeline, Typography } from "antd";
import React from "react";
import "./HistoryLayout.css";
export function HistoryLayout() {
  return (
    <div className="history-layout">
      <HistoryMoneyCard />
      <Row style={{ overflow: "auto", marginTop: 30 }}>
        <Col span={8} style={{ padding: 10, overflow: "auto", height: 500 }}>
          <Timeline mode={"left"}>
            {data.map((item, index) => (
              <Timeline.Item label={item.Date} dot={item.icon}>
                <Typography.Title level={5}>{item.Name}</Typography.Title>
                <Typography.Title level={5}>
                  {item.$} | {item.Category}
                </Typography.Title>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <HistoryTable />
      </Row>
    </div>
  );
}

function HistoryMoneyCard() {
  return (
    <Space
      style={{
        justifyContent: "space-around",
        padding: 10,
        width: "100%",
      }}
    >
      <div className="history-money-card">
        <Space align="center" size={"middle"}>
          <DollarCircleOutlined
            style={{
              fontSize: 40,
              color: "blue",
            }}
          />
          <Typography.Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            250.0 $
          </Typography.Text>
          <RetweetOutlined
            style={{
              fontSize: 30,
              color: "blue",
            }}
          />
        </Space>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Total Money
        </Typography.Title>
      </div>
      <div className="history-money-card">
        <Space align="center" size={"middle"}>
          <DollarCircleOutlined
            style={{
              fontSize: 40,
              color: "greenyellow",
            }}
          />
          <Typography.Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            1000.0 $
          </Typography.Text>
          <ArrowDownOutlined
            style={{
              fontSize: 30,
              color: "greenyellow",
            }}
          />
        </Space>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Total Revenue
        </Typography.Title>
      </div>
      <div className="history-money-card">
        <Space align="center" size={"middle"}>
          <DollarCircleOutlined
            style={{
              fontSize: 40,
              color: "red",
            }}
          />
          <Typography.Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            850.0 $
          </Typography.Text>
          <ArrowUpOutlined
            style={{
              fontSize: 30,
              color: "red",
            }}
          />
        </Space>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Total Spending
        </Typography.Title>
      </div>
    </Space>
  );
}

function HistoryTable() {
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: "25%",
    },
    {
      title: "$",
      dataIndex: "$",
      width: "15%",
    },
    {
      title: "Date",
      dataIndex: "Date",
      width: "30%",
    },
    {
      title: "Category",
      dataIndex: "Category",
      width: "20%",
    },
    {
        title: "icon",
        dataIndex: "icon",
        width: "10%",
      },
  ];
  return (
    <Col span={16} style={{padding:5}}>
      <Table
        bordered
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
        rowKey={(record) => record.Name}
      ></Table>
    </Col>
  );
}
const data = [
  {
    Name: "Quốc Khánh",
    $: "200$",
    Date: "2022-06-24  09:50:22",
    Category: "Transfer",
    icon: <UserSwitchOutlined style={{ fontSize: 20, color: "red" }} />,
  },
  {
    Name: "Viettel",
    $: "400$",
    Date: "2022-06-22 09:50:22",
    Category: "Wifi",
    icon: <WifiOutlined style={{ fontSize: 20, color: "Green" }} />,
  },
  {
    Name: "Electricity",
    $: "600$",
    Date: "2022-06-18 09:50:22",
    Category: "Electricity",
    icon: <ThunderboltOutlined style={{ fontSize: 20, color: "yellow" }} />,
  },
  {
    Name: "Water",
    $: "700$",
    Date: "2022-06-12 09:50:22",
    Category: "Water",
    icon: <StockOutlined style={{ fontSize: 20, color: "blue" }} />,
  },
  {
    Name: "DH.THỦ DẦU MỘT",
    $: "500$",
    Date: "2022-05-25 09:50:22",
    Category: "Tuition fees",
    icon: <AuditOutlined style={{ fontSize: 20, color: "orange" }} />,
  },
  {
    Name: "MOMO",
    $: "210$",
    Date: "2022-05-22 09:50:22",
    Category: "Tranfer",
    icon: <UserSwitchOutlined style={{ fontSize: 20, color: "red" }} />,
  },
  {
    Name: "Medic",
    $: "370$",
    Date: "2022-05-18 09:50:22",
    Category: "Medical",
    icon: <HeartOutlined style={{ fontSize: 20, color: "pink" }} />,
  },
  {
    Name: "BIDV",
    $: "870$",
    Date: "2022-05-15 09:50:22",
    Category: "Tranfer",
    icon: <UserSwitchOutlined style={{ fontSize: 20, color: "red" }} />,
  },
];
