import React from "react";
import { Redirect, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AdminPrivateRoute = ({ component: Component, user, ...rest }) => {
  const decodedToken = jwtDecode(localStorage.getItem("token"));
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") && decodedToken.type === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
