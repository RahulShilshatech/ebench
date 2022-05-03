import React from "react";
import { Table, Container, Button, Input, Grid } from "semantic-ui-react";
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
            <h3>Invoice</h3>
            <Button
              className="ui primary button btn-upgrade"
              onClick={() => setOpen(!open)}
            >
              Create Invoice
            </Button>
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Recent Created</Table.HeaderCell>

                <Table.HeaderCell>Paid Invoice</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Node Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>React Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>React Js</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
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
        <div className="invoice-modal">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <div className="icon">icon</div>
              </Grid.Column>
              <Grid.Column>
                <div className="invoice-heading">
                  <h5>Invoice</h5>
                  <div className="label-div">
                    <label>Invoice Number</label>
                    <span className="">12345667</span>
                  </div>
                  <div className="label-div">
                    <label>Date</label>
                    <span className="">12345667</span>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2} className="mt-2">
            <Grid.Row>
              <Grid.Column>
                <div className="label-div">
                  <label>Bill To</label>
                  <p className="">Timmy Turner</p>
                  <p>957 south street</p>
                  <p>LOndon</p>
                  <p>United kingdom</p>
                </div>
                <div className="label-div">
                  <label>Tax Number</label>
                  <span className="">12345667</span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="label-div">
                  <label>Bill From</label>
                  <p className="">Timmy Turner</p>
                  <p>957 south street</p>
                  <p>LOndon</p>
                  <p>United kingdom</p>
                </div>
                <div className="label-div">
                  <label>Tax Number</label>
                  <span className="">12345667</span>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>item</Table.HeaderCell>

                <Table.HeaderCell> cost</Table.HeaderCell>
                <Table.HeaderCell> qantity</Table.HeaderCell>
                <Table.HeaderCell> price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Mastering the Grid</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>$2345</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>splashify 2.0</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>$2345</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell>Subtotal</Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell>Subtotal</Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell>Subtotal</Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div className="label-div">
            <label>Tax Number</label>
            <span className="">12345667</span>
          </div>
          <div className="label-div">
            <label>Tax Number</label>
            <span className="">12345667</span>
          </div>
        </div>
      </CommonModal>
    </Navbar>
  );
};
