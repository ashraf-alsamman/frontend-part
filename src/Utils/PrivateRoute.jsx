import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticatedState = useSelector(
    (state) => state.auth.token !== null,
  );
  const isAuthenticatedStorage = localStorage.getItem("token") !== null;

  const navigate = useNavigate();
  useEffect(() => {
    // If the token does not exist in either state or storage, redirect to login
    if (!(isAuthenticatedState || isAuthenticatedStorage)) {
      navigate("/login");
    }
  }, [isAuthenticatedState, isAuthenticatedStorage]);

  return <Component {...rest} />;
};

export default PrivateRoute;
