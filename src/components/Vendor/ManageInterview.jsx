import React from "react";
import { Table, Container,Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default () => {
  return (
    <Navbar>
      <Container>
        <div className="historyVendor mt-2">
          <div className="space-div">
            <h3> Interview</h3>
            <Button className="ui primary button btn-upgrade">
              Create Interview
            </Button>
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Interview Title</Table.HeaderCell>

                <Table.HeaderCell>Position</Table.HeaderCell>
                <Table.HeaderCell>Schedule</Table.HeaderCell>
                <Table.HeaderCell>Feedback</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>With candiadate</Table.Cell>

                <Table.Cell>Backend Developer</Table.Cell>
                <Table.Cell>21-may,2021 04:00</Table.Cell>

                <Table.Cell>Good</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>With candiadate</Table.Cell>

                <Table.Cell>Backend Developer</Table.Cell>
                <Table.Cell>21-may,2021 04:00</Table.Cell>

                <Table.Cell>Good</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>With candiadate</Table.Cell>

                <Table.Cell>Backend Developer</Table.Cell>
                <Table.Cell>21-may,2021 04:00</Table.Cell>

                <Table.Cell>Good</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>With candiadate</Table.Cell>

                <Table.Cell>Backend Developer</Table.Cell>
                <Table.Cell>21-may,2021 04:00</Table.Cell>

                <Table.Cell>Good</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>With candiadate</Table.Cell>

                <Table.Cell>Backend Developer</Table.Cell>
                <Table.Cell>21-may,2021 04:00</Table.Cell>

                <Table.Cell>Good</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Container>
    </Navbar>
  );
};
