import { TextField } from "@mui/material";
import React, { useState } from "react";
import { loginForm } from "../../constant";
import { Button, Checkbox, Form, Input } from "antd";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const Login = () => {
  const navigate = useNavigate();
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, "name");
    setAuthDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const onLogin = async () => {
    try {
      const authResponse = await signInWithEmailAndPassword(
        auth,
        authDetails.email,
        authDetails.password
      );
      const user = authResponse.user;
      console.log(user, "authResponse");

      if (user) {
        navigate("/dashboard");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };

  return (
    <div className="login-container common-col a-center j-center ">
      <Form
        name="basic"
        layout="vertical"
        className="common-box-shadow white-bg border-sm"
        style={{ width: "40%" }}
        initialValues={{ remember: true }}
        onFinish={onLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            name={"email"}
            value={authDetails["email"]}
            onChange={(e) => onChangeHandler(e)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            value={authDetails["password"]}
            onChange={(e) => onChangeHandler(e)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="secondary"
        onClick={() => navigate("/sign-up")}
        className="pd-sm"
      >
        Don't have a account?
      </Button>
    </div>
  );
};
