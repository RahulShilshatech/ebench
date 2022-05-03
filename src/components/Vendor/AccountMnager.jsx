import React from "react";
import { Table, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function TaskHistory() {
  return (
    <Navbar>
      <Container className="mt-2 projectLink">
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Project Name</Table.HeaderCell>
              <Table.HeaderCell>Task</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Completed</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Link to="/v-projectdetail">Eclcus</Link>
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
      </Container>
    </Navbar>
  );
}

export default TaskHistory;
