import React from "react";
import "./Message.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Message = (props) => {
  return (
    <div className="message">
      {props.isReciever ? (
        <>
          <div className="messagePositionRight">
            <div className="messageContentRight">
              <Avatar size={30} icon={<UserOutlined style={{color: "#EEEEEE"}}/>} className="avatar" />
              {props.text}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="messageContentLeft">
            <Avatar size={30} icon={<UserOutlined />} className="avatar" />
            {props.text}
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
