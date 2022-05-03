import React from "react";
import { Table, Container, Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default () => {
  return (
    <Navbar>
      <Container>
        <div className="historyVendor mt-2">
          <div className="space-div">
            <h3> Vendor Permission</h3>
            {/* <Button className="ui primary button btn-upgrade">
              Create Interview
            </Button> */}
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>S.No</Table.HeaderCell>

                <Table.HeaderCell width={6}>View Section</Table.HeaderCell>
                <Table.HeaderCell>Create</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>

                <Table.HeaderCell>View</Table.HeaderCell>

                <Table.HeaderCell>Print</Table.HeaderCell>

                <Table.HeaderCell>Detailed</Table.HeaderCell>
                <Table.HeaderCell>Download</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>

                <Table.Cell>DATE</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>

                <Table.Cell>DASHBOARD</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>

                <Table.Cell>COUNTRY</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>

                <Table.Cell>STATE</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>

                <Table.Cell>CITY</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>

                <Table.Cell>DEALER</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>7</Table.Cell>

                <Table.Cell>REDIALER</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>8</Table.Cell>

                <Table.Cell>PRODUCT</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>9</Table.Cell>

                <Table.Cell>GODOWN</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10</Table.Cell>

                <Table.Cell>TRANSPORTER</Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Container>
    </Navbar>
  );
};
