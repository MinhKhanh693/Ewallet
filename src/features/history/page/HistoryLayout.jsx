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
  HomeOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Table, Timeline, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { appSelect } from "../../../app/appSlice";
import "./HistoryLayout.css";
import { Bar } from "@ant-design/plots";

//#region HistoryLayout
export function HistoryLayout() {
  const data = useSelector(appSelect.selectHistory);
  const totalRemainder = useSelector(appSelect.selectTotalRemainder);
  const totalExpenditure = useSelector(appSelect.selectTotalExpenditure);
  const totalRevenue = useSelector(appSelect.selectTotalRevenue);
  return (
    <div className="history-layout">
      <HistoryMoneyCard
        totalRemainder={totalRemainder}
        totalExpenditure={totalExpenditure}
        totalRevenue={totalRevenue}
      />
      <Row style={{ overflow: "auto", marginTop: 30 }}>
        <HistoryTable data={data} />
        <Col
          span={8}
          style={{ padding: "10px 10px 10px 0", overflow: "auto", height: 400 }}
        >
          <Timeline mode={"left"}>
            {data.map((item, index) => (
              <Timeline.Item
                label={item.dateTime}
                dot={formatIcons(item.category)}
              >
                <Typography.Title level={5}>
                  {item.name} | {item.category}
                </Typography.Title>
                <Typography.Title level={5}>
                  Amount : {item.amount || item.extraAmount}$
                </Typography.Title>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col span={16}>
          <DemoBar data={data} />
        </Col>
      </Row>
    </div>
  );
}
//#endregion

//#region HistoryMoneyCard
function HistoryMoneyCard({ totalRemainder, totalExpenditure, totalRevenue }) {
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
            {totalRemainder} $
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
            {totalRevenue} $
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
            {totalExpenditure} $
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
//#endregion

//#region HistoryTable
function HistoryTable({ data }) {
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
    },
    {
      title: "amount",
      dataIndex: "amount",
      width: "15%",
      render: (_, pre) => {
        return pre.amount === 0 ? pre.extraAmount : pre.amount;
      },
    },
    {
      title: "dateTime",
      dataIndex: "dateTime",
      width: "30%",
    },
    {
      title: "category",
      dataIndex: "category",
      width: "20%",
    },
    {
      title: "icon",
      dataIndex: "category",
      width: "10%",
      render(_, record) {
        return formatIcons(record.category);
      },
    },
  ];
  return (
    <Col span={24} style={{ padding: 5 }}>
      <Table
        bordered
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
        rowKey={(record) => record.Name}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Col>
  );
}
//#endregion

//#region formatIcons
const formatIcons = (category) => {
  switch (category) {
    case "Transfer":
      return <UserSwitchOutlined style={{ fontSize: 20, color: "red" }} />;
    case "Wifi":
      return <WifiOutlined style={{ fontSize: 20, color: "Green" }} />;
    case "Electricity":
      return <ThunderboltOutlined style={{ fontSize: 20, color: "yellow" }} />;
    case "Water":
      return <StockOutlined style={{ fontSize: 20, color: "blue" }} />;
    case "Tuition Fees":
      return <AuditOutlined style={{ fontSize: 20, color: "orange" }} />;
    case "Medical":
      return <HeartOutlined style={{ fontSize: 20, color: "pink" }} />;
    case "Office":
      return <HomeOutlined style={{ fontSize: 20, color: "blue" }} />;
    default:
      break;
  }
};
//#endregion

const DemoBar = ({ data }) => {
  const config = {
    data,
    xField: "amount",
    yField: "dateTime",
    seriesField: "category",
    legend: {
      position: "top-left",
    },
  };
  return <Bar {...config} style={{ padding: 10 }} />;
};
