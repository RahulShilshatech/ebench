import React from "react";
import { Table, Container, Button, Grid, TextArea } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import CommonModal from "../Common/CommonModal";

import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const [poopen, setpoOpen] = useState(false);
  const [uploadopen, setuplodOpen] = useState(false);

  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("teamexcel", e.target.files[0]);
  };

  return (
    <Navbar>
      <Container>
        <div className="historyVendor mt-2">
          <div className="space-div">
            <h3>Purchase Order</h3>
            <div>
              <Button
                className="ui primary button btn-upgrade mr-1"
                onClick={() => setOpen(!open)}
              >
                Create Invoice
              </Button>
              <Button
                className="ui primary button btn-upgrade mr-1"
                onClick={() => setpoOpen(!poopen)}
              >
                Create PO
              </Button>
              <Button
                className="ui primary button btn-upgrade"
                onClick={() => setOpen(!open)}
              >
                Upload PO
              </Button>
            </div>
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>PO from the company</Table.HeaderCell>

                <Table.HeaderCell>PO to the company</Table.HeaderCell>
                <Table.HeaderCell>Purpose of PO</Table.HeaderCell>
                <Table.HeaderCell>PO Amount</Table.HeaderCell>
                <Table.HeaderCell>PO created at</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Eclcus</Table.Cell>

                <Table.Cell>Indigo</Table.Cell>
                <Table.Cell>xyz</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>12-may,2021</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Eclcus</Table.Cell>

                <Table.Cell>Indigo</Table.Cell>
                <Table.Cell>xyz</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>12-may,2021</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Eclcus</Table.Cell>

                <Table.Cell>Indigo</Table.Cell>
                <Table.Cell>xyz</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>12-may,2021</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Eclcus</Table.Cell>

                <Table.Cell>Indigo</Table.Cell>
                <Table.Cell>xyz</Table.Cell>

                <Table.Cell>$2345</Table.Cell>
                <Table.Cell>12-may,2021</Table.Cell>
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
          <div className="invoice-heading">
            <h5>INVOICE</h5>
            <p># INV-2021/000011</p>
            <p>UNPAID</p>
          </div>
          <div className="inv-logo">
            <img
              src="https://s3-us-west-2.amazonaws.com/kredily-companies-media/kredily1-d6133848-3ffb-4ebe-bedb-c0977da094d8/company_logo_c84a41b0626011eb83dcd6feed74f11f33416.png"
              alt=""
              gds
            />
          </div>

          <Grid columns={2} className="mt-1">
            <Grid.Row>
              <Grid.Column>
                <div className="label-div">
                  <label className="font-weight-bold">xxxxxx pvt. ltd</label>
                  <p className="">Address 1 : ABC</p>
                  <p>City:EPGAGAGAAGAG</p>
                  <p>State</p>
                  <p>India</p>
                  <p>
                    GST Number:
                    <br /> XXXXXXXXXXXXXXXX <br />
                    SAC Code: XXXXXXXX
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="label-div text-right">
                  <label className="font-weight-bold">Bill To</label>
                  <p className="font-weight-bold">Shilsha Technologies</p>
                  <p>15H, Sector 63</p>
                  <p>NOIDA UTTAR PRADESH</p>
                  <p>IN 201013</p>
                  <p>
                    Invoice Date: 2021-06-01
                    <br />
                    Due Date: 2021-06-30
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table className="table-div">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>

                <Table.HeaderCell>Item</Table.HeaderCell>

                <Table.HeaderCell> Qty</Table.HeaderCell>
                <Table.HeaderCell> Billing Model</Table.HeaderCell>
                <Table.HeaderCell> Rate</Table.HeaderCell>
                <Table.HeaderCell> Amount(INR)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>
                  Amitabh
                  <br /> Dedicated Developer
                </Table.Cell>

                <Table.Cell>1</Table.Cell>
                <Table.Cell>Hourly</Table.Cell>
                <Table.Cell>00000</Table.Cell>

                <Table.Cell>0.00,000</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>

                <Table.Cell>Subtotal</Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>IGST (18.00%)</Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>

                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>Ammount Due </Table.Cell>
                <Table.Cell>$565</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div className="ofline-payment">
            <label className="font-weight-bold">Offline Payment</label>
            <p>Bank Transfer</p>
            <p>Beneficiary Account No- 1234567891233</p>

            <p>
              IFSC Code - XXXXXXXXXX
              <br />
              Beneficiary Name - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              <br />
              Beneficiary Address- XXXXXXX
            </p>

            <p>
              SWIFT/BIC- XXXXXXXXXXXXXXX <br />
              Bank Name- XXXXXXXXXXXXX
              <br />
              Bank Country- India
              <br />
              Bank Address- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>

            <p className="font-weight-bold">Note:</p>
            <p>
              Please send receipt details after making payment on x x x
              XXXXXXXXXXXXXXXXXXXXXXXX@rrrxxx.com
            </p>
          </div>
          <div className="sign mt-2">Authorized Signature</div>
        </div>
      </CommonModal>
      <CommonModal
        open={poopen}
        onClose={() => setpoOpen(!poopen)}
        classNames={{ modal: "signup-modal po-modal" }}
      >
        <div className="pomodel">
          <h4>Create PO</h4>
          <TextArea
            placeholder="Tell us more"
            style={{ width: "100%", height: "180px" }}
          />
          <Button
            className="ui primary button btn-upgrade mt-1"
            onClick={() => setOpen(!open)}
          >
            Save
          </Button>
        </div>
      </CommonModal>
    </Navbar>
  );
};
