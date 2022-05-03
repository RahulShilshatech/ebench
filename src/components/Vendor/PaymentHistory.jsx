import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="historyVendor">
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Cleint Name</Table.HeaderCell>

            <Table.HeaderCell>Developer</Table.HeaderCell>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Payment Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Robin</Table.Cell>

            <Table.Cell>Jammie</Table.Cell>
            <Table.Cell>xyzabc</Table.Cell>

            <Table.Cell>$2345</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Robin</Table.Cell>

            <Table.Cell>Jammie</Table.Cell>
            <Table.Cell>xyzabc</Table.Cell>

            <Table.Cell>$2345</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Robin</Table.Cell>

            <Table.Cell>Jammie</Table.Cell>
            <Table.Cell>xyzabc</Table.Cell>

            <Table.Cell>$2345</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Robin</Table.Cell>

            <Table.Cell>Jammie</Table.Cell>
            <Table.Cell>xyzabc</Table.Cell>

            <Table.Cell>$2345</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Robin</Table.Cell>

            <Table.Cell>Jammie</Table.Cell>
            <Table.Cell>xyzabc</Table.Cell>

            <Table.Cell>$2345</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
