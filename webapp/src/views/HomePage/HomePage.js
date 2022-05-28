import { React, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import "./HomePage.scss";
import homePageBanner from "../../assets/images/HomePage.png";
import Register from "../../components/Register/Register";

const HomePage = () => {
  const [loginForm, setLoginForm] = useState(true);
  const getLoginResponse = (data) => {
    setLoginForm(data);
  };
  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  return (
    <div className="homePage">
      <Header response={getLoginResponse} />
      <div className="body">
        <div className="right">
          <Register loginForm={loginForm} />
        </div>
        <div className="left">
          <img src={homePageBanner} alt="Home Page Banner" />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default HomePage;
