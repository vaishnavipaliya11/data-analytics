import React, { useState } from "react";
import "../../styles.css";
import { SignUpForm } from "../../constant";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
export const SignUp = () => {
  const navigate = useNavigate();
  const [authDetails, setAuthDetails] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, "name");
    setAuthDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const onSubmit = async () => {
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        authDetails.email,
        authDetails.password
      );
      const user = authResponse.user;
      console.log(user, "authResponse");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    }
  };
  console.log(authDetails, "authDetails");
  return (
    <div className="login-container common-col a-center j-center">
      <Form
        layout="vertical"
        style={{ width: "40%" }}
        onFinish={onSubmit}
        className="common-box-shadow white-bg border-sm"
      >
        {SignUpForm.map(({ label, type, reqd, message, name }) => {
          return (
            <Form.Item
              label={label}
              rules={[{ required: { reqd }, message: { message } }]}
            >
              <Input
                type={type}
                name={name}
                value={authDetails[name]}
                onChange={(e) => onChangeHandler(e)}
              />
            </Form.Item>
          );
        })}

        <Form.Item id="btn-grp">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p
        type="secondary"
        onClick={() => navigate("/")}
        className="cur-pointer pd-sm"
      >
        Already have account?
      </p>
    </div>
  );
};
