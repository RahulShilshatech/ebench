import React, { useState } from "react";
import { Table, Container, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default () => {
  const [formType, setformType] = useState("seller");

  return (
    <Navbar>
      <Container className="mt-2">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <div className="manage-profile">
                <div className="profile">
                  <img
                    src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg"
                    alt="we"
                  />
                  <div className="toggle">
                    <div
                      className={
                        formType === "signin" ? "signInActive" : "signIn"
                      }
                      onClick={() => setformType("seller")}
                    >
                      Seller
                    </div>
                    <div
                      className={
                        formType === "signup" ? "signupActive" : "signUp"
                      }
                      onClick={() => setformType("buyer")}
                    >
                      Buyer
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column width={12}>
              {formType === "buyer" ? (
                <div className="buyer">
                  <h3>Buyer</h3>
                  <Grid>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-user-md"></i>
                            <div>
                              <p>Jobs</p>
                            </div>
                          </div>
                        </div>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-file-invoice"></i>
                            <div>
                              <p>Invoice</p>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="stats">
                          <div className="stats-content">
                            <i class="far fa-user"></i>
                            <div>
                              <p>Hired People</p>
                            </div>
                          </div>
                        </div>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-rupee-sign"></i>
                            <div>
                              <p> Payments</p>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-ad" aria-hidden="true"></i>
                            <div>
                              <p>Advertisement</p>
                            </div>
                          </div>
                        </div>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-ticket-alt"></i>
                            <div>
                              <p>Raise Issues</p>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <div className="add-buyer">
                    <h3>Recent Activities</h3>
                    <Table celled fixed singleLine>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Latest JObs</Table.HeaderCell>
                          <Table.HeaderCell>Job Advertise</Table.HeaderCell>
                          <Table.HeaderCell>Applied Jobs</Table.HeaderCell>
                          <Table.HeaderCell>New Jobs</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Link to="/projectdetail">Eclcus</Link>
                          </Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>{" "}
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="buyer">
                  <h3>Seller</h3>
                  <Grid>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-user-md"></i>
                            <div>
                              <p>Manage Member</p>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="stats">
                          <div className="stats-content">
                            <i class="far fa-user"></i>
                            <div>
                              <p> Manage Admin</p>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="stats">
                          <div className="stats-content">
                            <i className="fas fa-ad" aria-hidden="true"></i>
                            <div>
                              <p>Manage Groups</p>
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <div className="add-buyer">
                    <h3>Recent Activities</h3>
                    <Table celled fixed singleLine>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Latest JObs</Table.HeaderCell>
                          <Table.HeaderCell>Job Advertise</Table.HeaderCell>
                          <Table.HeaderCell>Applied Jobs</Table.HeaderCell>
                          <Table.HeaderCell>New Jobs</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Link to="/projectdetail">Eclcus</Link>
                          </Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>{" "}
                        <Table.Row>
                          <Table.Cell>Torum</Table.Cell>
                          <Table.Cell>Ui Design</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                          <Table.Cell>01-May-2021</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Navbar>
  );
};
