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
import {
  Avatar,
  Badge,
  Col,
  Dropdown,
  List,
  Menu,
  Row,
  Space,
  Tooltip,
} from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { appSelect } from "../../app/appSlice";
import { authActions } from "../../features/login/authSlice";
import "./NavbarDashboard.css";

export function NavbarDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(appSelect.selectHistory);
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
              <NavLink to={"/dashboard/home"}>
                <Tooltip title="Home" placement="right">
                  <HomeOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/dashboard/analytics"}>
                <Tooltip title="Statistics" placement="right">
                  <LineChartOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/dashboard/history"}>
                <Tooltip title="History" placement="right">
                  <HistoryOutlined style={styleIcon} />
                </Tooltip>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={"/dashboard/settings"}>
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
            <Badge color={"red"} size="default" count={data.length}>
              <Announcement data={data} styleIcon={styleIcon} />
            </Badge>

            <Tooltip title="Logout" placement="right">
              <LogoutOutlined
                style={styleIcon}
                onClick={(e) => {
                  dispatch(authActions.logout());
                  setTimeout(() => {
                    navigate("/login");
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
                avatar={formatIcons(item.category)}
                title={"Thông báo đến từ " + item.name}
                description={
                  " Ưu đãi lên đến " +
                  item.amount +
                  " khi sử dụng dich vụ " +
                  item.category +
                  " đến từ " +
                  item.name +
                  " đến ngày " +
                  item.dateTime +
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
