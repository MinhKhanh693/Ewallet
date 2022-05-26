import {
  Button,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  message,
  notification,
  Row,
  Space,
  Typography,
} from "antd";
import {
  DollarOutlined,
  LockOutlined,
  UserOutlined,
  GoogleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import React from "react";
import "./LoginLayout.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../authSlice";
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Notification Erorr",
    description:
      "Wrong account or password, please try again. Username : abc , Password : abc",
  });
};
export function LoginLayout() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const onFinish = (values) => {
    const hide = message.loading("Action in progress..", 0);
    setTimeout(hide, 500);
    if (values.username !== "abc" || values.password !== "abc") {
      openNotificationWithIcon("error")();
    }
    dispacth(
      authActions.login({
        username: values.username,
        password: values.password,
        navigate,
      })
    );
  };
  return (
    <div className="LoginLayout">
      <div className="loginlayout-box">
        <Row style={{ height: "100%" }}>
          <Col span={12} style={{ padding: "70px 100px " }}>
            <Space size={"middle"} align={"center"}>
              <DollarOutlined style={{ color: "blue", fontSize: 30 }} />
              <Typography.Text style={{ fontWeight: "bold", fontSize: 20 }}>
                E-Wallet
              </Typography.Text>
            </Space>
            <Space style={{ marginTop: 30 }} direction="vertical">
              <Typography.Title level={2}>Log in</Typography.Title>
              <Typography.Text style={{ color: "#797c85" }}>
                Welcome back! Please enter your details.
              </Typography.Text>
            </Space>
            <Space style={{ marginTop: 30, width: "80%" }} direction="vertical">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    allowClear
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password
                    allowClear
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link className="login-form-forgot" to={"/login"}>
                    Forgot password
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button-google"
                    icon={<GoogleOutlined />}
                  >
                    Sign With Google
                  </Button>
                  Or <Link to={"/login"}>register now!</Link>
                </Form.Item>
              </Form>
            </Space>
          </Col>
          <Col span={12} style={{ height: "100%" }}>
            <Image
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: "0 10px 10px 0" }}
              preview={false}
              src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwZXdhbGxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
            ></Image>
          </Col>
        </Row>
      </div>
    </div>
  );
}
