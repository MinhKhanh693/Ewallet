import {
  Avatar,
  Button,
  Col,
  Collapse,
  Input,
  message,
  Row,
  Space,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  UserOutlined,
  CarryOutOutlined,
  PhoneOutlined,
  MailOutlined,
  AimOutlined,
  PlusOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
const style = {
  styleIcon: {
    fontSize: 20,
  },
};
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};
export function SettingsLayout() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div
      className="SettingsLayout"
      style={{ overflow: "auto", height: "100vh" }}
    >
      <Typography.Title level={2} style={{ padding: 20 }}>
        Profile settings
      </Typography.Title>
      <Row style={{ padding: 10 }}>
        <UserContract />
        <EditUser
          beforeUpload={beforeUpload}
          handleChange={handleChange}
          imageUrl={imageUrl}
          uploadButton={uploadButton}
        />
      </Row>
      <ChangePassword />
    </div>
  );
}

function UserContract() {
  return (
    <Col
      span={8}
      style={{
        boxShadow: "0 0 15px -10px rgb(0 0 0 / 75%)",
        padding: "20px",
      }}
    >
      <Space
        size={"large"}
        align={"center"}
        style={{
          width: "100%",
        }}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          size={"large"}
        ></Avatar>
        <Space direction="vertical" size={"small"}>
          <Typography.Text
            style={{
              fontWeight: "bold",
            }}
          >
            Đoàn Minh Khánh
          </Typography.Text>
          <Typography.Text>Customer</Typography.Text>
        </Space>
      </Space>
      <Space direction="vertical">
        <Space
          direction="vertical"
          style={{
            marginTop: 30,
          }}
          size={"large"}
        >
          <Typography.Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#afaaaa",
            }}
          >
            Account details
          </Typography.Text>
          <Space size={"large"}>
            <UserOutlined style={style.styleIcon} />
            <Typography.Text>khanhdoan693</Typography.Text>
          </Space>
          <Space size={"large"}>
            <CarryOutOutlined style={style.styleIcon} />
            <Typography.Text>2001-09-02</Typography.Text>
          </Space>
        </Space>

        <Space
          direction="vertical"
          style={{
            marginTop: 30,
          }}
          size={"large"}
        >
          <Typography.Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#afaaaa",
            }}
          >
            Contact details
          </Typography.Text>
          <Space size={"large"}>
            <PhoneOutlined style={style.styleIcon} />
            <Typography.Text>+0984943851</Typography.Text>
          </Space>
          <Space size={"large"}>
            <MailOutlined style={style.styleIcon} />
            <Typography.Text>khanhdoan693@gmail.com</Typography.Text>
          </Space>
          <Space size={"large"}>
            <AimOutlined style={style.styleIcon} />
            <Typography.Text>Binh Duong, Viet Nam</Typography.Text>
          </Space>
        </Space>
      </Space>
    </Col>
  );
}

function EditUser({ beforeUpload, handleChange, imageUrl, uploadButton }) {
  return (
    <Col
      span={16}
      style={{
        boxShadow: "0 0 15px -10px rgb(0 0 0 / 75%)",
        padding: 20,
      }}
    >
      <Typography.Title level={4}>Edit User </Typography.Title>
      <Row>
        <Col span={20}>
          <Space
            direction="vertical"
            size={"large"}
            style={{
              width: "50%",
            }}
          >
            <Input
              allowClear
              placeholder="User name"
              prefix={<UserOutlined />}
            />
            <Input
              allowClear
              placeholder="First name"
              prefix={<UserOutlined />}
            />
            <Input
              allowClear
              placeholder="Last name"
              prefix={<UserOutlined />}
            />
            <Input allowClear placeholder="Email" prefix={<MailOutlined />} />
            <Input
              allowClear
              placeholder="Phone number"
              prefix={<PhoneOutlined />}
            />
            <Input allowClear placeholder="Andress" prefix={<AimOutlined />} />
          </Space>
        </Col>
        <Col span={4}>
          <Space
            direction="vertical"
            style={{
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            <Button
              size="large"
              style={{
                background: "blue",
                color: "white",
                borderRadius: 10,
              }}
            >
              Update
            </Button>
          </Space>
        </Col>
      </Row>
    </Col>
  );
}

function ChangePassword({ visible }) {
  return (
    <Collapse
      style={{
        margin: 20,
        width: "40%",
      }}
    >
      <Collapse.Panel header="Change Password">
        <Space
          direction="vertical"
          style={{
            width: "70%",
          }}
          size={"large"}
        >
          <Input.Password placeholder="old password" />
          <Input.Password placeholder="new password" />
          <Input.Password
            placeholder="confirm password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            style={{
              color: "white",
              background: "blue",
              borderRadius: 10,
            }}
          >
            Confirm
          </Button>
        </Space>
      </Collapse.Panel>
    </Collapse>
  );
}
