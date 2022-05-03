import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="historyVendor">
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Front End Developer</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Front End Developer</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Front End Developer</Table.Cell>
            <Table.Cell>23-may-2021</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
