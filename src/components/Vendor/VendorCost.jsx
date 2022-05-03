import React from "react";
import {
  Table,
  Container,
  Button,
  Input,
  Grid,
  Select,
  Search,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import CommonModal from "../Common/CommonModal";
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
            <h3>Costing</h3>
            {/* <Button
              className="ui primary button btn-upgrade"
              onClick={() => setOpen(!open)}
            >
              Create Invoice
            </Button> */}
            <div className="tags">
              <Select placeholder="Created" />
              <Select placeholder="Lowest" />
              <Search />
            </div>
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>

                <Table.HeaderCell>Fixed Cost</Table.HeaderCell>
                <Table.HeaderCell>Hourly Cost</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Node Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>
                  {" "}
                  <i className="fas fa-edit" onClick={() => setOpen(!open)} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>
                  {" "}
                  <i className="fas fa-edit" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>
                  {" "}
                  <i className="fas fa-edit" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>
                  {" "}
                  <i className="fas fa-edit" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Container>
      <CommonModal
        open={open}
        onClose={() => setOpen(!open)}
        classNames={{ modal: "signup-modal" }}
      >
        <div className="modal-div">
          <h4>Team Costing</h4>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <div>
                  <p>React js</p>
                  <p>Node js</p>
                </div>
              </Grid.Column>
              <Grid.Column width={10}>
                <Table celled fixed singleLine>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Team Members</Table.HeaderCell>

                      <Table.HeaderCell>Experience</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Rakshay</Table.Cell>

                      <Table.Cell>2yrs</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Rakshay</Table.Cell>

                      <Table.Cell>2yrs</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Rakshay</Table.Cell>

                      <Table.Cell>Indigo</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="divCenter">
            <div className="pr-3">
              <label>Fixed Cost</label>
              <Input
                name="availability"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Weekly Cost</label>
              <Input
                name="availability"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </CommonModal>
    </Navbar>
  );
};
