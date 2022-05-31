import {
  DollarOutlined,
  InboxOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Image,
  Input,
  Modal,
  Radio,
  Row,
  Space,
  Tag,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions, appSelect } from "../../app/appSlice";

const style = {
  styleCol: {
    maxWidth: "100%",
    textAlign: "center",
  },
  styleTitle: {
    margin: 0,
  },
  styleUpload: {
    height: 200,
    width: "95%",
  },
};
export default function ContractDashboard() {
  const [topUp, setTopUp] = useState(false);
  const [withDrawals, setithDrawals] = useState(false);
  const totalRemainder = useSelector(appSelect.selectTotalRemainder);
  const totalExpenditure = useSelector(appSelect.selectTotalExpenditure);
  const totalRevenue = useSelector(appSelect.selectTotalRevenue);
  return (
    <div className="ContractDashboard" style={{ height: "100vh" }}>
      <Row style={{ flexDirection: "column", height: "100%" }} justify="center">
        <Col span={6} style={style.styleCol}>
          <Space direction="vertical" size={"small"}>
            <Typography.Title level={5} style={style.styleTitle}>
              Total Remainder
            </Typography.Title>
            <Typography.Title level={4}>${totalRemainder}</Typography.Title>
          </Space>
        </Col>
        <Statics
          totalExpenditure={totalExpenditure}
          totalRevenue={totalRevenue}
        />
        <Col span={12} style={style.styleCol}>
          <Space
            size={"large"}
            direction={"vertical"}
            style={{ marginTop: 60 }}
          >
            <Upload.Dragger style={style.styleUpload}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
            <Space>
              <TopUp
                visible={topUp}
                setTopUp={setTopUp}
                totalRemainder={totalRemainder}
              ></TopUp>
              <WithDrawals
                visible={withDrawals}
                setithDrawals={setithDrawals}
                totalRemainder={totalRemainder}
              />
              <Button
                onClick={() => setTopUp(true)}
                size="large"
                style={{ color: "white", background: "blue", borderRadius: 10 }}
                icon={<MenuUnfoldOutlined />}
              >
                Top-up
              </Button>
              <Button
                onClick={() => setithDrawals(true)}
                size="large"
                style={{ color: "white", background: "blue", borderRadius: 10 }}
                icon={<MenuFoldOutlined />}
              >
                Withdrawals
              </Button>
            </Space>
            <Typography.Text>Make a Depostl to your account</Typography.Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
function TopUp({ visible, setTopUp, totalRemainder }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setTopUp(false);
      setConfirmLoading(false);
      dispatch(appActions.topUp(value));
    }, 2000);
  };

  const handleCancel = () => {
    setTopUp(false);
  };
  return (
    <Modal
      visible={visible}
      width={500}
      title="Top Up"
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Space
        direction="vertical"
        size={"large"}
        align="center"
        style={{ width: "100%" }}
      >
        <TopUpInput totalRemainder={totalRemainder} />
      </Space>
      <Space
        direction="vertical"
        size={"middle"}
        style={{ padding: 25, width: "100%" }}
      >
        <Typography.Title level={4}>Nguồn tiền</Typography.Title>
        <SourceOfMoney
          src={
            "https://tse3.mm.bing.net/th?id=OIP.Tk90ZlXp7faJgGNIAdIiKgHaHa&w=690&c=7&pid=Api&p=0"
          }
          name={"BIDV"}
          direction={"Miễn phí giao dịch"}
          checked={true}
        />
        <SourceOfMoney
          src={
            "https://tse3.mm.bing.net/th?id=OIP.x1Vu-eiv7kyn3upurkDsxgHaHa&w=690&c=7&pid=Api&p=0"
          }
          name={"Thêm ngân hàng nội địa"}
          direction={"Miễn phí các giao dịch đến ngân hàng"}
          checked={false}
        />
      </Space>
    </Modal>
  );

  function SourceOfMoney({ src, name, direction, checked }) {
    return (
      <Space
        size={"large"}
        style={{
          width: "100%",
          padding: "5px 20px 10px 20px",
          boxShadow: "0 0 5px #b5b7b8",
          borderRadius: 5,
          justifyContent: "space-between",
        }}
      >
        <Image preview={false} width={50} height={50} src={src}></Image>
        <Space direction="vertical" size={"small"}>
          <Typography.Text style={{ fontWeight: 900, fontSize: 18 }}>
            {name}
          </Typography.Text>
          <Typography.Text>{direction}</Typography.Text>
        </Space>
        <Radio defaultChecked={checked}></Radio>
      </Space>
    );
  }

  function TopUpInput({ totalRemainder }) {
    return (
      <Space
        direction="vertical"
        size={"large"}
        style={{
          width: "100%",
          padding: "10px 30px 20px 30px",
          boxShadow: "0 0 5px #b5b7b8",
          borderRadius: 5,
        }}
      >
        <Space
          size={"middle"}
          style={{
            width: "100%",
            borderRadius: 5,
            background: "#f5f5f5",
            padding: "5px",
            justifyContent: "center",
          }}
        >
          <DollarOutlined style={{ color: "gray", fontSize: 30 }} />
          <Typography.Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Số dư ví : ${totalRemainder}
          </Typography.Text>
        </Space>
        <Input
          min={1}
          value={value}
          onChange={(e) => setValue(e.value)}
          type={"number"}
          placeholder="Số tiền cần nạp"
          style={{ borderRadius: 5, margin: 5 }}
          prefix={<DollarOutlined style={{ color: "gray" }} />}
          allowClear
        ></Input>
        <Space
          align="center"
          style={{ justifyContent: "space-evenly", width: "100%" }}
        >
          <Tag
            style={{ cursor: "pointer" }}
            icon={<DollarOutlined style={{ color: "gray" }} />}
            onClick={(e) => setValue(100.0)}
          >
            100.0 $
          </Tag>
          <Tag
            style={{ cursor: "pointer" }}
            icon={
              <DollarOutlined style={{ color: "gray", cursor: "pointer" }} />
            }
            onClick={(e) => setValue(200.0)}
          >
            200.0 $
          </Tag>
          <Tag
            style={{ cursor: "pointer" }}
            icon={
              <DollarOutlined style={{ color: "gray", cursor: "pointer" }} />
            }
            onClick={(e) => setValue(500.0)}
          >
            500.0 $
          </Tag>
          <Tag
            style={{ cursor: "pointer" }}
            icon={
              <DollarOutlined style={{ color: "gray", cursor: "pointer" }} />
            }
            onClick={(e) => setValue(1000.0)}
          >
            1000.0 $
          </Tag>
        </Space>
      </Space>
    );
  }
}

