import React from "react";
import {
  Card,
  Button,
  Input,
  Grid,
  Tab,
  Table,
  Search,
} from "semantic-ui-react";
import { useState } from "react";

export default () => {
  const [register, setRegister] = useState(false);
  const panes = [
    {
      menuItem: "Directors",
      render: () => (
        <Tab.Pane attached={false}>
          {" "}
          <h3>Direction</h3>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email ID</Table.HeaderCell>
                <Table.HeaderCell>DIN</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {!register && (
              <Button onClick={() => setRegister(!register)}>
                <i class="fas fa-plus-circle"></i>Add
              </Button>
            )}
            {register && (
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>

                  <Table.Cell>Approved</Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
          <div className="button-div mt-2">
            <Button content>Cancel</Button>
            <Button primary>Save</Button>
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Auditors",
      render: () => (
        <Tab.Pane attached={false}>
          {" "}
          <h3>Audiors</h3>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email ID</Table.HeaderCell>
                <Table.HeaderCell>DIN</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {!register && (
              <Button onClick={() => setRegister(!register)}>
                <i class="fas fa-plus-circle"></i>Add
              </Button>
            )}
            {register && (
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>

                  <Table.Cell>Approved</Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
          <div className="button-div mt-2">
            <Button content>Cancel</Button>
            <Button primary>Save</Button>
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Company Secratory",
      render: () => (
        <Tab.Pane attached={false}>
          {" "}
          <h3>Company Secratory</h3>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email ID</Table.HeaderCell>
                <Table.HeaderCell>DIN</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {!register && (
              <Button onClick={() => setRegister(!register)}>
                <i class="fas fa-plus-circle"></i>Add
              </Button>
            )}
            {register && (
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>

                  <Table.Cell>Approved</Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
          <div className="button-div mt-2">
            <Button content>Cancel</Button>
            <Button primary>Save</Button>
          </div>
        </Tab.Pane>
      ),
    },
  ];
  return (
    <>
      <div className="address-tab">
        <Card>
          <h3>company id</h3>
          <div className="conteent">
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <div>
                    {" "}
                    <label>Entity TYpe</label>
                    <span className="">-</span>
                  </div>
                  <div className="mt-2">
                    {" "}
                    <label>Company PAN</label>
                    <span className="">-</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div>
                    {" "}
                    <label>CIN</label>
                    <span className="">-</span>
                  </div>
                  <div className="mt-2">
                    {" "}
                    <label>Company TAN</label>
                    <span className="">-</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div>
                    {" "}
                    <label>Date of Incorporation</label>
                    <span className="">-</span>
                  </div>
                  <div className="mt-2">
                    {" "}
                    <label>GST</label>
                    <span className="">-</span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Card>
        <Card>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Card>
        <Card>
          <h3>BANK ACCOUNT INFO</h3>

          <div className=" address-tab">
            {!register && (
              <Button onClick={() => setRegister(!register)}>
                <i class="fas fa-plus-circle"></i>Add
              </Button>
            )}
            {register && (
              <div className="address">
                <div>
                  {" "}
                  <Input placeholder="Address Line 1" />
                </div>

                <div className="address-field">
                  <Input placeholder="Bank Name" />
                  <Input placeholder="City" />
                  <Input placeholder="Branch Name" />
                </div>
                <div className="address-field">
                  <Input placeholder="IFSC Code" />
                  <Input placeholder="Account Type" />
                  <Input placeholder="Account Number" />
                </div>
                <div className="button-div mt-2">
                  <Button content>Cancel</Button>
                  <Button primary>Save</Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};
