import {
  BankOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
  GiftOutlined,
  IssuesCloseOutlined,
  SketchOutlined,
  UsergroupAddOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import {
  AutoComplete,
  Avatar,
  Col,
  Divider,
  Image,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  Tag,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardActions,
  selectIsOpenModalTransfers,
} from "../../../features/dashboard/dashboardSlice";

const myFriends = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ngọc Trinh",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Minh Triết",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Đức Huy",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Minh Quân",
  },
  {
    src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Hồng Hải",
  },
  {
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Quốc Khánh",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Tường Huy",
  },
  {
    src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Tiến Đạt",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Tấn Lộc",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Đen Vâu",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Phan Thiện",
  },
  {
    src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ngọc Bích",
  },
];
//#region Money Transfers
export function MoneyTransfer() {
  const { is, name } = useSelector(selectIsOpenModalTransfers);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [transferMyFriendVisible, setTransferMyFriendVisible] = useState(false);
  const [myFriendInormation, setMyFriendInormation] = useState({});

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
        name: "Transfer",
      })
    );
  };

  function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
  const renderOption = (avatar, name) => {
    return {
      value: name,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Space>
            <Avatar src={avatar}></Avatar>
            <span>{name}</span>
          </Space>
          <span>{getRandomInt(18, 50)} age</span>
        </div>
      ),
    };
  };

  return (
    <Modal
      width={700}
      title="Transfer"
      visible={name === "Transfer" ? is : false}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <AutoCompilate />
      <Service />
      <Myfriend />
    </Modal>
  );
  //#region AutoComplete
  function AutoCompilate() {
    return (
      <div className="list-friend-header">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 400 }}
          options={myFriends.map((item) => renderOption(item.src, item.name))}
          onSelect={(data) => {
            console.log(data);
            setTransferMyFriendVisible(true);
            setMyFriendInormation({
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              name: data,
            });
          }}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input.Search
            size="large"
            placeholder="Name, phone number, account number."
            enterButton
            allowClear
          />
        </AutoComplete>
      </div>
    );
  }
  //#endregion
  //#region my friend
  function Myfriend() {
    return (
      <div className="list-friend-transfer">
        <Typography.Title level={4}>My friends</Typography.Title>
        <MoneyTransferMyFriend
          src={myFriendInormation.src}
          name={myFriendInormation.name}
          setTransferMyFriendVisible={setTransferMyFriendVisible}
          transferMyFriendVisible={transferMyFriendVisible}
        />

        <Row gutter={[15, 15]} style={{ padding: 20 }}>
          {myFriends.map((friend, index) => (
            <Col
              span={4}
              key={index}
              onClick={(e) => {
                setTransferMyFriendVisible(true);
                setMyFriendInormation({ src: friend.src, name: friend.name });
              }}
            >
              <Space
                direction="vertical"
                align="center"
                style={{ cursor: "pointer", width: "100%" }}
              >
                <Avatar src={friend.src} size="large"></Avatar>
                <Typography.Title level={5}>{friend.name}</Typography.Title>
              </Space>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  //#endregion
  //#region service
  function Service() {
    return (
      <div className="transfer-service" style={{ margin: "30px 0 30px 0" }}>
        <Typography.Title level={4}>Other services</Typography.Title>
        <Row>
          <Col span={12} style={{ padding: 20 }}>
            <div className="transfer-service-left">
              <Space
                size={"large"}
                style={{ justifyContent: "space-evenly", width: "100%" }}
              >
                <div className="transfer-service-left-item">
                  <UsergroupAddOutlined
                    style={{ color: "orange", fontSize: 30 }}
                  />
                  <Typography.Title level={5}>Transfer</Typography.Title>
                </div>
                <div className="transfer-service-left-item">
                  <BankOutlined style={{ color: "blue", fontSize: 30 }} />
                  <Typography.Title level={5}>Banking</Typography.Title>
                </div>
                <div className="transfer-service-left-item">
                  <GiftOutlined style={{ color: "pink", fontSize: 30 }} />
                  <Typography.Title level={5}>Gift</Typography.Title>
                </div>
              </Space>
            </div>
          </Col>
          <Col span={12} style={{ padding: 20 }}>
            <div className="transfer-service-right">
              <Space
                size={"large"}
                align="center"
                style={{ justifyContent: "space-evenly", width: "100%" }}
              >
                <div className="transfer-service-left-item">
                  <YoutubeOutlined style={{ color: "red", fontSize: 30 }} />
                  <Typography.Title level={5}>Youtube</Typography.Title>
                </div>
                <div className="transfer-service-left-item">
                  <SketchOutlined
                    style={{ color: "blueviolet", fontSize: 30 }}
                  />
                  <Typography.Title level={5}>Diamond</Typography.Title>
                </div>
                <div className="transfer-service-left-item">
                  <DollarCircleOutlined
                    style={{ color: "yellowgreen", fontSize: 30 }}
                  />
                  <Typography.Title level={5}>Coin</Typography.Title>
                </div>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  //#endregion
}
//#endregion

//#region MoneyTransferMyFriend
const warning = () => {
  message.warning("vui lòng nhập số tiền cần chuyển");
};
function MoneyTransferMyFriend({
  src,
  name,
  setTransferMyFriendVisible,
  transferMyFriendVisible,
}) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confrimTransferVisible, setConfrimTransferVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");

  const handleOk = () => {
    if (value === 0) {
      warning();
    } else {
      setConfirmLoading(true);
      setTimeout(() => {
        setConfirmLoading(false);
        setConfrimTransferVisible(true);
      }, 2000);
    }
  };

  const handleCancel = () => {
    setTransferMyFriendVisible(false);
  };

  return (
    <>
      <ConfirmTransferMyfriend
        name={name}
        confrimTransferVisible={confrimTransferVisible}
        setConfrimTransferVisible={setConfrimTransferVisible}
        value={value}
        message={message}
        src={src}
        setTransferMyFriendVisible={setTransferMyFriendVisible}
      />
      <Modal
        width={400}
        title={name}
        visible={transferMyFriendVisible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Space
          direction="vertical"
          style={{ width: "100%" }}
          align="center"
          size={"middle"}
        >
          <InputNumber
            style={{ width: "150px" }}
            min={0}
            defaultValue={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={(value) => setValue(value)}
          />
          <Input.TextArea
            rows={4}
            value={message}
            style={{ width: "350px", borderRadius: 10 }}
            placeholder="Nhập lời nhắn"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Space>
            <Tag
              style={{ borderRadius: 10, cursor: "pointer" }}
              onClick={(e) => {
                console.log(e);
                setMessage(e.target.innerText + "💰");
              }}
            >
              Chốt đơn !!!
            </Tag>
            <Tag
              style={{ borderRadius: 10, cursor: "pointer" }}
              onClick={(e) => {
                console.log(e);
                setMessage(e.target.innerText + "💰");
              }}
            >
              Chuyển tiền nha.
            </Tag>
            <Tag
              style={{ borderRadius: 10, cursor: "pointer" }}
              onClick={(e) => {
                console.log(e);
                setMessage(e.target.innerText + "💰");
              }}
            >
              Cảm ơn Shop
            </Tag>
          </Space>
          <Image
            src={src}
            style={{ width: 360, height: 350, objectFit: "cover" }}
          ></Image>
        </Space>
      </Modal>
    </>
  );
}
//#endregion

//#region ConfirmTransferMyfriend
function ConfirmTransferMyfriend({
  message,
  value,
  src,
  name,
  confrimTransferVisible,
  setConfrimTransferVisible,
  setTransferMyFriendVisible,
}) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [statusConfirm, setStatusConfirm] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setStatusConfirm(true);
    }, 2000);
    setTimeout(() => {
      setStatus(true);
    }, 5000);
    if (status) {
      handleCancel();
    }
  };

  const handleCancel = () => {
    setConfrimTransferVisible(false);
    setTransferMyFriendVisible(false);
  };
  return (
    <Modal
      width={400}
      title={<Avatar src={src} size={"large"} />}
      visible={confrimTransferVisible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Space direction="vertical">
        {statusConfirm ? (
          status ? (
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <CheckCircleOutlined
                style={{ fontSize: 50, color: "yellowgreen" }}
              />
              <Typography.Title level={3} style={{ color: "yellowgreen" }}>
                Hoàn thành
              </Typography.Title>
            </Space>
          ) : (
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <ClockCircleOutlined style={{ fontSize: 50, color: "orange" }} />
              <Typography.Title level={3} style={{ color: "orange" }}>
                Đang thực thi
              </Typography.Title>
            </Space>
          )
        ) : (
          <Space direction="vertical" align="center" style={{ width: "100%" }}>
            <IssuesCloseOutlined
              style={{ fontSize: 50, color: "#e6ff06b93" }}
            />
            <Typography.Title level={3} style={{ color: "#e6ff06b93" }}>
              Chờ xác nhận
            </Typography.Title>
          </Space>
        )}

        <Typography.Title level={5}>CHI TIẾT GIAO DỊCH</Typography.Title>
        <Space
          direction="vertical"
          style={{
            padding: 10,
            borderRadius: 10,
            border: "1px solid #c9c4c4",
            width: "350px",
          }}
        >
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Typography.Title level={5}>Chuyển đến</Typography.Title>
            <Typography.Title level={5}>{name}</Typography.Title>
          </Space>
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Typography.Title level={5}>Tên danh bạ</Typography.Title>
            <Typography.Title level={5}>{name}</Typography.Title>
          </Space>
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Typography.Title level={5}>Số tiền</Typography.Title>
            <Typography.Title level={5}>{value} $</Typography.Title>
          </Space>
          <Divider style={{ margin: 0 }} />
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Typography.Title level={5}>Phí giao dịch</Typography.Title>
            <Typography.Title level={5}>Miễn phí</Typography.Title>
          </Space>
          <Typography.Title level={4}>Lời nhắn</Typography.Title>
          <Typography.Paragraph>{message}</Typography.Paragraph>
          <Divider style={{ margin: 0 }} />
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Typography.Title level={4}>Tổng tiền</Typography.Title>
            <Typography.Title level={5}>{value} $</Typography.Title>
          </Space>
        </Space>
      </Space>
    </Modal>
  );
}
//#endregion
