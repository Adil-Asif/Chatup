import { React, useEffect, useState } from "react";
import "./Sidebar.scss";
import { Menu, Layout, Form, Input, Modal, Select } from "antd";
import {
  TeamOutlined,
  WechatOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { Option } = Select;

const Sidebar = (props) => {
  const [friendId, setFriendId] = useState("");
  const [groupDetails, setGroupDetails] = useState("");
  const [isFriendModalVisible, setIsFriendModalVisible] = useState(false);
  
  const [isGroupModalVisible, setIsGroupModalVisible] = useState(false);
  const items = props.items;
  const groups = props.groups;

  const [form] = Form.useForm();

  const onSubmitFriends = (values) => {
    setFriendId(values.friendId);
    setIsFriendModalVisible(false);
  };
  const onSubmitGroup = (values) => {
    setGroupDetails(values);
    setIsGroupModalVisible(false)
  };
  useEffect(() => {
    if (friendId !== "") {
      console.log(friendId);
    }
  }, [friendId]);
  useEffect(() => {
    if (groupDetails !== "") {
      console.log(groupDetails);
    }
  }, [groupDetails]);

  return (
    <div className="sidebar">
      <Sider>
        <Menu mode="inline" className="menu">
          <Menu.SubMenu key="a" title="Friends" icon={<WechatOutlined />}>
            <Menu.Item>
              <div
                onClick={() => {
                  setIsFriendModalVisible(true);
                }}
              >
                <UserAddOutlined style={{ marginRight: "5px" }} /> Add Friend
              </div>
              <Modal
                centered
                title="Add Friend"
                visible={isFriendModalVisible}
                okText="Submit"
                cancelText="Cancel"
                onCancel={() => {
                  setIsFriendModalVisible(false);
                }}
                onOk={() => {
                  form
                    .validateFields()
                    .then((values) => {
                      form.resetFields();
                      onSubmitFriends(values);
                    })
                    .catch((info) => {
                      console.log("Validate Failed:", info);
                    });
                }}
              >
                <div className="addFrieindsForm">
                  <Form form={form}>
                    <Form.Item
                      name="friendId"
                      required
                      label="Friend User Id"
                      rules={[
                        {
                          required: true,
                          message: "Please enter user id",
                        },
                      ]}
                    >
                      <Input placeholder="Enter User ID" required />
                    </Form.Item>
                  </Form>
                </div>
              </Modal>
            </Menu.Item>
            {items.map((item) => {
              return (
                <>
                  <Menu.Item key={item.id}>
                    <div
                      onClick={(event) => {
                        props.ChatDetails(item);
                        event.preventDefault();
                      }}
                    >
                      {item.Name}{" "}
                    </div>
                  </Menu.Item>
                </>
              );
            })}
          </Menu.SubMenu>
          <Menu.SubMenu key="b" title="Groups" icon={<TeamOutlined />}>
            <Menu.Item>
              <div
                onClick={() => {
                  setIsGroupModalVisible(true);
                }}
              >
                <UsergroupAddOutlined
                  style={{ marginRight: "5px", fontSize: "18px" }}
                />{" "}
                Create Group
              </div>
              <Modal
                centered
                title="Create Group"
                visible={isGroupModalVisible}
                okText="Submit"
                cancelText="Cancel"
                onCancel={() => {
                  setIsGroupModalVisible(false);
                }}
                onOk={() => {
                  form
                    .validateFields()
                    .then((values) => {
                      form.resetFields();
                      onSubmitGroup(values);
                    })
                    .catch((info) => {
                      console.log("Validate Failed:", info);
                    });
                }}
              >
                <div className="addFrieindsForm">
                  <Form form={form}>
                    <Form.Item
                      name="groupName"
                      required
                      label="Group Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Group Name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter Group Name"
                        required
                        style={{ width: "95%", marginLeft: "20px" }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="groupMembers"
                      required
                      label="Group Members"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Group Members Ids",
                        },
                      ]}
                    >
                      <Select
                        mode="tags"
                        style={{ width: "100%" }}
                        placeholder="Select your group Members"
                      >
                        {items.map((item) => {
                          return (
                            <Option key={item.id}>
                              {item.id}: &nbsp;{item.Name}{" "}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
              </Modal>
            </Menu.Item>
            {groups.map((group) => {
              return (
                <>
                  <Menu.Item key={group.id}>
                    {" "}
                    <div
                      onClick={(event) => {
                        props.ChatDetails(group);
                        event.preventDefault();
                      }}
                    >
                      {group.Name}{" "}
                    </div>
                  </Menu.Item>
                </>
              );
            })}
          </Menu.SubMenu>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
