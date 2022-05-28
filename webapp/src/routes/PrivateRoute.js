import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  return props.isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
