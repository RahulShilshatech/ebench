import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  List,
  Search,
  Container,
  Button,
  Table,
  Card,
} from "semantic-ui-react";
import { vendorListing } from "../redux/actions/userAction";

export default () => {
  const dispatch = useDispatch();
  const { vendorList } = useSelector((state) => state.user);
  const history = useHistory();
  useEffect(() => {
    async function getVendorList() {
      await dispatch(vendorListing());
    }
    getVendorList();
  }, []);

  return (
    <Container>
      <div className="manage-advertise">
        <div className="space-div">
          <h3> Manage Requiter</h3>
          <Button className="ui primary button btn-upgrade">Manage REquiter</Button>
        </div>
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
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Mobile</Table.HeaderCell>
                <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {vendorList?.data?.map((ven) => (
                <Table.Row>
                  <Table.Cell>
                    <div className="flexDiv">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
                        alt="vendor"
                      />
                      <p>{ven.name}</p>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{ven.designation}</Table.Cell>
                  <Table.Cell>{ven.email}</Table.Cell>
                  <Table.Cell>{ven.mobile}</Table.Cell>
                  <Table.Cell>
                    <div className="d-flx">
                      {" "}
                      <i className="fas fa-pen" />
                      <i className="fas fa-trash-alt" />
                    </div>
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
