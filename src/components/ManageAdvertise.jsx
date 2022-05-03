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
import Navbar from "./Navbar";
import ImportForm from "./Vendor/Importform";
import { getTeams } from "../redux/actions/teamAction";

export default () => {
  const [openImport, setOpenImport] = useState(false);
  const dispatch = useDispatch();
  const { vendorTeam } = useSelector((state) => state.team);
  const history = useHistory();
  useEffect(() => {
    async function teams() {
      dispatch(getTeams());
    }
    teams();
  }, []);
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
                      <Button className="btn-search">Search</Button>
                    </List.Item>
                    <List.Item>
                      <Button
                        className="btn-import"
                        onClick={() => setOpenImport(!openImport)}
                      >
                        Import
                      </Button>
                    </List.Item>
                    <List.Item>
                      <Button className="btn-export">Export</Button>
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
            <Table basic="very" className="table-content">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Designation</Table.HeaderCell>
                  <Table.HeaderCell>LinkedIn</Table.HeaderCell>
                  <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                  <Table.HeaderCell>Activate/Deactivate</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {vendorTeam?.data?.map((ven) => (
                  <Table.Row>
                    <Table.Cell>
                      <div className="flexDiv">
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
                          alt="imgg"
                        />
                        <p
                          style={{
                            textTransform: "capitalize",
                          }}
                        >
                          {ven.candidateName}
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {ven.candidateDesignation}
                    </Table.Cell>
                    <Table.Cell
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {ven.candidateLinkedIn}
                    </Table.Cell>
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
        <ImportForm
          open={openImport}
          onClose={() => setOpenImport(!openImport)}
        />
      </Container>
    </Navbar>
  );
};
