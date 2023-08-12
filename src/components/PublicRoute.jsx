import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/authSelectors";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
