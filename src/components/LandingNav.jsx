import React from "react";
import { useHistory } from "react-router-dom";
import { List, Button, Search } from "semantic-ui-react";

export default ({ children, signinModal, signupModal }) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/landing");
  };
  return (
    <>
      <div className="topnav-landing">
        <div className="dFlex">
          <div className="logo">
            <img src="/images/ebench_logo.png" alt="icoo" />
          </div>
          <div className="mid-setion">
            <div>
              <Search value="search" />
            </div>
            <div>
              <List>
                <List.Item>Platform</List.Item>
                <List.Item>Customers</List.Item>
                <List.Item>Resources</List.Item>
                <List.Item>company</List.Item>
              </List>
            </div>
          </div>
          <div>
            {" "}
            {localStorage.getItem("token") ? (
              <List.Item>
                <Button primary onClick={() => handleLogout()}>
                  Logout
                </Button>
              </List.Item>
            ) : (
              <>
                <Button primary className="mr-2" onClick={signinModal}>
                  Sign In
                </Button>
                <Button primary onClick={signupModal}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
