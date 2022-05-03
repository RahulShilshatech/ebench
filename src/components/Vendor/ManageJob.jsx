import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
// import ImportForm from "../Vendor/Importform";
// import { getTeams } from "../redux/actions/teamAction";

export default () => {
  const [openImport, setOpenImport] = useState(false);
  const dispatch = useDispatch();
  const { vendorTeam } = useSelector((state) => state.team);
  const history = useHistory();
  //   useEffect(() => {
  //     async function teams() {
  //       dispatch(getTeams());
  //     }
  //     teams();
  //   }, []);
  return (
    <Navbar>
      <Container>
        <div className="manage-advertise">
          <Card>
            <div className="search-container">
              <div className="searh-div">
                <div>
                  <Search value="search" />
                </div>
                <div>
                  <List>
                    <List.Item>
                      <Button className="btn-export">Add</Button>
                    </List.Item>
                    <List.Item>
                      <Button className="btn-search">Create</Button>
                    </List.Item>
                    <List.Item>
                      <Button
                        className="btn-import"
                        onClick={() => setOpenImport(!openImport)}
                      >
                        Edit
                      </Button>
                    </List.Item>

                    <List.Item>
                      <Button
                        className="btn-home"
                        onClick={() => history.push("/v-dasbhoard")}
                      >
                        Back to Home
                      </Button>
                    </List.Item>
                  </List>
                </div>
              </div>
            </div>
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Job title</Table.HeaderCell>

                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>No of resumes</Table.HeaderCell>
                  <Table.HeaderCell>No of candidates</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Backend</Table.Cell>

                  <Table.Cell>Mern Technology</Table.Cell>
                  <Table.Cell>Select</Table.Cell>

                  <Table.Cell>22</Table.Cell>
                  <Table.Cell>12</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Backend</Table.Cell>

                  <Table.Cell>Mern Technology</Table.Cell>
                  <Table.Cell>Select</Table.Cell>

                  <Table.Cell>22</Table.Cell>
                  <Table.Cell>12</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Backend</Table.Cell>

                  <Table.Cell>Mern Technology</Table.Cell>
                  <Table.Cell>Select</Table.Cell>

                  <Table.Cell>22</Table.Cell>
                  <Table.Cell>12</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Backend</Table.Cell>

                  <Table.Cell>Mern Technology</Table.Cell>
                  <Table.Cell>Select</Table.Cell>

                  <Table.Cell>22</Table.Cell>
                  <Table.Cell>12</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Backend</Table.Cell>

                  <Table.Cell>Mern Technology</Table.Cell>
                  <Table.Cell>Select</Table.Cell>

                  <Table.Cell>22</Table.Cell>
                  <Table.Cell>12</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </div>
        {/* <ImportForm
          open={openImport}
          onClose={() => setOpenImport(!openImport)}
        /> */}
      </Container>
    </Navbar>
  );
};
