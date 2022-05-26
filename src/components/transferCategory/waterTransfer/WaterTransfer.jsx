import { AutoComplete, Image, Input, Modal, Space, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserOutlined,
  QrcodeOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

export function WaterTransfer() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        dashboardActions.setIsOpenModalTransfers({
          is: false,
          name: "Water",
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
        name: "Water",
      })
    );
  };
  return (
    <Modal
      title="Water Transfer"
      visible={name === "Water" ? is : false}
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
            src="https://tse1.mm.bing.net/th?id=OIP.VxMrsbq11moIlFHjuErMJwHaHa&w=690&c=7&pid=Api&p=0"
          ></Image>
          <Space direction="vertical">
            <Typography.Title level={5}>Cục Cấp Nước Quốc Gia</Typography.Title>
            <Typography.Text>
              Áp dụng cho các tỉnh thành Việt Nam
            </Typography.Text>
          </Space>
        </Space>
        <Space direction="vertical" size={"large"}>
          <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
            <Typography.Title level={5}>Thông tin khách hàng</Typography.Title>
            <Space size={"large"}>
              <Input
                size="large"
                placeholder="Thông tin khách hàng"
                prefix={<UserOutlined />}
                allowClear
              />
              <QrcodeOutlined style={{ fontSize: 30 }} />
            </Space>

            <AutoComplete
              options={data}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              style={{ width: "70%" }}
            >
              <Input
                size="large"
                placeholder="Chọn khu vực"
                prefix={<BarcodeOutlined />}
                allowClear
              />
            </AutoComplete>
          </Space>
          <Space direction="vertical">
            <Typography.Title level={5}>Hóa đơn mẫu</Typography.Title>
            <Image src="https://tse2.mm.bing.net/th?id=OIP.acuBtO5liSRomXInJVJGxwHaFz&w=690&c=7&pid=Api&p=0"></Image>
          </Space>
        </Space>
      </Space>
    </Modal>
  );
}
const data = [
  { value: "Nước Bến Thành" },
  { value: "Nước Sài Gòn - Huyện Củ Chi" },
  { value: "Nước Nông Thôn" },
  { value: "Nước Chợ lớn" },
  { value: "Nước Nhà Bè" },
  { value: "Nước Thủ Đức" },
];
