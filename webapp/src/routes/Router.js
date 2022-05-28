import { Routes, Route } from "react-router-dom";
import ChatPage from "../views/ChatPage/ChatPage";
import HomePage from "../views/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route element={<PrivateRoute isLogin={true}/>}>
        <Route exact path="/chats" element={<ChatPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
