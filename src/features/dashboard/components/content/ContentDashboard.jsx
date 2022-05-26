import {
  AuditOutlined,
  BankOutlined,
  BellOutlined,
  HeartOutlined,
  HomeOutlined,
  StockOutlined,
  ThunderboltOutlined,
  UserSwitchOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Button, Col, Image, Row, Space, Table, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { dashboardActions } from "../../dashboardSlice";
import {
  ElectricityTranfers,
  MedicalTransfer,
  MoneyTransfer,
  OfficeTransfer,
  TuitionFees,
  WaterTransfer,
  WifiTransfer,
} from "../../../../components/transferCategory";

import "./ContentDashboard.css";

const transferItem = [
  {
    name: "Transfer",
    icon: <UserSwitchOutlined style={{ fontSize: 30, color: "red" }} />,
  },
  {
    name: "Wifi",
    icon: <WifiOutlined style={{ fontSize: 30, color: "Green" }} />,
  },
  {
    name: "Office",
    icon: <HomeOutlined style={{ fontSize: 30, color: "blue" }} />,
  },
  {
    name: "Medical",
    icon: <HeartOutlined style={{ fontSize: 30, color: "pink" }} />,
  },
  {
    name: "Electricity",
    icon: <ThunderboltOutlined style={{ fontSize: 30, color: "yellow" }} />,
  },
  {
    name: "Water",
    icon: <StockOutlined style={{ fontSize: 30, color: "blue" }} />,
  },
  {
    name: "Tuition fees",
    icon: <AuditOutlined style={{ fontSize: 30, color: "orange" }} />,
  },
];

const data = [
  {
    key: "1",
    name: "Minh Triết",
    many: "$32,9",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Hồng Hải",
    many: "$12,5",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Đức Huy",
    many: "$33,5",
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Quốc Khánh",
    many: "$31,2",
    address: "London No. 2 Lake Park",
  },
];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "70%",
  },
  {
    title: "$",
    dataIndex: "many",
    key: "many",
    width: "30%",
  },
];
export function ContentDashboard() {
  return (
    <div className="ContentDashboard">
      <div className="content-payment">
        <PaymentHeader transferItem={transferItem} />
        <div className="payment-under">
          <Row>
            <Col
              span={16}
              style={{ borderRight: "1px solid gray", height: "100%" }}
            >
              <div className="payment-under-left">
                <Table columns={columns} dataSource={data} />
              </div>
            </Col>
            <Col span={8}>
              <div className="payment-under-right">
                <VisaCard />
                <CardInfor />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

function TransferItem({ item, index }) {
  const dispatch = useDispatch();

  let temp = "";
  switch (item.name) {
    case "Transfer":
      temp = <MoneyTransfer />;
      break;
    case "Wifi":
      temp = <WifiTransfer />;
      break;
    case "Office":
      temp = <OfficeTransfer />;
      break;
    case "Medical":
      temp = <MedicalTransfer />;
      break;
    case "Electricity":
      temp = <ElectricityTranfers />;
      break;
    case "Water":
      temp = <WaterTransfer />;
      break;
    case "Tuition fees":
      temp = <TuitionFees />;
      break;
    default:
      break;
  }
  return (
    <div className="payment-transfer-item" key={index}>
      {temp}
      <Space
        onClick={() =>
          dispatch(
            dashboardActions.setIsOpenModalTransfers({
              is: true,
              name: item.name,
            })
          )
        }
        direction="vertical"
        size={"large"}
        align={"center"}
        style={{ width: "100%" }}
      >
        {item.icon}
        <Typography.Text>{item.name}</Typography.Text>
      </Space>
    </div>
  );
}

function PaymentHeader({ transferItem }) {
  return (
    <div className="payment-header">
      <div className="payment-title">
        <Space direction="vertical" size={"small"}>
          <Typography.Title
            level={2}
            style={{
              display: "inline-block",
              margin: 0,
            }}
          >
            Payments
          </Typography.Title>
          <Typography.Text>
            Use search bar to complete your payment
          </Typography.Text>
        </Space>
        <Button
          style={{
            borderRadius: 5,
            float: "right",
          }}
        >
          <BellOutlined
            style={{
              fontSize: 20,
              color: "gray",
            }}
          />
        </Button>
        <div className="payment-transfer">
          <Space size={"large"}>
            {transferItem.map((item, index) => (
              <TransferItem index={index} item={item} />
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
}

function VisaCard() {
  return (
    <div className="payment-visa">
      <Space
        size={"large"}
        style={{
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 20,
        }}
      >
        <Typography.Title
          level={4}
          style={{
            color: "white",
          }}
        >
          BIDV <BankOutlined />
        </Typography.Title>
        <Typography.Title
          level={4}
          style={{
            marginRight: "33px",
            color: "gray",
          }}
        >
          Trans
        </Typography.Title>
      </Space>
      <Typography.Title
        level={4}
        style={{
          color: "white",
        }}
      >
        0974 xxxx xxx 8189
      </Typography.Title>
      <Typography.Title
        level={4}
        style={{
          color: "white",
        }}
      >
        DOAN MINH KHANH
      </Typography.Title>
    </div>
  );
}

function CardInfor() {
  return (
    <div className="payment-card-infor">
      <Image
        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        width={100}
        height={100}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Typography.Title level={4}>Đoàn Minh Khánh</Typography.Title>
      <Typography.Text>Customer</Typography.Text>
    </div>
  );
}
