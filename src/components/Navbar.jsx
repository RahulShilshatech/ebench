import React from "react";
import { Button, List } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

export default ({ children }) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/landing");
  };
  return (
    <>
      <div className="topnav">
        <div className="dFlex">
          <div className="logo">
            <img src="/images/ebench_logo.png" alt="logoo" />
          </div>
          <div>
           
            <List>

              <List.Item>
                <i className="far fa-comment" />
              </List.Item>
              <List.Item>
                <div className="dropdown">
                  <div className="dropbtn">
                    {" "}
                    <i className="fas fa-bell" />
                  </div>
                  <div className="dropdown-content">
                    <a>New</a>
                    <a>Archive</a>
                    <a>Read</a>
                    <a>Unread</a>
                  </div>
                </div>
                {/* ------------------ */}
                <div className="dropdown">
                  <div className="dropbtn">

                    <i className="fas fa-bell" />
                  </div>
                  <div className="dropdown-content">
                    <a>Archive</a>
                    <a>Read</a>
                    <a>Unread</a>
                  </div>
                </div>
              </List.Item>
              <List.Item>
                <div className="dropdown">
                  <div className="dropbtn">
                    {" "}
                    <i className="far fa-user-circle" />
                  </div>
                  <div className="dropdown-content">
                    <a>Statics</a>
                    <a>Archive</a>
                    <a>Read</a>
                    <a>Unread</a>
                  </div>
                </div>
              </List.Item>
              <List.Item>
                <Button type="logout" primary onClick={() => handleLogout()}>
                  Logout
                </Button>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