function WithDrawals({ visible, setithDrawals, totalRemainder }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setithDrawals(false);
      setConfirmLoading(false);
      dispatch(appActions.withDrawals(value));
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setithDrawals(false);
  };
  return (
    <Modal
      visible={visible}
      width={500}
      title="With Drawals"
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Space
        direction="vertical"
        size={"large"}
        align="center"
        style={{ width: "100%" }}
      >
        <TopUpInput totalRemainder={totalRemainder} />
      </Space>
      <Space
        direction="vertical"
        size={"middle"}
        style={{ padding: 25, width: "100%" }}
      >
        <Typography.Title level={4}>Phương Thức Nhận Tiền</Typography.Title>
        <SourceOfMoney
          src={
            "https://tse3.mm.bing.net/th?id=OIP.Tk90ZlXp7faJgGNIAdIiKgHaHa&w=690&c=7&pid=Api&p=0"
          }
          name={"BIDV"}
          direction={"Miễn phí 10 giao dịch hàng tháng"}
          checked={true}
        />
        <SourceOfMoney
          src={
            "https://tse2.mm.bing.net/th?id=OIP.QT5kBi5hI3ffDZDeQtVJqQHaHa&w=690&c=7&pid=Api&p=0"
          }
          name={"Rút về ngân hàng khác"}
          direction={"Miễn phí 30 giao dịch hàng tháng"}
          checked={false}
        />
      </Space>
    </Modal>
  );

  function SourceOfMoney({ src, name, direction, checked }) {
    return (
      <Space
        size={"large"}
        style={{
          width: "100%",
          padding: "5px 20px 10px 20px",
          boxShadow: "0 0 5px #b5b7b8",
          borderRadius: 5,
          justifyContent: "space-between",
        }}
      >
        <Image preview={false} width={50} height={50} src={src}></Image>
        <Space direction="vertical" size={"small"}>
          <Typography.Text style={{ fontWeight: 900, fontSize: 18 }}>
            {name}
          </Typography.Text>
          <Typography.Text>{direction}</Typography.Text>
        </Space>
        <Radio defaultChecked={checked}></Radio>
      </Space>
    );
  }

  function TopUpInput({ totalRemainder }) {
    return (
      <Space
        direction="vertical"
        size={"large"}
        style={{
          width: "100%",
          padding: "10px 30px 20px 30px",
          boxShadow: "0 0 5px #b5b7b8",
          borderRadius: 5,
        }}
      >
        <Space
          size={"middle"}
          style={{
            width: "100%",
            borderRadius: 5,
            background: "#f5f5f5",
            padding: "5px",
            justifyContent: "center",
          }}
        >
          <DollarOutlined style={{ color: "gray", fontSize: 30 }} />
          <Typography.Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Số dư ví : ${totalRemainder}
          </Typography.Text>
        </Space>
        <Input
          onChange={(e) => setValue(e.value)}
          value={value}
          type={"number"}
          min={1}
          placeholder="Số tiền cần rút"
          style={{ borderRadius: 5, margin: 5 }}
          prefix={<DollarOutlined style={{ color: "gray" }} />}
          allowClear
        ></Input>
        <Space
          align="center"
          style={{ justifyContent: "space-evenly", width: "100%" }}
        >
          <Tag
            style={{ cursor: "pointer" }}
            icon={<DollarOutlined style={{ color: "gray" }} />}
            onClick={(e) => setValue(100.0)}
          >
            100.0 $
          </Tag>
          <Tag
            style={{ cursor: "pointer" }}
            icon={<DollarOutlined style={{ color: "gray" }} />}
            onClick={(e) => setValue(200.0)}
          >
            200.0 $
          </Tag>
          <Tag
            style={{ cursor: "pointer" }}
            icon={<DollarOutlined style={{ color: "gray" }} />}
            onClick={(e) => setValue(500.0)}
          >
            500.0 $
          </Tag>
          <Tag
            style={{ cursor: "pointer" }}
            icon={<DollarOutlined style={{ color: "gray" }} />}
            onClick={(e) => setValue(1000.0)}
          >
            1000.0 $
          </Tag>
        </Space>
      </Space>
    );
  }
}

function Statics({ totalExpenditure, totalRevenue }) {
  return (
    <Col span={6} style={style.styleCol}>
      <Space direction="vertical" size={"small"}>
        <Typography.Title level={5} style={style.styleTitle}>
          Total Expenditure
        </Typography.Title>
        <Typography.Title level={4}>${totalExpenditure}</Typography.Title>
        <Typography.Title level={5} style={style.styleTitle}>
          Total Revenue
        </Typography.Title>
        <Typography.Title level={4}>${totalRevenue}</Typography.Title>
        <Typography.Title level={5} style={style.styleTitle}>
          Net osset
        </Typography.Title>
        <Typography.Title level={4}>
          ${Math.floor(totalExpenditure - totalRevenue)}
        </Typography.Title>
      </Space>
    </Col>
  );
}
