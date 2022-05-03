import React from "react";
import { Table, Container, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import CommonModal from "./Common/CommonModal";

import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("teamexcel", e.target.files[0]);
  };

  return (
    <Navbar>
      <Container>
        <div className="historyVendor mt-2">
          <div className="space-div">
            <h3>Subscription</h3>
            <Button
              className="ui primary button btn-upgrade"
              onClick={() => setOpen(!open)}
            >
              Create Subscription
            </Button>
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Plan Name</Table.HeaderCell>

                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Plan for</Table.HeaderCell>
                <Table.HeaderCell>CReated At</Table.HeaderCell>
                <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Gold</Table.Cell>
                <Table.Cell>$23478</Table.Cell>
                <Table.Cell>Vendor</Table.Cell>
                <Table.Cell>23-mar,2021</Table.Cell>
                <Table.Cell>
                  {" "}
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Silver</Table.Cell>
                <Table.Cell>$23478</Table.Cell>
                <Table.Cell>Vendor</Table.Cell>
                <Table.Cell>23-mar,2021</Table.Cell>
                <Table.Cell>
                  {" "}
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Platinum</Table.Cell>
                <Table.Cell>$23478</Table.Cell>
                <Table.Cell>Vendor</Table.Cell>
                <Table.Cell>23-mar,2021</Table.Cell>
                <Table.Cell>
                  {" "}
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Free</Table.Cell>
                <Table.Cell>$23478</Table.Cell>
                <Table.Cell>Vendor</Table.Cell>
                <Table.Cell>23-mar,2021</Table.Cell>
                <Table.Cell>
                  {" "}
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Container>
      <CommonModal
        open={open}
        onClose={() => setOpen(!open)}
        classNames={{ modal: "signup-modal subscribe-modal" }}
      >
        <h4>Subscription</h4>
        <div className="modal-sub">
          <p>1. Gold</p>
          <p>2. Silver</p>

          <p>3. Free</p>

          <p>4. Platinum</p>
        </div>
      </CommonModal>
    </Navbar>
  );
};
