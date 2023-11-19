import { TextField } from "@mui/material";
import React from "react";
import { loginForm } from "../../constant";
import { Button, Checkbox, Form, Input } from "antd";
import "../../styles.css"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate= useNavigate()
  const onFinish = () => {
    console.log("Success:");
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };

  return (
    <div className="login-container common-col a-center j-center ">
    <Form
      name="basic"
      layout="vertical"
      className="common-box-shadow"
      
      style={{ maxWidth: 700 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="secondary" onClick={() => navigate("/sign-up")} >
          Don't have a account?
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
