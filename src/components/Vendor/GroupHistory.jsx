import React from "react";
import { Table, Container, Grid, Card,Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default () => {
  return (
    <Navbar>
      <Container className="mt-2 group">
        <div className="create-scedule">
          <Button primary className="btn-schedule">
           Add Member
          </Button>
        </div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Card>
                <div className="group-div">
                  <div className="">
                    <i class="fas fa-users"></i>
                  </div>
                  <p className="text-center">Node js</p>
                  <div className="group-flex">
                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />

                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />

                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />

                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                  </div>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column width={12}>
              <div className="historyVendor">
                <Table celled fixed singleLine>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Project Name</Table.HeaderCell>
                      <Table.HeaderCell>Assigned Developer</Table.HeaderCell>
                      <Table.HeaderCell>Project Length</Table.HeaderCell>
                      <Table.HeaderCell>Started at</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Matrics</Table.Cell>
                      <Table.Cell>Robin</Table.Cell>
                      <Table.Cell>6 months</Table.Cell>
                      <Table.Cell>23-june,2021</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Matrics</Table.Cell>
                      <Table.Cell>Robin</Table.Cell>
                      <Table.Cell>6 months</Table.Cell>
                      <Table.Cell>23-june,2021</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Matrics</Table.Cell>
                      <Table.Cell>Robin</Table.Cell>
                      <Table.Cell>6 months</Table.Cell>
                      <Table.Cell>23-june,2021</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Matrics</Table.Cell>
                      <Table.Cell>Robin</Table.Cell>
                      <Table.Cell>6 months</Table.Cell>
                      <Table.Cell>23-june,2021</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <Grid className="mt-2">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <div className="historyVendor">
                      <Table celled fixed singleLine>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Member Name</Table.HeaderCell>
                            <Table.HeaderCell>Availability</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <div className="table-flex">
                                {" "}
                                <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                                Jamie
                              </div>
                            </Table.Cell>
                            <Table.Cell>4 hrs</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <div className="table-flex">
                                {" "}
                                <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                                Jamie
                              </div>
                            </Table.Cell>
                            <Table.Cell>4 hrs</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <div className="table-flex">
                                {" "}
                                <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                                Jamie
                              </div>
                            </Table.Cell>
                            <Table.Cell>4 hrs</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <div className="table-flex">
                                {" "}
                                <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                                Jamie
                              </div>
                            </Table.Cell>
                            <Table.Cell>4 hrs</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="historyVendor">
                      <Table celled fixed singleLine>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Task Name</Table.HeaderCell>
                            <Table.HeaderCell>Project</Table.HeaderCell>
                            <Table.HeaderCell>Member Assigned</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Add button</Table.Cell>
                            <Table.Cell>Matrices</Table.Cell>
                            <Table.Cell>Radhika</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Add button</Table.Cell>
                            <Table.Cell>Matrices</Table.Cell>
                            <Table.Cell>Radhika</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Add button</Table.Cell>
                            <Table.Cell>Matrices</Table.Cell>
                            <Table.Cell>Radhika</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Add button</Table.Cell>
                            <Table.Cell>Matrices</Table.Cell>
                            <Table.Cell>Radhika</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Add button</Table.Cell>
                            <Table.Cell>Matrices</Table.Cell>
                            <Table.Cell>Radhika</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>{" "}
      </Container>
    </Navbar>
  );
};
