import React from "react";
import "./CustomFooter.scss";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="footerLayout">
      <FontAwesomeIcon icon={faCopyright} /> 2022 Created by Team ChatUp
    </Footer>
  );
};

export default CustomFooter;
