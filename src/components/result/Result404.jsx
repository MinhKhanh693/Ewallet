import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Result404() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={(e) => navigate("/Ewallet/dashboard/home")}>
          Back Home
        </Button>
      }
    />
  );
}
