import { Image, Input, Modal, Space, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, QrcodeOutlined } from "@ant-design/icons";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

export function ElectricityTranfers() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        dashboardActions.setIsOpenModalTransfers({
          is: false,
          name: "Transfer",
        })
      );
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    dispatch(
      dashboardActions.setIsOpenModalTransfers({
        is: false,
        name: "Electricity",
      })
    );
  };
  return (
    <Modal
      title="Electricity Transfer"
      visible={name === "Electricity" ? is : false}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Space direction="vertical" size={"large"}>
        <Space size={"large"} style={{ padding: "20px 50px 20px 50px" }}>
          <Image
            style={{
              objectFit: "contain",
              border: "1px solid gray",
              borderRadius: "10px",
            }}
            preview={false}
            width={70}
            height={70}
            src="https://tse2.mm.bing.net/th?id=OIP.3mZz-TnKfapAWlnNhBPT7gHaD-&w=690&c=7&pid=Api&p=0"
          ></Image>
          <Space direction="vertical">
            <Typography.Title level={5}>Điện Lực Toàn Quốc</Typography.Title>
            <Typography.Text>
              Áp dụng cho các tỉnh thành Việt Nam
            </Typography.Text>
          </Space>
        </Space>
        <Space direction="vertical" size={"large"}>
          <Space direction="vertical">
            <Typography.Title level={5}>Thông tin khách hàng</Typography.Title>
            <Space size={"large"}>
              <Input
                size="large"
                placeholder="Thông tin khách hàng"
                prefix={<UserOutlined />}
              />
              <QrcodeOutlined style={{ fontSize: 30 }} />
            </Space>
          </Space>
          <Space direction="vertical">
            <Typography.Title level={5}>Hóa đơn mẫu</Typography.Title>
            <Image src="https://tse2.mm.bing.net/th?id=OIP._SBziZDEZ2eFywxf_iyb2AHaGv&w=690&c=7&pid=Api&p=0"></Image>
          </Space>
        </Space>
      </Space>
    </Modal>
  );
}
