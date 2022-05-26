import { Image, Input, Modal, Space, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

export function MedicalTransfer() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        dashboardActions.setIsOpenModalTransfers({
          is: false,
          name: "Medical",
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
        name: "Medical",
      })
    );
  };
  return (
    <Modal
      title="Medical Transfer"
      visible={name === "Medical" ? is : false}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
        <Input.Search placeholder="Tìm bệnh viện" enterButton></Input.Search>
        <Space direction="vertical" size={"large"}>
          <Typography.Title level={4}>Bệnh viện đề xuất</Typography.Title>
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
        <Space direction="vertical" size={"large"}>
          <Typography.Title level={4}>Tất cả bệnh viện</Typography.Title>
          <Space
            direction="vertical"
            size={"large"}
            style={{ overflow: "auto" }}
          >
            {dataTwo.map((item) => (
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
    src: "https://tse3.mm.bing.net/th?id=OIP.GW0GcP_RyFZTcYLdqhyBwwHaH7&h=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Đại Học Y Dược thành phố Hồ Chí Minh",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.KS-bAHGEW5PnO_27d31gqAHaGm&w=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Chợ Rẫy",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.h5B7v77KRIT4ZqUxzfzIdgAAAA&w=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Nhi Đồng 1",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.qAH8hgNrYYpr4C20Khc8UQAAAA&w=690&c=7&pid=Api&p=0",
    name: "Bênh viện Da Liễu TP.HCM",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.U6SXsbvhq2j8YNrBNq9BsQHaHa&w=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Đa Khoa Vạn Hạnh",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.NLkahdkXHjYSChNIbzjdIAHaHb&h=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Quốc Tế Minh Anh",
    direction: "Áp dụng toàn quốc",
  },
];
const dataTwo = [
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.0pw5psTSPDuHcj9g_hraNwHaHa&w=690&c=7&pid=Api&p=0",
    name: "Bênh viện Da Liễu TP.HCM",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.DVxI2v-r6qXzA_1MQZ4vqwHaHa&w=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Đa Khoa Vạn Hạnh",
    direction: "Áp dụng toàn quốc",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.DVxI2v-r6qXzA_1MQZ4vqwHaHa&w=690&c=7&pid=Api&p=0",
    name: "Bệnh viện Quốc Tế Minh Anh",
    direction: "Áp dụng toàn quốc",
  },
];
