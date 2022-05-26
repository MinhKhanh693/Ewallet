import {
  AuditOutlined,
  BellOutlined,
  DollarOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  LineChartOutlined,
  LogoutOutlined,
  SettingOutlined,
  StockOutlined,
  ThunderboltOutlined,
  UserSwitchOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Dropdown, List, Menu, Row, Space, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../features/login/authSlice";
import "./NavbarDashboard.css";

export function NavbarDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const styleIcon = {
    fontSize: 20,
    color: "gray",
    fontWeight: "900",
    cursor: "pointer",
  };
  return (
    <div className="NavbarDashboard">
      <Row style={{ flexDirection: "column", height: "100%" }} justify="center">
        <Col span={6}>
          <DollarOutlined style={{ color: "gray", fontSize: 50 }} />
        </Col>
        <Col span={12} style={{ maxWidth: "100%" }}>
          <Menu>
            <Menu.Item>
              <NavLink to={"/Ewallet/dashboard/home"}>
                <Tooltip title="Home" placement="right">
                  <HomeOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/Ewallet/dashboard/analytics"}>
                <Tooltip title="Statistics" placement="right">
                  <LineChartOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/Ewallet/dashboard/history"}>
                <Tooltip title="History" placement="right">
                  <HistoryOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/Ewallet/dashboard/settings"}>
                <Tooltip title="Settings" placement="right">
                  <SettingOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={6}>
          <Space
            direction="vertical"
            size={"large"}
            style={{ alignItems: "center" }}
          >
            <Announcement data={data} styleIcon={styleIcon} />

            <Tooltip title="Logout" placement="right">
              <LogoutOutlined
                style={styleIcon}
                onClick={(e) => {
                  dispatch(authActions.logout());
                  setTimeout(() => {
                    navigate("/Ewallet/login");
                  }, 1000);
                }}
              />
            </Tooltip>
            <Tooltip title="Minh Khánh" placement="right">
              <Avatar
                size={"large"}
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              ></Avatar>
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
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

function Announcement({ data, styleIcon }) {
  return (
    <Dropdown
      overlay={
        <List
          style={{
            width: 600,
            padding: 20,
            border: "1px solid gray",
            overflow: "auto",
            height: 500,
          }}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                border: "1px solid gray",
                padding: 10,
                marginBottom: 10,
              }}
            >
              <List.Item.Meta
                avatar={item.icon}
                title={"Thông báo đến từ " + item.Name}
                description={
                  " Ưu đãi lên đến " +
                  item.$ +
                  " khi sử dụng dich vụ " +
                  item.Category +
                  " đến từ " +
                  item.Name +
                  " đến ngày " +
                  item.Date +
                  " ."
                }
              />
            </List.Item>
          )}
        />
      }
      placement="topLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Tooltip title="Announcement" placement="right">
        <BellOutlined style={styleIcon} />
      </Tooltip>
    </Dropdown>
  );
}
