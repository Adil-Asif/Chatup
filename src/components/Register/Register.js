import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Button, Form, Input, message } from "antd";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const { Password } = Input;
const Register = (props) => {
  let navigate = useNavigate();
  const moveToChatPage = () => {
    navigate("/chats");
  };
  const [loginDetails, setLoginDetails] = useState("");
  const [registrationDetails, setRegistrationDetails] = useState("");
  const onFinish = (values) => {
    props.loginForm
      ? setLoginDetails(values)
      : values.reenterPassword === values.password
      ? setRegistrationDetails(values)
      : message.error("Password donot match! Try Again ;)");
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    loginDetails !== "" ? (console.log(loginDetails),moveToChatPage()) : <></>;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginDetails]);

  useEffect(() => {
    registrationDetails !== "" ? console.log(registrationDetails) : <></>;
  }, [registrationDetails]);
  return (
    <div className="register">
      <div className="formHeader">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="formHeading">
          {!props.loginForm ? <>Registeration Form</> : <>Login Form</>}
        </div>
      </div>
      <div className="formBody">
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input style={{ marginLeft: "60px" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Password style={{ marginLeft: "65px" }} />
          </Form.Item>
          {!props.loginForm ? (
            <>
              <Form.Item
                label="Re - enter Password"
                name="reenterPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Password />
              </Form.Item>
            </>
          ) : (
            <></>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {props.loginForm ? <>Login</> : <>Register</>}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
