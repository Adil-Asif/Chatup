import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout, Form, Input, Button, Image } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import "./ChatPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Message from "../../components/Message/Message";
import welcomeImage from "../../assets/images/notSelected.svg";
import emptyChat from "../../assets/images/emptyChat.svg";
const { Content } = Layout;


const ChatPage = () => {
  const [chatDetails, setChatDetails] = useState("");
  // eslint-disable-next-line
  const [isMessages, setIsMessages] = useState(true);
  // TODO: Will need to setIsMessages to true if there are messages for a chat in the recieved response
  const [reply, setReply] = useState("");
  const [form] = Form.useForm();
  const getChatDetails = (data) => {
    setChatDetails(data);
  };
  useEffect(() => {
    console.log(chatDetails);
  }, [chatDetails]);

  const onFinish = (values) => {
    setReply(values);
    form.resetFields();
  };
  useEffect(() => {
    console.log(reply);
  }, [reply]);
  const items = [
    { id: "11", Name: "Adil1" },
    { id: "22", Name: "Mehran" },
    { id: "33", Name: "Abdullah" },
    { id: "44", Name: "Bilal" },
    { id: "55", Name: "Wajahat" },
  ];
  const groups = [
    {
      id: "1",
      Name: "Group1",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "2",
      Name: "Group2",
      Members: [
        { id: "3", Name: "Abdullah" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "3",
      Name: "Group3",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "3", Name: "Abdullah" },
        { id: "4", Name: "Bilal" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "4",
      Name: "Group4",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "5",
      Name: "Group5",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "6",
      Name: "Group6",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "7",
      Name: "Group7",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "8",
      Name: "Group8",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "9",
      Name: "Group9",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "10",
      Name: "Group10",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
    {
      id: "11",
      Name: "Group11",
      Members: [
        { id: "1", Name: "Adil" },
        { id: "2", Name: "Mehran" },
        { id: "5", Name: "Wajahat" },
      ],
    },
  ];
  const messages = [
    { text: "Hello", isReciever: true },
    { text: "Hi", isReciever: false },
    { text: "DevOps", isReciever: true },
    { text: "Project", isReciever: true },
    { text: "Working on it", isReciever: false },
    { text: "ok", isReciever: true },
    { text: "Will Complete it today", isReciever: false },
    { text: "On", isReciever: true },
    { text: "Which project are you working on", isReciever: false },
    { text: "And how much is it left", isReciever: false },
    { text: "Web Programming", isReciever: true },
    { text: "Start bhi nhi kia", isReciever: true },
    { text: "Deadline bht kareeb hai shuru krlo asap", isReciever: false },
    { text: "hn yr", isReciever: true },
    { text: "mood nhi ho rha bas", isReciever: true },
    { text: "Chalo theek hai jesa sahi lage", isReciever: false },
    { text: "Ajj DevOps complete kr dunga mien", isReciever: false },
    { text: "best hogaya", isReciever: true },
  ];

  return (
    <div className="chatPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "white",
        }}
      >
        <Sidebar items={items} groups={groups} ChatDetails={getChatDetails} />
        <Layout className="site-layout" style={{ backgroundColor: "white" }}>
          <Content style={{ margin: "0 0px" }}>
            <div className="body">
              <div className="left">
                {chatDetails !== "" ? (
                  <>
                    <div className="chatBox">
                      <div className="chatTitle">{chatDetails.Name}</div>
                      <div className="chat">
                        {isMessages ? (
                          <>
                            {messages.map((message) => {
                              return (
                                <Message
                                  text={message.text}
                                  isReciever={message.isReciever}
                                />
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <Image
                              src={emptyChat}
                              alt="Chat is Empty"
                              className="emptyImage"
                            />
                          </>
                        )}
                      </div>
                      <div className="replyForm">
                        <Form form={form} onFinish={onFinish}>
                          <Form.Item name="reply">
                            <Input placeholder="Reply...." />
                          </Form.Item>
                          <Form.Item>
                            <Button htmlType="submit">
                              <DoubleRightOutlined
                                style={{ fontSize: "20px" }}
                              />
                            </Button>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="welcomeImage">
                      <Image
                        src={welcomeImage}
                        alt="Welcome"
                        className="image"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default ChatPage;
