import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  List,
  Search,
  Container,
  Button,
  Table,
  Card,
  Select,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { userListing } from "../redux/actions/userAction";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  useEffect(() => {
    async function getUserList() {
      await dispatch(userListing());
    }
    getUserList();
  }, []);
  return (
    <Container>
      <div className="manage-advertise">
        <h2
          style={{
            paddingLeft: 20,
            paddingTop: 20,
          }}
        >
          Manage Manager
        </h2>
        <Card>
          <div className="search-container">
            <div className="searh-div">
              <div>
                <Search value="search" />
              </div>
              <div>
                <List>
                  <List.Item>
                    <Button className="btn-search">Search</Button>
                  </List.Item>
                  <List.Item>
                    <Button className="btn-import">Import</Button>
                  </List.Item>
                  <List.Item>
                    <Button className="btn-export">Export</Button>
                  </List.Item>
                  <List.Item>
                    <Button
                      className="btn-home"
                      onClick={() => history.push("/adminuser")}
                    >
                      Back to Home
                    </Button>
                  </List.Item>
                </List>
              </div>
            </div>
          </div>

          <Table basic="very" className="table-content">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Designation</Table.HeaderCell>
                <Table.HeaderCell>Organisation</Table.HeaderCell>
                <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {userList?.data?.map((usr) => (
                <Table.Row>
                  <Table.Cell>
                    <div className="flexDiv">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
                        alt="manage"
                      />
                      <p>{usr.name}</p>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{usr.designation}</Table.Cell>
                  <Table.Cell>{usr.email}</Table.Cell>
                  <Table.Cell>
                    <div className="d-flx">
                      {" "}
                      <i className="fas fa-pen" />
                      <i className="fas fa-trash-alt" />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    {" "}
                    <Button>Deactivate</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </Container>
  );
};
