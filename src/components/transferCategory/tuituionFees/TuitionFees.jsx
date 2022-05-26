import { Image, Input, Modal, Space, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

export function TuitionFees() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        dashboardActions.setIsOpenModalTransfers({
          is: false,
          name: "Tuition fees",
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
        name: "Tuition fees",
      })
    );
  };
  return (
    <Modal
      title="Tuition fees Transfer"
      visible={name === "Tuition fees" ? is : false}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={450}
    >
      <Space direction="vertical" size={"large"}>
        <Input.Search placeholder="Tìm trường học" enterButton></Input.Search>
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
    src: "https://tse4.mm.bing.net/th?id=OIP.Yz8elwzwrX_rxgIUgG_eVwHaJg&h=690&c=7&pid=Api&p=0",
    name: "Đại Học Sư Phạm Kỹ Thuật TP.HCM",
    direction: "Thanh toán học phí",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.poigiqUrY7JeHt8uzfJmoAHaHa&w=690&c=7&pid=Api&p=0",
    name: "Đại Học Khoa Học Tự Nhiên TP.HCM",
    direction: "Thanh toán học phí",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.iafplV5HCyRkVhELsUJPOwHaHe&h=690&c=7&pid=Api&p=0",
    name: "Đại Học Bách Khoa TP.HCM",
    direction: "Thanh toán học phí",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.wjEFMBW1wGKzLyHcS5ACAgHaHa&w=690&c=7&pid=Api&p=0",
    name: "Đại Học Công Nghệ Thông Tin TP.HCM",
    direction: "Thanh toán học phí",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.yLIXCdNxgcgY3zKf2h8NVwAAAA&w=690&c=7&pid=Api&p=0",
    name: "Đại Học Khoa Học Xã Hội Nhân Văn TP.HCM",
    direction: "Thanh toán học phí",
  },
];
