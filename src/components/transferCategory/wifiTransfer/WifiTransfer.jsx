import { Image, Input, Modal, Space, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

//#region Wifi Transfers
export function WifiTransfer() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        dashboardActions.setIsOpenModalTransfers({
          is: false,
          name: "Wifi",
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
        name: "Wifi",
      })
    );
  };
  return (
    <Modal
      title="Wifi Transfer"
      visible={name === "Wifi" ? is : false}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={400}
    >
      <Space direction="vertical" size={"large"}>
        <Input.Search placeholder="Tìm kiếm" enterButton></Input.Search>
        <Space direction="vertical" size={"large"}>
          <Typography.Title level={4}>Tất cả dịch vụ</Typography.Title>
          <Space
            direction="vertical"
            size={"large"}
            style={{ overflow: "auto" }}
          >
            {data.map((item) => (
              <Space size={"large"}>
                <Image
                  preview={false}
                  width={70}
                  height={70}
                  src={item.src}
                  alt="logo"
                  style={{
                    border: "1px solid gray",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                ></Image>
                <Space
                  direction="vertical"
                  size={"small"}
                  style={{ borderBottom: "1px solid gray" }}
                >
                  <Typography.Title level={5}>{item.name}</Typography.Title>
                  <Typography.Text>{item.direction}</Typography.Text>
                </Space>
              </Space>
            ))}
          </Space>
        </Space>
      </Space>
    </Modal>
  );
}
const data = [
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.HXyVDZ8wtCatNWXIFg5oFQHaEA&w=690&c=7&pid=Api&p=0",
    name: "Internet/Truyen hình Viettel",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.vUOgZA3Ptr3aL5At2fadAAHaFJ&w=690&c=7&pid=Api&p=0",
    name: "FPT Telecom",
    direction: "Toàn quốc",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.aeQXGP2pfQCUyPQCYKT0lgHaFj&w=690&c=7&pid=Api&p=0",
    name: "VNPT Toàn Quốc",
    direction: "Thanh toán dịch vụ 63 tỉnh thành",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.5spTpbBQ37HunGa1cdfC5gAAAA&w=690&c=7&pid=Api&p=0",
    name: "ADSL STC - SPT",
    direction: "Internet/Điện thoại cố định",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.N9E_91di-FqVTcTPrx7WHgHaFM&pid=Api",
    name: "SCTV",
    direction: "Truyền hình cáp internet",
  },
];

//#endregion
