import { Collapse, Image, Input, Modal, Space, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

//#region Office Transfers
export function OfficeTransfer() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(
        dashboardActions.setIsOpenModalTransfers({
          is: false,
          name: "Office",
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
        name: "Office",
      })
    );
  };
  return (
    <Modal
      title="Office Transfer"
      visible={name === "Office" ? is : false}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={450}
    >
      <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
        <Input.Search placeholder="Tìm kiếm" enterButton></Input.Search>
        <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
          <Typography.Title level={4}>Chung cư gần bạn</Typography.Title>
          <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
            {data.map((item) => (
              <Collapse>
                <Collapse.Panel header={item.address}>
                  {item.office.map((office) => (
                    <Space size={"large"}>
                      <Image
                        preview={false}
                        width={70}
                        height={70}
                        src={office.src}
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
                        <Typography.Title level={5}>
                          {office.name}
                        </Typography.Title>
                        <Typography.Text>{office.direction}</Typography.Text>
                      </Space>
                    </Space>
                  ))}
                </Collapse.Panel>
              </Collapse>
            ))}
          </Space>
        </Space>
      </Space>
    </Modal>
  );
}
const data = [
  {
    address: "Thành Phố Hồ Chí Minh",
    office: [
      {
        src: "https://tse2.explicit.bing.net/th?id=OIP.N-lqiDstAtXPmvV22IqsLQHaFZ&pid=Api",
        name: "Chung cư Petroland",
        direction: "12 Tân Trào,Phường Tân Phú,Quận 7",
      },
      {
        src: "https://tse4.mm.bing.net/th?id=OIP.Fb38uJDf60OyqEdSK897CgHaEK&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Golden silk",
        direction: "210 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
      {
        src: "https://tse2.mm.bing.net/th?id=OIP.aMnauz2ehs6960M-IWF9MQHaHT&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Height",
        direction: "19/6 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
    ],
  },
  {
    address: "Hà Nội",
    office: [
      {
        src: "https://tse2.explicit.bing.net/th?id=OIP.N-lqiDstAtXPmvV22IqsLQHaFZ&pid=Api",
        name: "Chung cư Petroland",
        direction: "12 Tân Trào,Phường Tân Phú,Quận 7",
      },
      {
        src: "https://tse4.mm.bing.net/th?id=OIP.Fb38uJDf60OyqEdSK897CgHaEK&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Golden silk",
        direction: "210 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
      {
        src: "https://tse2.mm.bing.net/th?id=OIP.aMnauz2ehs6960M-IWF9MQHaHT&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Height",
        direction: "19/6 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
    ],
  },
  {
    address: "Bình Dương",
    office: [
      {
        src: "https://tse2.explicit.bing.net/th?id=OIP.N-lqiDstAtXPmvV22IqsLQHaFZ&pid=Api",
        name: "Chung cư Petroland",
        direction: "12 Tân Trào,Phường Tân Phú,Quận 7",
      },
      {
        src: "https://tse4.mm.bing.net/th?id=OIP.Fb38uJDf60OyqEdSK897CgHaEK&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Golden silk",
        direction: "210 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
      {
        src: "https://tse2.mm.bing.net/th?id=OIP.aMnauz2ehs6960M-IWF9MQHaHT&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Height",
        direction: "19/6 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
    ],
  },
  {
    address: "Bà Rịa Vũng Tàu",
    office: [
      {
        src: "https://tse2.explicit.bing.net/th?id=OIP.N-lqiDstAtXPmvV22IqsLQHaFZ&pid=Api",
        name: "Chung cư Petroland",
        direction: "12 Tân Trào,Phường Tân Phú,Quận 7",
      },
      {
        src: "https://tse4.mm.bing.net/th?id=OIP.Fb38uJDf60OyqEdSK897CgHaEK&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Golden silk",
        direction: "210 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
      {
        src: "https://tse2.mm.bing.net/th?id=OIP.aMnauz2ehs6960M-IWF9MQHaHT&w=690&c=7&pid=Api&p=0",
        name: "Chung cư Jamona Height",
        direction: "19/6 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh",
      },
    ],
  },
];
//#endregion
