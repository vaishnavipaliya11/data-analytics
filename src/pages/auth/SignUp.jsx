import React from "react";
import "../../styles.css";
import { SignUpForm } from "../../constant";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container common-col a-center j-center">
      <Form layout="vertical" className="common-box-shadow">
        {SignUpForm.map(({ label, type, reqd, message }) => {
          return (
            <Form.Item
              label={label}
              name="password"
              rules={[{ required: { reqd }, message: { message } }]}
            >
              <Input type={type} />
            </Form.Item>
          );
        })}

        <Form.Item id="btn-grp">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <p
            type="secondary"
            onClick={() => navigate("/")}
            className="cur-pointer"
          >
            Already have account?
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
